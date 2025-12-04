import createElement from "../../../../components/createElement"
import Button from "../../../../components/button"

let friendsBlockSelected = "list"

createElement({
  parent: "friendsPanel",
  id: "friendsList",
  className: "w-full top-0 absolute h-[90%] flex flex-col justify-start transition-all"
})

createElement({
  parent: "friendsList",
  id: "friendsHeader",
  className: "w-full blured-20 text-white bg-stone-900/20 h-[13%] flex justify-between items-center"
})

createElement({
  parent: "friendsList",
  id: "friendsItems",
  className: "w-full h-full overflow-auto [scrollbar-width:none]"
})

createElement({
  parent: "friendsList",
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
    const friendsItems = document.getElementById("friendsItems")
    const playersItems = document.getElementById("playersItems")
    const friendsheader = document.getElementById("friendsHeaderText")
    if (friendsBlockSelected == 'list') {
      friendsItems.classList.add("hidden")
      playersItems.classList.remove("hidden")
      friendsheader.innerText = "Find New Friends"
      friendsBlockSelected = "searched"
    } else {
      playersItems.classList.add("hidden")
      friendsItems.classList.remove("hidden")
      friendsheader.innerText = "Friends List"
      friendsBlockSelected = "list"
    }
  }
})