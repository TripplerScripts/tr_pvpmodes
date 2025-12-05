import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import getPlayerFriends from "../../../../../modules/getPlayerFriends"
import removePlayerFriendship from "../../../../../modules/removePlayerFriendship"

let currentItems = document.getElementById('friendsItems')

const addFriendItem = (index: number, name: string) => {
  const friend = createElement({
    parent: "friendsItems",
    id: `friend-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1"
  })
  createElement({
    parent: `friend-item-${index}`,
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
    parent: `friend-item-${index}`,
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
    parent: `friend-item-${index}`,
    className: "w-[16%] h-[12.5%] hover:bg-red-500 flex items-center justify-center",
    content: '➖',
    onClick: () => {
      friend.remove()
      removePlayerFriendship(name)
    }
  })
  currentItems.appendChild(friend)
}

(async () => {
  const friendsItems = await getPlayerFriends()
  friendsItems.forEach((friendName: string, index: number) => {
    addFriendItem(index, friendName)
  });
})