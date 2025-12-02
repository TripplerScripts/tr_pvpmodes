import createElement from "../../../components/createElement"

createElement({
  parent: "body",
  id: "friends",
  className: "w-[15%] h-full relative overflow-hidden "
})

createElement({
  parent: "friends",
  id: "friendsPanel",
  className: "w-full overflow-hidden bg-black relative h-full absolute right-[-80%] hover:right-[0] transition-all"
})