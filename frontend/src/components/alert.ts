import createElement from "../components/createElement";
let alerts = []

export default function alert(title: string, message: string) {
  alerts.push(alerts.length)
  document.body.setAttribute('id', 'index')
  document.body.setAttribute('class', 'relative')
  const index = createElement({
    parent: "index",
    className: "absolute top-0 flex flex-col justify-center backdrop-blur-md w-full h-[100vh]",
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
  return [index, alerts.length]
}