import Button from "../../../../components/button"

let friendsPanelCollapsed = true

const friendsBTN = Button({
  parent: "player-details",
  className: "w-[10%] h-[80%] bg-blue-700 flex items-center justify-center",
  size: "base",
  content: "👥 | 0",
  type: "secondary",
  onClick: () => {
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
})

export default function refreshFriends(count: number) {
  friendsBTN.textContent = `👥 | ${count}`  
}