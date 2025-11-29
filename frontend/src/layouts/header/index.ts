import createElement from '../../components/createElement'

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
  id: 'player-details',
  className: 'player-details',
})