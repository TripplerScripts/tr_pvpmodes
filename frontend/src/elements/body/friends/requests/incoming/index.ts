import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import getIncomingFriends from "../../../../../APIs/getIncomingFriends"
import removeIncomingRequest from "../../../../../APIs/removeIncomingRequest"
import acceptFriendship from "../../../../../APIs/acceptFriendship"
import getIncomingAvatar from "../../../../../modules/getIncomingAvatar"

createElement({
  parent: "friendsRequests",
  id: "incomingRequests",
  className: "w-full h-full overflow-auto [scrollbar-width:none]"
})

let currentIncoming = document.getElementById('incomingRequests')
let incomingRequests: HTMLDivElement[] = []

const addNewIncomingRequest = (index: number, name: string):void => {
  const request = createElement({
    parent: "incomingRequests",
    id: `incoming-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-2"
  })
  createElement({
    parent: `incoming-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="${getIncomingAvatar()}" class="w-[20%]" />
      <div class="ml-2 flex flex-col">
        <p class="text-base font-semibold">${name}</p>
      </div>
    `
  })
  Button({
    parent: `incoming-item-${index}`,
    className: "w-[25%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '✅',
    onClick: () => {
      request.remove()
      incomingRequests.splice(index, 1)
      removeIncomingRequest(name)
      acceptFriendship(name)
    }
  })
  Button({
    parent: `incoming-item-${index}`,
    className: "w-[25%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '❌',
    onClick: () => {
      request.remove()
      incomingRequests.splice(index, 1)
      removeIncomingRequest(name)
    }
  })
  incomingRequests.push(request)
  currentIncoming.appendChild(request)
}

(async () => {
  const incoming = await getIncomingFriends()
  incoming.forEach((friendName, index: number) => addNewIncomingRequest(index, friendName))
})()