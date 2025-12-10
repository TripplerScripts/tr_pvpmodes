import createElement from "../../../components/createElement"
import serverDetails from "../../../APIs/getServerProfile"

(async () => {
  createElement({
    parent: "header",
    id: "server-details",
    className: "w-[25%] h-[75%] flex items-center justify-start gap-1"
  })
  
  const profile = await serverDetails()
  
  createElement({
    parent: "server-details",
    className: "w-[20%] h-full overflow-hidden flex items-center justify-center",
    content: `
    <img class='w-fit h-full rounded-md object-contain' src="${profile.avatar}">
    `
  })
  createElement({
    parent: "server-details",
    className: "text-white font-bold text-2xl italic",
    content: profile.name
  })
})()