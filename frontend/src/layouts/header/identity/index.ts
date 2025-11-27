import createElement from '../../../modules/createElement'

createElement({
  parent: 'header',
  id: 'identity',
})

createElement({
  parent: 'identity',
  id: 'avatar',
})

createElement({
  parent: 'identity',
  id: 'name',
})

import './avatar/index'
import './name/index'