export const UPDATE_CHAT_LOG = "UPDATE_CHAT_LOG";

export function updateChatLog(update) {
  return {
    type: UPDATE_CHAT_LOG,
    data: { ...update, date: new Date().toISOString() },
  };
}
