import createElement from "../../../components/createElement"

createElement({
  parent: "body",
  id: "friends",
  className: "w-[15%] h-full bg-gray-300 relative"
})

createElement({
  parent: "friends",
  id: "friendsPanel",
  className: "w-full overflow-hidden bg-black relative h-full absolute right-[-00%] hover:right-[0] transition-all"
})