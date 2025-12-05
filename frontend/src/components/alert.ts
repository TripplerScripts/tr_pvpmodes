import createElement from "./createElement";
import Button from "./button";
let alerts = []

export default function Alert(title: string, message: string, button: string | null, onClick: () => void) {
  alerts.push(alerts.length)
  document.body.setAttribute('id', 'index')
  document.body.setAttribute('class', 'relative')
  const index = createElement({
    parent: "index",
    className: "absolute top-0 flex flex-col justify-center bg-stone-900/90 w-full h-[100vh]",
    id: "alert-" + alerts.length
  })
  
  createElement({
    parent: "alert-" + alerts.length,
    id: "alert-content-block-" + alerts.length,
    className: "w-full h-[30%] bg-stone-800 flex flex-col items-center justify-around",
  })
  createElement({
    parent: "alert-" + alerts.length,
    id: "alert-button-block-" + alerts.length,
    className: "w-full h-fit py-2 gap-1 bg-stone-700 flex flex-col items-center justify-center",
  })
  
  createElement({
    parent: "alert-content-block-" + alerts.length,
    id: "alert-title",
    className: "text-white tracking-tighter text-center text-4xl italic font-extrabold",
    content: title.toUpperCase(),
  })

  createElement({
    parent: "alert-content-block-" + alerts.length,
    className: "text-gray-300 max-w-[60%] text-center",
    content: message
  })

  Button({
    parent: "alert-button-block-" + alerts.length,
    content: button,
    size: "xl",
    type: "soft",
    onClick: () => {
      index.remove(),
      onClick()
    }
  })  
  return [index, alerts.length]
}