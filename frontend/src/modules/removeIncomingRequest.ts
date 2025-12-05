import sendCallback from "../components/sendCallback"

export default function removeIncomingRequest(name: string) {
  sendCallback('removeIncomingRequest', name)
}