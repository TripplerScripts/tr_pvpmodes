import { createElement, Button} from "@lenixdev/ui_components"
import unavailableNotice from "../../../../components/serviceUnavailable"
import playerDetails from "../../../../modules/playerDetails"

Button({
  parent: "player-details",
  id: "player-card",
  className: "w-[35%] h-full bg-gray-700 flex justify-center items-center rounded-md overflow-hidden",
  onClick: () => unavailableNotice()
})

const avatarElement = createElement({
  parent: "player-card",
  id: "player-avatar",
  className: "w-full h-full bg-stone-800 flex-[1] flex justify-center items-center p-1"
})

createElement({
  parent: "player-card",
  id: "player-info",
  className: "w-full h-full hover:bg-gray-600 flex flex-[4] px-2"
})

const nameElement = createElement({
  parent: "player-info",
  className: "h-full text-white flex items-center"
})

export default async (identity: number) => {
  const details = await new playerDetails().getUserDetails(identity)
  avatarElement.innerHTML = `<img src='${details.avatar}' class='rounded-sm'>`
  nameElement.innerHTML = details.name
}