import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"
import unavailableNotice from "../../../../interactions/serviceUnavailable"
import playerDetails from "../../../../modules/playerDetails"

Button({
  parent: "player-details",
  id: "player-card",
  className: "w-[35%] h-[100%] bg-gray-700 flex justify-center items-center rounded-md overflow-hidden",
  onClick: () => {
    unavailableNotice()
  }
})

createElement({
  parent: "player-card",
  id: "player-avatar",
  className: "w-full h-full bg-stone-800 flex-[1] flex justify-center items-center p-1",
  content: `<img src='${new playerDetails().avatar}' class='rounded-sm'>`
})

createElement({
  parent: "player-card",
  id: "player-info",
  className: "w-full h-full hover:bg-gray-600 flex flex-[4] px-2"
})

createElement({
  parent: "player-info",
  className: "h-full text-white flex items-center",
  content: `${new playerDetails().name}`
})