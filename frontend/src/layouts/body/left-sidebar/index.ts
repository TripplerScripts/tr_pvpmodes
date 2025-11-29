import createElement from '../../../modules/createElement'

createElement({
  parent: 'left-sidebar',
  className: 'menu-panel',
})

const menuItems = ['Battlepass', 'Settings', 'Arsenal', 'Styles', 'Store', 'Play']

menuItems.forEach((item, index) => {
  createElement({
    parent: 'menu-panel',
    className: `menu-item-${index}`,
  })
  const menuItem = document.getElementById(`menu-item-${index}`)
  menuItem.innerHTML = item
  menuItem.className = 'menu-item'
})