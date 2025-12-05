import Alert from "../components/alert";
import Button from "../components/button";
import createElement from "../components/createElement";
import Input from "../components/input";

export default async function initOnBoarding(): Promise<string> {
  let username: string = undefined
  let submited: boolean = false
  const [index, length] = Alert("info", "Account Setup", "Welcome to Trippler Scripts's competitive game.\n Please set you name, be aware that the name will be the same for the username and the display name (nickname).", "Submit",
    () => {
      nameValidation(input as HTMLInputElement, index as HTMLDivElement)
    }
  )

  const input = Input({
    parent: "alert-button-block-" + length,
    placeholder: "Press tab to jump in",
    defaultValue: "",
    onChange: () => {
      username = input.value
    }
  })

  const nameValidation = (input: HTMLInputElement, index: HTMLDivElement) => {
    if (input.value.length < 4) {
      input.classList.add('hidden')
      const [failure, failureIndex] = Alert("warn", "Name too short", "Your name must be at least 4 characters long", "Try again",
        () => {
          (failure as HTMLDivElement).remove(),
          input.classList.remove('hidden')
        }
      )
      return
    } else {
      if (input.value.length > 15) {
        input.classList.add('hidden')
        const [failure, failureIndex] = Alert("warn", "Name too long", "Your name must be at most 15 characters long", "Try again",
          () => {
            (failure as HTMLDivElement).remove(),
            input.classList.remove('hidden')
          }
        )
        return
      } else {
        input.classList.add('hidden')
        const [confimation, confimationIndex] = Alert("info", "Are you sure?", "Please be aware that once you set you name and confirm it, you won't be able to changed it again later, so double check that.")
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
            const [success, successIndex] = Alert("success", "success", "Your name has been set, Welcome on board!", "Get Started",
              () => {
                (success as HTMLDivElement).remove()
              }
            )
            submited = true
          },
          size: "xl",
          type: "secondary"
        })
      }
    }
  }
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (submited == true) {
        resolve(username)
        clearInterval(interval)
      }
    }, 500)
  })
}