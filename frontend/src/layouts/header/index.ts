import createElement from '../../modules/createElement'

createElement({
  parent: 'root',
  id: 'header',
})

createElement({
  parent: 'header',
  id: 'server-identity',
})

createElement({
  parent: 'header',
  id: 'player-details',
})

createElement({
  parent: 'player-details',
  id: 'player-card'
})

createElement({
  parent: 'player-details',
  id: 'player-coins'
})

createElement({
  parent: 'player-details',
  id: 'player-money'
})

createElement({
  parent: 'player-details',
  id: 'player-friends'
})