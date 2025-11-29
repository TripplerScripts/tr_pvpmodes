import showFriendElement from '../layouts/body/right-sidebar/index'

let friendsCount = 0

setInterval(() => {
  showFriendElement('https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png', 'Lenix')
  friendsCount++
  const countElement = document.getElementById('friends-counts')
  if (countElement) {
    countElement.innerHTML = `<i class="fas fa-users"></i> ${friendsCount}`
  }
}, 10000)