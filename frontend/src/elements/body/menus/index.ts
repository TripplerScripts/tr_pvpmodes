import createElement from "../../../components/createElement"

createElement({
  parent: "body",
  id: "menus",
  className: "w-[15%] h-[75%] flex flex-col items-center gap-5"
})

createElement({
  parent: "menus",
  className: "w-[80%] blured-15 h-1/2"
})
createElement({
  parent: "menus",
  id: "main-menu",
  className: "w-[80%] h-1/2 blured-15 flex justify-end"
})

createElement({
  parent: "main-menu",
  id: "main-menu-block",
  className: "flex flex-col justify-evenly overflow-hidden w-[75%]"
})

createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Battlepass"
})
createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Settings"
})
createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Arsenal"
})
createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Store"
})
createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Style"
})
createElement({
  parent: "main-menu-block",
  className: "text-md text-white italic hover:font-bold hover:text-lg transition-all",
  content: "Play"
})