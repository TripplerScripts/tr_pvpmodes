import createElement from '../../../modules/createElement'

createElement({
  parent: 'player-stats',
  id: 'level-badge',
})

createElement({
  parent: 'level-badge',
  id: 'level-icon',
})
const levelIcon = document.getElementById('level-icon')
levelIcon.innerHTML = '⚡'

createElement({
  parent: 'level-badge',
  id: 'level-info',
})

createElement({
  parent: 'level-info',
  id: 'level-number',
})
const levelNum = document.getElementById('level-number')
levelNum.innerHTML = '7'

createElement({
  parent: 'level-info',
  id: 'level-divider',
})
const divider = document.getElementById('level-divider')
divider.innerHTML = '|'

createElement({
  parent: 'level-info',
  id: 'player-name',
})
const playerName = document.getElementById('player-name')
playerName.innerHTML = 'Lenix'

createElement({
  parent: 'level-badge',
  id: 'level-progress',
})

createElement({
  parent: 'player-stats',
  id: 'stars-container',
})

createElement({
  parent: 'stars-container',
  id: 'star-icon',
})
const starIcon = document.getElementById('star-icon')
starIcon.innerHTML = '⭐'

createElement({
  parent: 'stars-container',
  id: 'star-count',
})
const starCount = document.getElementById('star-count')
starCount.innerHTML = '150'

createElement({
  parent: 'player-stats',
  id: 'money-container',
})

createElement({
  parent: 'money-container',
  id: 'money-icon',
})
const moneyIcon = document.getElementById('money-icon')
moneyIcon.innerHTML = '💰'

createElement({
  parent: 'money-container',
  id: 'money-amount',
})
const moneyAmount = document.getElementById('money-amount')
moneyAmount.innerHTML = '3000/4500'

createElement({
  parent: 'player-stats',
  id: 'friends-container',
})

createElement({
  parent: 'friends-container',
  id: 'friends-icon',
})
const friendsIcon = document.getElementById('friends-icon')
friendsIcon.innerHTML = '👥'

createElement({
  parent: 'friends-container',
  id: 'friends-count',
})
const friendsCount = document.getElementById('friends-count')
friendsCount.innerHTML = '2'