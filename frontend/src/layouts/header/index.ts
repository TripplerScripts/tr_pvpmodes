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
  id: 'player-stats',
})