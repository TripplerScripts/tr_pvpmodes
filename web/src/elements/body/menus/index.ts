import { createElement, Button} from "@lenixdev/ui_components"
import serviceUnavailable from "../../../components/serviceUnavailable"

const buttonsStyle = "text-2xl text-white italic h-1/5"
const buttonsContentsStyle = "hover:font-semibold hover:text-3xl transition-all"
const buttonsOnClick = serviceUnavailable

createElement({
  parent: "body",
  id: "menus",
  className: "w-[20%] h-[75%] flex flex-col items-center gap-5"
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
  className: "flex flex-col justify-center overflow-hidden w-[75%]"
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Battlepass</span>`,
  onClick: buttonsOnClick
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Settings</span>`,
  onClick: buttonsOnClick
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Arsenal</span>`,
  onClick: buttonsOnClick
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Store</span>`,
  onClick: buttonsOnClick
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Style</span>`,
  onClick: buttonsOnClick
})

Button({
  parent: "main-menu-block",
  className: buttonsStyle,
  content: `<span class="${buttonsContentsStyle}">Play</span>`,
  onClick: buttonsOnClick
})