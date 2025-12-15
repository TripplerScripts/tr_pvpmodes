import { createElement } from "@lenixdev/ui_components"

createElement({
  parent: "body",
  id: "friends",
  className: "w-[20%] h-full relative overflow-hidden"
})

createElement({
  parent: "friends",
  id: "friendsPanel",
  className: "w-full overflow-hidden blured-15 relative h-full absolute right-[-80%] hover:right-[0] transition-all"
})
