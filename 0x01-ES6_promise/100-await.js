import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let data;
  try {
    const user = await createUser();
    const pic = await uploadPhoto();
    data = { photo: pic, user };
  } catch (err) {
    data = { photo: null, user: null };
  }
  return data;
}
