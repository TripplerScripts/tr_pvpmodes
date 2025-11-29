import createElement from '../../modules/createElement'

createElement({
  parent: 'root',
  className: 'body',
})

createElement({
  parent: 'body',
  className: 'left-sidebar',
})

createElement({
  parent: 'body',
  className: 'center-content',
})

createElement({
  parent: 'body',
  className: 'right-sidebar',
})