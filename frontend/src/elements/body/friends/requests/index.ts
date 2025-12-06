import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"
import updateRequestBlockState from "../../../../interactions/updateRequestBlockState"
import toggleRequestMode from "../../../../interactions/toggleRequestMode"

createElement({
  parent: "friendsPanel",
  id: "friendsRequests",
  className: "w-full -bottom-[80%] absolute h-[88.3%] flex flex-col justify-start transition-all"
})

Button({
  parent: "friendsRequests",
  // content: "",
  id: "requestsHeader",
  className: "w-full blured-20 text-white bg-stone-900/20 h-[13%] flex justify-around gap-1 items-center",
  onClick: () => {
    updateRequestBlockState()
  }
})

createElement({
  parent: "requestsHeader",
  content: "Incoming Requests",
  id: "requestsHeaderText"
})

Button({
  parent: "requestsHeader",
  id: "requestSwitchButton",
  content: "🕜",
  size: "sm",
  type: "secondary",
  onClick: () => {
    toggleRequestMode(false)
  }
})