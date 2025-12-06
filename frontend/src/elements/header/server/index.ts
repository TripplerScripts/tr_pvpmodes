import createElement from "../../../components/createElement"
import serverDetails from "../../../modules/serverDetails"

createElement({
  parent: "header",
  id: "server-details",
  className: "w-[25%] h-[75%] flex items-center justify-start gap-1"
})


createElement({
  parent: "server-details",
  className: "w-[20%] h-full overflow-hidden flex items-center justify-center",
  content: `
    <img class='w-fit h-full rounded-md object-contain' src="${new serverDetails().avatar}">
  `
})
createElement({
  parent: "server-details",
  className: "text-white font-bold text-2xl italic",
  content: new serverDetails().name
})