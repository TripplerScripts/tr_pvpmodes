import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"
import Input from "../../../../components/input"

createElement({
  parent: "friendsPanel",
  id: "friendsList",
  className: "w-full top-0 absolute h-[90%] flex flex-col justify-start transition-all"
})

createElement({
  parent: "friendsList",
  id: "friendsHeader",
  className: "w-full bg-blue-400 h-[13%] flex justify-between items-center"
})

createElement({
  parent: "friendsHeader",
  id: "friendsHeaderText",
  content: "Friends List"
})

let friendsBlockSelected = "list"

Button({
  parent: "friendsHeader",
  content: "➕",
  size: "sm",
  type: "secondary",
  onClick: () => {
    const friendsItems = document.getElementById("friendsItems")
    const playersItems = document.getElementById("playersItems")
    const friendsheader = document.getElementById("friendsHeaderText")
    if (friendsBlockSelected == 'list') {
      friendsItems.classList.add("hidden")
      playersItems.classList.remove("hidden")
      friendsheader.innerText = "Find New Friends"
      friendsBlockSelected = "searched"
    } else {
      playersItems.classList.add("hidden")
      friendsItems.classList.remove("hidden")
      friendsheader.innerText = "Friends List"
      friendsBlockSelected = "list"
    }
  }
})

createElement({
  parent: "friendsList",
  id: "friendsItems",
  className: "w-full bg-blue-500 h-full overflow-auto [scrollbar-width:none]"
})

createElement({
  parent: "friendsList",
  id: "playersItems",
  className: "w-full hidden bg-blue-500 h-full overflow-auto [scrollbar-width:none]"
})

let currentItems = document.getElementById('friendsItems')
let friendsAvailable = []

const friends = [
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

const getPlayerFriends = () => {
  return friends
}

const removeFriendItem = (index: number) => {
  friendsAvailable[index].remove()
}

const addFriendItem = (index, avatar, name) => {
  const friend = createElement({
    parent: "friendsItems",
    id: `friend-item-${index}`,
    className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1"
  })
  createElement({
    parent: `friend-item-${index}`,
    className: "w-[75%] flex items-center justify-start",
    content: `
      <img src="${avatar}" class="w-[20%]" />
      <div class="ml-2 flex flex-col">
        <p class="text-base font-semibold">${name}</p>
        <p class="text-xs text-gray-200">Online</p>
      </div>
    `
  })
  const inviteBTN = Button({
    parent: `friend-item-${index}`,
    className: "w-[25%] h-[12.5%] hover:bg-blue-500 flex items-center justify-center",
    content: '➕',
    onClick: () => {
      inviteBTN.innerText = '✅'
      setTimeout(() => {
        inviteBTN.innerText = '➕'
      }, 10000)
    }
  })
  friendsAvailable.push(friend)
  currentItems.appendChild(friend)
}

setTimeout(() => {
  const friendsItems = getPlayerFriends()
  friendsItems.forEach((element, index) => {
    addFriendItem(index, element.avatar, element.name)
  });
  setTimeout(() => {
    removeFriendItem(3)
  }, 2000)
}, 2000)

const players = [
  {
    name: 'Alice',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'John',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Bob',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Charlie',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'David',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Eve',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Frank',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Grace',
    avatar: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Hannah',
    avatar: 'https://i.pravatar.cc/300',
  },
]

createElement({
  parent: "playersItems",
  id: "playersSearchContainer",
  className: "w-full flex flex-col gap-2"
});

createElement({
  parent: "playersSearchContainer",
  id: "playersResults",
  className: "w-full flex flex-col gap-2"
});

const searchInput = Input({
  parent: "playersSearchContainer",
  className: "w-full p-2 bg-stone-700 rounded text-white outline-none",
  placeholder: "Search players...",
  onChange: handleSearch
});

const container = document.getElementById("playersSearchContainer");
container.prepend(searchInput);

const resultsBox = document.getElementById("playersResults");

function handleSearch() {
  const text = searchInput.value.toLowerCase();

  resultsBox.innerHTML = "";

  if (text === "") return;

  const matches = players.filter(p =>
    p.name.toLowerCase().includes(text)
  );

  matches.forEach(player => {
    createElement({
      parent: "playersResults",
      id: `player-item-${player.name}`,
      className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1 px-2 rounded"
    });

    Button({
      parent: `player-item-${player.name}`,
      content: `
        <img src="${player.avatar}" class="w-[40px] h-[40px] rounded mr-2">
        <span>${player.name}</span>
      `,
      className: "flex items-center text-white gap-2",
      onClick: () => event.stopPropagation()
    });

    const inviteBtn = Button({
      parent: `player-item-${player.name}`,
      content: '➕',
      type: "primary",
      onClick: () => {
        inviteBtn.innerText = '✅';
      }
    });
  });
}