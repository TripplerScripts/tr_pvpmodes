import createElement from "../../../../components/createElement"

createElement({
  parent: "player-details",
  id: "player-card",
  className: "w-[20%] h-[80%] bg-red-700 flex justify-center items-center"
})

createElement({
  parent: "player-card",
  className: "w-[20%] h-[80%] bg-white"
})
createElement({
  parent: "player-card",
  id: "player-card-content",
  className: "w-[60%] h-[80%] bg-black"
})
createElement({
  parent: "player-card-content",
  id: "player-card-context",
  className: "w-full h-[80%] bg-gray-700"
})
createElement({
  parent: "player-card-content",
  id: "player-card-bar",
  className: "w-full h-[20%] bg-green-700"
})