import nameSetup from "./name"
import avatarSetup from "./avatar"
import { sendCallback } from "@lenixdev/ui_components"
import Alert from "../../components/alert"

export default async (): Promise<{ userName: string, userAvatar: string }> => {
  const userName = await nameSetup()
  const userAvatar = await avatarSetup()
  
  if (typeof userName === 'string' && typeof userAvatar === 'string') {
    return new Promise(resolve => {
      const [success, _successIndex] = Alert({
        type: "success",
        title: "success",
        message: "Your profile has been successfully set, Welcome on board!",
        button: "Get Started",
        onClick: () => {
          success.remove()
          sendCallback('startCharacterProcess')
          resolve({ userName, userAvatar })
        }
      })
    })
  }
  
  throw new Error("Invalid setup data")
}