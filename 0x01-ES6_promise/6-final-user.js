import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myPromise = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const result = [];
  return Promise.allSettled(myPromise).then((res) => {
    res.map((res) => (
      result.push({
	      status: res.status,
        value: res.status === 'rejected' ? res.reason : res.data,
      })
    ));
    return result;
  });
}
