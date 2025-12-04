import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"
import sendCallback from "../../../../components/sendCallback"


let requestsBlockCollapsed = true
let requestsBlockSelected = "incoming"

const friendsHeader = document.getElementById('friendsHeader')
friendsHeader.addEventListener('click', () => {
  updateRequestBlockState(true)
})

const updateRequestBlockState = (collapsed) => {
  const requests = document.getElementById('friendsRequests');

  if (collapsed === true) {
    requests.classList.remove("-bottom-[0%]");
    requests.classList.add("-bottom-[80%]");
  } else {
    requests.classList.remove("-bottom-[80%]");
    requests.classList.add("-bottom-[0%]");
  }

  requestsBlockCollapsed = collapsed;
};

createElement({
  parent: "friendsPanel",
  id: "friendsRequests",
  className: "w-full -bottom-[80%] absolute h-[90%] bg-stone-800 flex flex-col justify-start transition-all"
})

Button({
  parent: "friendsRequests",
  content: "",
  id: "requestsHeader",
  className: "w-full h-[13%] flex justify-between items-center",
  onClick: () => {
    updateRequestBlockState(!requestsBlockCollapsed)
  }
})

createElement({
  parent: "requestsHeader",
  content: "Incoming Requests",
  id: "requestsHeaderText"
})

const requestSwitchButton = Button({
  parent: "requestsHeader",
  content: "🕜",
  size: "sm",
  type: "secondary",
  onClick: () => {
    const incoming = document.getElementById('incomingRequests')
    const outgoing = document.getElementById('outgoingRequests')
    const requestHeaderText = document.getElementById('requestsHeaderText')
    event.stopPropagation();
    updateRequestBlockState(false)
    if (requestsBlockSelected == "incoming") {
      outgoing.classList.remove("hidden")
      incoming.classList.add("hidden")
      requestSwitchButton.innerText = "⏲️"
      requestHeaderText.innerText = "Outgoing Requests"
      requestsBlockSelected = "outgoing"
    } else {
      requestSwitchButton.innerHTML = "🕜"
      incoming.classList.remove("hidden")
      outgoing.classList.add("hidden")
      requestHeaderText.innerText = "Incoming Requests"
      requestsBlockSelected = "incoming"
    }
  }
})

createElement({
  parent: "friendsRequests",
  id: "incomingRequests",
  className: "w-full bg-blue-500 h-full overflow-auto [scrollbar-width:none]"
})

createElement({
  parent: "friendsRequests",
  id: "outgoingRequests",
  className: "w-full hidden bg-blue-500 h-full overflow-auto [scrollbar-width:none]"
})

const getIncomingFriends = async () => {
  const incomingFriends = await sendCallback('getIncomingFriends')
  return incomingFriends
}

let currentIncoming = document.getElementById('incomingRequests')
let incomingRequests = []

const removeIncomingRequest = (name: string) => {
  sendCallback('removeIncomingRequest', name)
}

const acceptFriendship = (name: string) => {
  sendCallback('acceptFriendship', name)
}

const addNewIncomingRequest = (index: number, name: string) => {
  const request = createElement({
    parent: "incomingRequests",
    id: `incoming-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-2"
  })
  createElement({
    parent: `incoming-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="https://i.pravatar.cc/300" class="w-[20%]" />
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

setTimeout(async () => {
  const incoming = await getIncomingFriends()
  incoming.forEach((friendName: string, index: number) => addNewIncomingRequest(index, friendName))
}, 2000)

const getOutgoingFriends = async () => {
  const outgoingFriends = await sendCallback('getOutgoingFriends')
  return outgoingFriends
}

let currentOutgoing = document.getElementById('outgoingRequests')
let outgoingRequests = []

const cancelOutgoingFriendship = async (name: string) => {
  sendCallback('cancelOutgoingFriendship', name)
}

const addNewOutgoingRequest = (index: number, name: string) => {
  const request = createElement({
    parent: "outgoingRequests",
    id: `outgoing-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1"
  })
  createElement({
    parent: `outgoing-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="https://i.pravatar.cc/300" class="w-[20%]" />
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

setTimeout(async () => {
  const outgoing = await getOutgoingFriends()
  outgoing.forEach((friendName: string, index: number) => addNewOutgoingRequest(index, friendName))
}, 2000)