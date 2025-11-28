import createElement from '../../modules/createElement'

createElement({
  parent: 'root',
  id: 'body',
})

createElement({
  parent: 'body',
  id: 'left-sidebar',
})

createElement({
  parent: 'body',
  id: 'center-content',
})

createElement({
  parent: 'body',
  id: 'right-sidebar',
})