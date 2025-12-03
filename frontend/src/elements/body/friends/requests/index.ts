import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"

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

const incomingFriends = [
  {
    name: 'Jonah',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Younes',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Siagh',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Marouane',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Lenix',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Dev',
    avatar: 'https://i.pravatar.cc/300',
  },
]

const getIncomingFriends = () => {
  return incomingFriends
}

let currentIncoming = document.getElementById('incomingRequests')
let incomingRequests = []

const addNewIncomingRequest = (index, avatar, name) => {
  const request = createElement({
    parent: "incomingRequests",
    id: `incoming-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-2"
  })
  createElement({
    parent: `incoming-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="${avatar}" class="w-[20%]" />
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
    }
  })
  Button({
    parent: `incoming-item-${index}`,
    className: "w-[25%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '❌',
    onClick: () => {
      request.remove()
      incomingRequests.splice(index, 1)
    }
  })
  incomingRequests.push(request)
  currentIncoming.appendChild(request)
}

setTimeout(() => {
  const incoming = getIncomingFriends()
  incoming.forEach((friend, index) => addNewIncomingRequest(index, friend.avatar, friend.name))
}, 2000)

const outgoingFriends = [
  {
    name: 'Jonah',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Younes',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Siagh',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Marouane',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Lenix',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Dev',
    avatar: 'https://i.pravatar.cc/300',
  },
]

const getOutgoingFriends = () => {
  return outgoingFriends
}

let currentOutgoing = document.getElementById('outgoingRequests')
let outgoingRequests = []

const addNewOutgoingRequest = (index, avatar, name) => {
  const request = createElement({
    parent: "outgoingRequests",
    id: `outgoing-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1"
  })
  createElement({
    parent: `outgoing-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="${avatar}" class="w-[20%]" />
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
    }
  })
  outgoingRequests.push(request)
  currentOutgoing.appendChild(request)
}

setTimeout(() => {
  const outgoing = getOutgoingFriends()
  outgoing.forEach((friend, index) => addNewOutgoingRequest(index, friend.avatar, friend.name))
}, 2000)