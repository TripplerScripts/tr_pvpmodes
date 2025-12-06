export default function refreshFriends(count: number): void {
  const friendsBTN = document.getElementById('friendsButton')
  friendsBTN.textContent = `👥 | ${count}`  
}