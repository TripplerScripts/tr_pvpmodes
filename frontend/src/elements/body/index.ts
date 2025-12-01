import createElement from "../../components/createElement"

createElement({
  parent: "root",
  id: "body",
  className: "w-full h-[90vh] bg-gray-600 flex items-center justify-end gap-[2%]"
})

createElement({
  parent: "body",
  id: "menus",
  className: "w-[15%] h-[75%] flex flex-col items-center gap-5"
})

createElement({
  parent: "body",
  id: "invites",
  className: "w-[70%] h-[75%] bg-gray-300 flex justify-between items-center gap-[25%]"
})