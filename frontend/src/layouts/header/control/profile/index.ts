import createElement from '../../../../modules/createElement'

createElement({
  parent: 'control',
  id: 'player-avatar'
})

createElement({
  parent: 'control',
  id: 'player-informations'
})

const avatar = document.getElementById('player-avatar')
avatar.innerHTML = `
  <img id='player-image' src='https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png'>
`
createElement({
  parent: 'player-informations',
  id: 'player-details'
})

createElement({
  parent: 'player-details',
  id: 'player-level'
})
const level = document.getElementById('player-level')
level.innerHTML = `7`

createElement({
  parent: 'player-details',
  id: 'player-spliter'
})
const spliter = document.getElementById('player-spliter')
spliter.innerHTML = `|`

createElement({
  parent: 'player-details',
  id: 'player-name'
})
const name = document.getElementById('player-name')
name.innerHTML = `Lenix`

createElement({
  parent: 'player-informations',
  id: 'bar-level'
})

createElement({
  parent: 'bar-level',
  id: 'filled-bar'
})