let isFriendsListSelected = true
export default function toggleFriendsState() {
  const friendsItems = document.getElementById("friendsItems")
  const playersItems = document.getElementById("playersItems")
  const friendsheader = document.getElementById("friendsHeaderText")
  if (isFriendsListSelected == true) {
    friendsItems.classList.add("hidden")
    playersItems.classList.remove("hidden")
    friendsheader.innerText = "Find Friends"
    isFriendsListSelected = false
  } else {
    playersItems.classList.add("hidden")
    friendsItems.classList.remove("hidden")
    friendsheader.innerText = "Friends List"
    isFriendsListSelected = true
  }
}