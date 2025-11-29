import createElement from '../../modules/createElement'

createElement({
  parent: 'root',
  className: 'header',
})

createElement({
  parent: 'header',
  className: 'server-identity',
})

createElement({
  parent: 'header',
  className: 'player-details',
})