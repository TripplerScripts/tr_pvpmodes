let friendsPanelCollapsed = true

export default (): void => {
  const friendsPanel = document.getElementById('friendsPanel')
  if (friendsPanelCollapsed) {
    friendsPanel.classList.remove('right-[-80%]')
    friendsPanel.classList.add('right-[0]')
    friendsPanelCollapsed = false
  } else {
    friendsPanel.classList.remove('right-[0]')
    friendsPanel.classList.add('right-[-80%]')
    friendsPanelCollapsed = true
  }
}