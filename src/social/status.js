// Status updates operations

import { db } from '../firebase/db';

export function postStatus(webId, content) {
  return db.collection('statuses').add({
    webId,
    content,
    timestamp: new Date(),
  });
}

export function getStatuses(webId) {
  return db.collection('statuses').where('webId', '==', webId).orderBy('timestamp', 'desc').get();
}
