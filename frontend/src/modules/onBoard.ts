import Alert from "../components/alert";
import Button from "../components/button";
import createElement from "../components/createElement";
import Input from "../components/input";

export default (): Promise<{ username: string; avatar: string }> => {
  let username: string = undefined
  let avatar: string = undefined
  let nameSubmit: boolean = false
  let submited: boolean = false
  const [index, length] = Alert({
    type: "info", title: "Account Setup", message: "Welcome to Trippler Scripts's competitive game.\n Please set you name, be aware that the name will be the same for the username and the display name (nickname)."
  })

  const nameInput = Input({
    parent: "alert-button-block-" + length,
    placeholder: "Press tab to jump in",
    defaultValue: "",
    onChange: () => {
      username = nameInput.value
    }
  })

  const nameValidation = (nameInput: HTMLInputElement) => {
    if (nameInput.value.length < 4) {
      nameInput.classList.add('hidden')
      const [failure, failureIndex] = Alert({
        type: "warn", title: "Name too short", message: "Your name must be at least 4 characters long", button: "Try again",
        onClick: () => {
          (failure).remove(),
          nameInput.classList.remove('hidden')
        }
      })
      return
    } else {
      if (nameInput.value.length > 15) {
        nameInput.classList.add('hidden')
        const [failure, failureIndex] = Alert({
          type: "warn",
          title: "Name too long",
          message: "Your name must be at most 15 characters long",
          button: "Try again",
          onClick: () => {
            (failure).remove(),
            nameInput.classList.remove('hidden')
          }
        })
        return
      } else {
        nameInput.classList.add('hidden')
        const [confimation, confimationIndex] = Alert({
          type: "info",
          title: "Are you sure?",
          message: "Please be aware that once you set you name and confirm it, you won't be able to changed it again later, so double check that."
        })
        createElement({
          parent: "alert-button-block-" + confimationIndex,
          id: "confirm-buttons-" + confimationIndex,
          className: "w-full flex justify-center gap-2"
        })
        Button({
          parent: "confirm-buttons-" + confimationIndex,
          content: "Cancel",
          onClick: () => {
            (confimation).remove()
            nameInput.classList.remove('hidden')
          },
          size: "xl",
          type: "primary"
        })
        Button({
          parent: "confirm-buttons-" + confimationIndex,
          content: "Confirm",
          onClick: () => {
            (confimation).remove()
            nameSubmit = true
          },
          size: "xl",
          type: "secondary"
        })
      }
    }
  }

  const avatarValidation = () => {
    const [alertElement, alertIndex] = Alert({
      type: "info",
      title: "Account Setup",
      message: "Please paste your valid avatar URL here, e.g. https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/Lenix_924.png"
    })
    const avatarInput = Input({
      parent: "alert-button-block-" + alertIndex,
      placeholder: "Paste your avatar URL here",
      defaultValue: "https://r2.fivemanage.com/COKMc8Wcmk9K5dp547rEw/trippler.png",
      onChange: () => {
        avatar = avatarInput.value
      }
    })
    Button({
      parent: "alert-button-block-" + alertIndex,
      size: "xl",
      type: "primary",
      content: "Submit",
      onClick: () => {
        (alertElement).remove()
        submited = true
      }
    })
  }

  const finalizeCreation = () => {
    index.remove()
    const [success, successIndex] = Alert({
      type: "success",
      title: "success",
      message: "Your profile has been successfully set, Welcome on board!",
      button: "Get Started",
      onClick: () => {
        (success).remove()
      }
    })
  }

  Button({
    parent: "alert-button-block-" + length,
    size: "xl",
    type: "primary",
    content: "Submit",
    onClick: async () => {
      nameValidation(nameInput)
      setInterval(() => {
        if (nameSubmit == true) {
          avatarValidation()
          setInterval(() => {
            finalizeCreation()
          }, 500)
        }
      }, 10)
    }
  })

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (submited == true) {
        resolve({ username, avatar })
        clearInterval(interval)
      }
    }, 500)
  })
}