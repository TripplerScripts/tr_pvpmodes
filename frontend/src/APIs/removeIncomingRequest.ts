import sendCallback from "../components/sendCallback"

export default function removeIncomingRequest(name: string): void {
  sendCallback('removeIncomingRequest', name)
}