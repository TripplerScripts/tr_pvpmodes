import Input from "../../../../../components/input"
import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import sendCallback from "../../../../../components/sendCallback"

let currentItems = document.getElementById('friendsItems')
let friendsAvailable = []

const getPlayerFriends = async () => {
  const friends = await sendCallback('getPlayerFriends')
  return friends
}

const removeFriendItem = (index: number) => {
  friendsAvailable[index].remove()
}

const removePlayerFriendship = (name: string) => {
  sendCallback('removePlayerFriendship', name)
}

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
          <p class="text-xs text-gray-200">Online</p>
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
      removeFriendItem(index)
      removePlayerFriendship(name)
    }
  })
  friendsAvailable.push(friend)
  currentItems.appendChild(friend)
}

setTimeout(async () => {
  const friendsItems = await getPlayerFriends()
  friendsItems.forEach((friendName: string, index: number) => {
    addFriendItem(index, friendName)
  });
  setTimeout(() => {
    removeFriendItem(3)
  }, 2000)
}, 2000)

const getFriendablePlayers = async () => {
  const players = await sendCallback('getFriendablePlayers')
  return players
}

const searchInput = Input({
  parent: "playersSearchContainer",
  className: "w-full p-2 bg-stone-700 rounded text-white outline-none",
  placeholder: "Search players...",
  onChange: handleSearch
});

const container = document.getElementById("playersSearchContainer");
container.prepend(searchInput);

const resultsBox = document.getElementById("playersResults");

async function handleSearch() {
  const text = searchInput.value.toLowerCase();

  resultsBox.innerHTML = "";

  if (text === "") return;
  const players = await getFriendablePlayers()

  const matches = players.filter((player: string) =>
    player.toLowerCase().includes(text)
  );

  matches.forEach((playerName: string) => {
    createElement({
      parent: "playersResults",
      id: `player-item-${playerName}`,
      className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1 px-2 rounded"
    });

    Button({
      parent: `player-item-${playerName}`,
      content: `
        <img src="https://i.pravatar.cc/300" class="w-[40px] h-[40px] rounded mr-2">
        <span>${playerName}</span>
      `,
      className: "flex items-center text-white gap-2",
      onClick: () => {
        event.stopPropagation()
      }
    });

    const inviteBtn = Button({
      parent: `player-item-${playerName}`,
      content: '➕',
      type: 'primary',
      onClick: async (disable) => {
        inviteBtn.innerText = '💬'
        disable()
        const response = await sendCallback('sendUserFriendInvitation', playerName)
        if (response) {
          inviteBtn.innerText = '✅';
        } else {
          inviteBtn.innerText = '❌';
        }
      }
    });
  });
}