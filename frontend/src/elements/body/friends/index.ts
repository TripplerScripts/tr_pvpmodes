import createElement from "../../../components/createElement"
import Button from "../../../components/button"

createElement({
  parent: "body",
  id: "friends",
  className: "w-[10%] h-full bg-gray-300 relative overflow-hidden"
})

createElement({
  parent: "friends",
  id: "friendsPanel",
  className: "w-full overflow-auto [scrollbar-width:none] h-full flex flex-col justify-start bg-red-500 absolute right-[-80%] hover:right-[0] transition-all"
})

Button({
  parent: "friendsPanel",
  content: `
    <img class='w-[30%] rounded-md' src='https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png'>
    <span>Lenix</span>
  `,
  className: "w-full h-fit p-2 bg-stone-500 flex justify-start items-center gap-2 hover:bg-stone-400 cursor-default transition-all",
})