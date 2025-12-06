import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import cancelOutgoingFriendship from "../../../../../APIs/cancelOutgoingFriendship"
import getOutgoingFriends from "../../../../../APIs/getOutgoingFriends"
import playerDetails from "../../../../../modules/playerDetails"

createElement({
  parent: "friendsRequests",
  id: "outgoingRequests",
  className: "w-full hidden h-full overflow-auto [scrollbar-width:none]"
})

let currentOutgoing = document.getElementById('outgoingRequests')
let outgoingRequests: HTMLDivElement[] = []

const addNewOutgoingRequest = (index: number, name: string): void => {
  const request = createElement({
    parent: "outgoingRequests",
    id: `outgoing-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1"
  })
  createElement({
    parent: `outgoing-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src=${new playerDetails().avatar} class="w-[20%]" />
      <div class="ml-2 flex flex-col">
        <p class="text-base font-semibold">${name}</p>
      </div>
    `
  })
  Button({
    parent: `outgoing-item-${index}`,
    className: "w-[25%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '🚫',
    onClick: () => {
      request.remove()
      outgoingRequests.splice(index, 1)
      cancelOutgoingFriendship(name)
    }
  })
  outgoingRequests.push(request)
  currentOutgoing.appendChild(request)
}

(async () => {
  const outgoing = await getOutgoingFriends()
  outgoing.forEach((friendName: string, index: number) => addNewOutgoingRequest(index, friendName))
})()