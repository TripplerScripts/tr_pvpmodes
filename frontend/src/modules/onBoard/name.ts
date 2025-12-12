import Alert from "../../components/alert";
import Input from "../../components/input";
import Button from "../../components/button";
import createElement from "../../components/createElement";

const nameSetup = () => new Promise((resolve) => {
  const [setupElement, setupIndex] = Alert({
    type: "info",
    title: "Profile Setup - Nickname",
    message: "Please set you display nickname, a nickname must be at least 4 characters long and at most 15 characters long"
  })

  const nameInput = Input({
    parent: "alert-button-block-" + setupIndex,
    placeholder: "Press tab to jump in",
    defaultValue: "",
  })

  Button({
    parent: "alert-button-block-" + setupIndex,
    size: "xl",
    type: "primary",
    content: "Submit",
    onClick: () => {
      if (isValidName(nameInput.value)) {
        setupElement.remove()
        resolve(nameInput.value)
      }
    }
  })
  
  const isValidName = (name: string) => {
    if (name.length < 4) {
      setupElement.classList.add('hidden')
      const [failureAlert, _failureIndex] = Alert({
        type: "warn",
        title: "Name too short",
        message: "Your name must be at least 4 characters long",
        button: "Try again",
        onClick: () => {
          failureAlert.remove(),
          setupElement.classList.remove('hidden')
        }
      })
      return
    } else {
      if (name.length > 15) {
        setupElement.classList.add('hidden')
        const [failure, _failureIndex] = Alert({
          type: "warn",
          title: "Name too long",
          message: "Your name must be at most 15 characters long",
          button: "Try again",
          onClick: () => {
            failure.remove(),
            setupElement.classList.remove('hidden')
          }
        })
        return
      }
    }
    return name.length >= 4 && name.length <= 15
  }

  /**
  * @deprecated */
  const confirmation = (finished?: boolean) => {
    if (finished) return true
    setupElement.classList.add('hidden')
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
      content: "Return",
      onClick: () => {
        confimation.remove()
        setupElement.classList.remove('hidden')
      },
      size: "xl",
      type: "primary"
    })
    Button({
      parent: "confirm-buttons-" + confimationIndex,
      content: "Confirm",
      onClick: () => {
        setupElement.remove()
        confirmation(true)
      },
      size: "xl",
      type: "secondary"
    })
  }
})

export default nameSetup