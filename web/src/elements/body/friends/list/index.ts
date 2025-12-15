import { createElement, Button } from "@lenixdev/ui_components"
import { useFriendsPanel  } from "../../../../hooks/useFriendsPanel"

createElement({
  parent: "friendsPanel",
  id: "friendsList",
  className: "w-full top-0 absolute h-[90%] flex flex-col justify-start transition-all"
})

createElement({
  parent: "friendsList",
  id: "friendsHeader",
  className: "w-full blured-20 text-white bg-stone-900/20 h-[13%] flex justify-around gap-1 items-center"
})

createElement({
  parent: "friendsList",
  id: "friendsContainer" ,
  className: "w-full h-[88%] flex flex-col justify-center items-center" 
})

createElement({
  parent: "friendsContainer",
  id: "friendsItems",
  className: "w-full h-fit overflow-auto [scrollbar-width:none]"
})

createElement({
  parent: "friendsContainer",
  id: "playersItems",
  className: "w-full hidden h-full overflow-auto [scrollbar-width:none]"
})

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

createElement({
  parent: "friendsHeader",
  id: "friendsHeaderText",
  content: "Friends List"
})

Button({
  parent: "friendsHeader",
  content: "➕",
  size: "sm",
  type: "secondary",
  onClick: () => {
    useFriendsPanel()
  }
})