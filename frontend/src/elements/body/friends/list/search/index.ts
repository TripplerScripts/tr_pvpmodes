import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import sendUserFriendInvitation from "../../../../../modules/sendUserFriendInvitation"
import Input from "../../../../../components/input"
import getFriendablePlayers from "../../../../../APIs/getFriendablePlayers"
import playerDetails from "../../../../../modules/playerDetails"

const container = document.getElementById("playersSearchContainer");
const resultsBox = document.getElementById("playersResults");

const handleSearch = async (): Promise<void> => {
  const text = searchInput.value.toLowerCase();
  resultsBox.innerHTML = "";

  if (text === "") return;
  const players = await getFriendablePlayers()

  const matches = players.filter(player =>
    player.toLowerCase().includes(text)
  );

  matches.forEach(playerName => {
    createElement({
      parent: "playersResults",
      id: `player-item-${playerName}`,
      className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1 px-2 rounded"
    });

    Button({
      parent: `player-item-${playerName}`,
      content: `
        <img src="${new playerDetails().friendAvatar}" class="w-[40px] h-[40px] rounded mr-2">
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
        const response = await sendUserFriendInvitation(playerName)
        if (response) {
          inviteBtn.innerText = '✅';
        } else {
          inviteBtn.innerText = '❌';
        }
      }
    });
  });
}

const searchInput = Input({
  parent: "playersSearchContainer",
  className: "w-full p-2 bg-stone-700 rounded text-white outline-none",
  placeholder: "Search players by: <name>",
  onChange: handleSearch
})
container.prepend(searchInput);