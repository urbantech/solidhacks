// Real-time chat operations

export function sendChatMessage(senderWebId, receiverWebId, content) {
    return db.collection('chat').add({
      senderWebId,
      receiverWebId,
      content,
      timestamp: new Date(),
    });
  }
  
  export function getChatMessages(senderWebId, receiverWebId) {
    return db.collection('chat').where('senderWebId', '==', senderWebId).where('receiverWebId', '==', receiverWebId).orderBy('timestamp').get();
  }
  