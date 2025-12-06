import Button from "../components/button"
import removePlayerFriendship from "../APIs/removePlayerFriendship"
import createElement from "../components/createElement"

let currentItems = document.getElementById('friendsItems') as HTMLDivElement
let friendsItems = 0

export default (name: string): void => {
  document.getElementById('noFriendsFound')?.remove()
  
  const friend = createElement({
    parent: "friendsItems",
    id: `friend-item-${friendsItems}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-4 px-2"
  })
  createElement({
    parent: `friend-item-${friendsItems}`,
    className: "w-[75%] flex items-center justify-between",
    content: `
      <div class='w-[66%] flex items-center justify-start'>
        <img src="https://i.pravatar.cc/300" class="w-[20%]" />
        <div class="ml-2 flex flex-col">
          <p class="text-base font-semibold">${name}</p>
        </div>
      </div>
    `
  })
  const inviteBTN = Button({
    parent: `friend-item-${friendsItems}`,
    className: "w-[16%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '➕',
    onClick: () => {
      inviteBTN.innerText = '✅'
      setTimeout(() => {
        inviteBTN.innerText = '➕'
      }, 10000)
    }
  })
  Button({
    parent: `friend-item-${friendsItems}`,
    className: "w-[16%] h-[12.5%] hover:bg-red-500 flex items-center justify-center",
    content: '➖',
    onClick: () => {
      friend.remove()
      removePlayerFriendship(name)
    }
  })
  friendsItems++
  currentItems.appendChild(friend)
}