export default (count: number) => {
  const friendsBTN = document.getElementById('friendsButton')
  friendsBTN ? friendsBTN.textContent = `👥 | ${count}` : null
}