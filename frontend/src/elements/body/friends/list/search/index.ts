import createElement from "../../../../../components/createElement"
import Button from "../../../../../components/button"
import sendUserFriendInvitation from "../../../../../APIs/sendUserFriendInvitation"
import Input from "../../../../../components/input"
import getFriendablePlayers from "../../../../../APIs/getFriendablePlayers"
import playerDetails from "../../../../../modules/playerDetails"

const container = document.getElementById("playersSearchContainer")
const resultsBox = document.getElementById("playersResults")

let players: Awaited<ReturnType<playerDetails['getUserDetails']>>[]

const searchInput = Input({
  parent: "playersSearchContainer",
  className: "w-full p-2 bg-stone-700 rounded text-white outline-none",
  placeholder: "Search players by: <name>",
  onJoin: async () => {
    const playerIds = await getFriendablePlayers()

    players = await Promise.all(
      playerIds ?
        playerIds.map(async id => new playerDetails().getUserDetails(id))
      : []
    )
  },
  onChange: () => {
    const text = searchInput.value.toLowerCase().trim()
    resultsBox ? resultsBox.innerHTML = "" : null
    if (!text) return

    players.filter(p => p.name.toLowerCase().includes(text)).forEach(player =>
      {
        createElement({
          parent: "playersResults",
          id: `player-item-${player.name}`,
          className: "flex items-center justify-between hover:bg-stone-600 text-sm py-1 px-2 rounded"
        })

        Button({
          parent: `player-item-${player.name}`,
          content: `
            <img src="${player.avatar}" class="w-[40px] h-[40px] rounded mr-2">
            <span>${player.name}</span>
          `,
          className: "flex items-center text-white gap-2",
          onClick: () => event?.stopPropagation()
        })

        const btn = Button({
          parent: `player-item-${player.name}`,
          content: '➕',
          type: 'primary',
          onClick: async (disable) => {
            btn.innerText = '💬'
            disable()
            btn.innerText = await sendUserFriendInvitation(player.id) ? '✅' : '❌'
          }
        })
      })
  }
})

container?.prepend(searchInput)