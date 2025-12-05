import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"
import unavailableNotice from "../../../../modules/serviceUnavailable"

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
  content: "<img src='https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png' class='rounded-sm'>"
})


createElement({
  parent: "player-card",
  id: "player-info",
  className: "w-full h-full hover:bg-gray-600 flex flex-[5] flex-col"
})

createElement({
  parent: "player-info",
  id: "player-info-text",
  className: "flex-[3] py-1 px-2 text-white",
})

createElement({
  parent: "player-info-text",
  id: "player-info-text-content",
  content: "7 | Lenix"
})

createElement({
  parent: "player-info",
  id: "player-levelBar",
  className: "flex-[1] bg-stone-800"
})

createElement({
  parent: "player-levelBar",
  id: "player-levelBar-fill",
  className: "w-[20%] h-full bg-emerald-500"
})