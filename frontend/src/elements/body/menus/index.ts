import createElement from "../../../components/createElement"

createElement({
  parent: "body",
  id: "menus",
  className: "w-[15%] h-[75%] flex flex-col items-center gap-5"
})

createElement({
  parent: "menus",
  className: "w-[80%] h-1/2 bg-gray-400"
})
createElement({
  parent: "menus",
  id: "main-menu",
  className: "w-[80%] h-1/2 flex flex-col justify-evenly bg-gray-400 overflow-hidden"
})

createElement({
  parent: "main-menu",
  content: "Battlepass"
})
createElement({
  parent: "main-menu",
  content: "Settings"
})
createElement({
  parent: "main-menu",
  content: "Arsenal"
})
createElement({
  parent: "main-menu",
  content: "Store"
})
createElement({
  parent: "main-menu",
  content: "Style"
})
createElement({
  parent: "main-menu",
  content: "Play"
})