import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myPromise = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];
  return Promise.allSettled(myPromise).then((res) => {
    res.map(({ status, data, reason }) => (
      result.push({
        status,
        value: status === 'rejected' ? reason.toString() : data,
      })
    ));
    return result;
  });
}
