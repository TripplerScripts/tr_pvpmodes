import updateRequestBlockState from "./updateRequestBlockState"

let requestsBlockSelected = "incoming"

export default (state: boolean): void => {
  const incoming = document.getElementById('incomingRequests')
  const outgoing = document.getElementById('outgoingRequests')
  const requestHeaderText = document.getElementById('requestsHeaderText')
  const requestSwitchButton = document.getElementById('requestSwitchButton')

  event.stopPropagation();
  updateRequestBlockState(state)
  if (requestsBlockSelected == "incoming") {
    outgoing.classList.remove("hidden")
    incoming.classList.add("hidden")
    requestSwitchButton.innerText = "⏲️"
    requestHeaderText.innerText = "Outgoing Requests"
    requestsBlockSelected = "outgoing"
  } else {
    requestSwitchButton.innerHTML = "🕜"
    incoming.classList.remove("hidden")
    outgoing.classList.add("hidden")
    requestHeaderText.innerText = "Incoming Requests"
    requestsBlockSelected = "incoming"
  }
}