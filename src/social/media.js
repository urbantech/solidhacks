// Media upload & retrieval operations

import { storage } from '../firebase/config';

export function uploadMedia(webId, file) {
  const storageRef = storage.ref();
  const mediaRef = storageRef.child(`media/${webId}/${file.name}`);
  return mediaRef.put(file);
}

export function getMediaLink(webId, filename) {
  const storageRef = storage.ref();
  return storageRef.child(`media/${webId}/${filename}`).getDownloadURL();
}
