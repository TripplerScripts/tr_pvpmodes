export default function refreshFriends(count: number) {
  const friendsBTN = document.getElementById('friendsButton')
  friendsBTN.textContent = `👥 | ${count}`  
}