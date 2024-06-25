import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const myPromise = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const results = [];
  return Promise.allSettled(myPromise).then((result) => {
    result.map((res) => (
      result.push({
	      status: res.status,
        value: res.status === 'rejected' ? String(res.reason) : res.value,
      })
    ));
    return results;
  });
}
