import createElement from "../../../components/createElement"
import Button from "../../../components/button"

createElement({
  parent: "body",
  id: "friends",
  className: "w-[25%] h-full bg-gray-300 relative overflow-hidden"
})

createElement({
  parent: "friends",
  id: "friendsPanel",
  className: "w-full h-full flex flex-col gap-2 justify-start p-5 bg-red-500 absolute right-[-80%] hover:right-[0] transition-all"
})

Button({
  parent: "friendsPanel",
  content: "Button",
  type: "soft"
})

Button({
  parent: "friendsPanel",
  content: "Button",
  type: "soft"
})