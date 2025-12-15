import Alert from "../../components/alert";
import { Input, Button } from "@lenixdev/ui_components";

const setupAvatar = () => new Promise((resolve) => {
  const [setupElement, alertIndex] = Alert({
    type: "info",
    title: "Profile Setup - Avatar",
    message: "Please paste your valid avatar URL here, e.g. https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png"
  })
  
  const avatarInput = Input({
    parent: "alert-button-block-" + alertIndex,
    placeholder: "Paste your avatar URL here",
    defaultValue: "https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png",
  })
  
  Button({
    parent: "alert-button-block-" + alertIndex,
    size: "xl",
    type: "primary",
    content: "Submit",
    onClick: () => {
      setupElement.remove()
      resolve(avatarInput.value)
    }
  })
})

export default setupAvatar