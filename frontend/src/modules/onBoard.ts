import alert from "../components/alert";
import Button from "../components/button";
import createElement from "../components/createElement";
import Input from "../components/input";
  
const [index, length] = alert("Account Setup", "Welcome to Trippler Scripts's competitive game.\n Please set you name, be aware that the name will be the same for the username and the display name (nickname).")

const input = Input({
  parent: "alert-button-block-" + length,
  placeholder: "Enter your name",
  defaultValue: "",
})

const nameValidation = (input: HTMLInputElement, index: HTMLDivElement) => {
  if (input.value.length < 4) {
    input.classList.add('hidden')
    const [failure, failureIndex] = alert("Name too short", "Your name must be at least 4 characters long")
    Button({
      parent: "alert-button-block-" + failureIndex,
      content: "Try again",
      onClick: () => {
        (failure as HTMLDivElement).remove(),
        input.classList.remove('hidden')
      },
      size: "xl",
      type: "soft"
    })
    return
  } else {
    if (input.value.length > 15) {
      input.classList.add('hidden')
      const [failure, failureIndex] = alert("Name too long", "Your name must be at most 15 characters long")
      Button({
        parent: "alert-button-block-" + failureIndex,
        content: "Try again",
        onClick: () => {
          (failure as HTMLDivElement).remove(),
          input.classList.remove('hidden')
        },
        size: "xl",
        type: "soft"
      })
      return
    } else {
      input.classList.add('hidden')
      const [confimation, confimationIndex] = alert("Are you sure?", "Please be aware that once you set you name and confirm it, you won't be able to changed it again later, so double check that.")
      createElement({
        parent: "alert-button-block-" + confimationIndex,
        id: "confirm-buttons-" + confimationIndex,
        className: "w-full flex justify-center gap-2"
      })
      Button({
        parent: "confirm-buttons-" + confimationIndex,
        content: "Cancel",
        onClick: () => {
          (confimation as HTMLDivElement).remove()
          input.classList.remove('hidden')
        },
        size: "xl",
        type: "primary"
      })
      Button({
        parent: "confirm-buttons-" + confimationIndex,
        content: "Confirm",
        onClick: () => {
          (confimation as HTMLDivElement).remove()
          index.remove()
          const [success, successIndex] = alert("Success", "Your name has been set, Welcome on board!")
          Button({
            parent: "alert-button-block-" + successIndex,
            content: "Get Started",
            onClick: () => {
              (success as HTMLDivElement).remove()
            },
            size: "xl",
            type: "primary"
          })
        },
        size: "xl",
        type: "secondary"
      })
    }
  }
}

Button({
  parent: "alert-button-block-" + length,
  content: "Submit",
  onClick: () => {
    nameValidation(input as HTMLInputElement, index as HTMLDivElement)
  },
  size: "xl",
  type: "soft",
})