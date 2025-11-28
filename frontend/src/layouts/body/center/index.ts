import createElement from '../../../modules/createElement'

createElement({
  parent: 'center-content',
  id: 'character-display',
})

createElement({
  parent: 'character-display',
  id: 'customize-left',
})
const leftBtn = document.getElementById('customize-left')
leftBtn.innerHTML = '+'

createElement({
  parent: 'character-display',
  id: 'character-avatar',
})

createElement({
  parent: 'character-avatar',
  id: 'avatar-head',
})

createElement({
  parent: 'character-avatar',
  id: 'avatar-body',
})

createElement({
  parent: 'character-display',
  id: 'customize-right',
})
const rightBtn = document.getElementById('customize-right')
rightBtn.innerHTML = '+'