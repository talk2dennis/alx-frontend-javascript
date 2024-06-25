import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const myPromise1 = uploadPhoto();
  const myPromise2 = createUser();
  return Promise.all([myPromise1, myPromise2])
    .then((res) => console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
