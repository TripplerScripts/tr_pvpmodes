import { useAlert } from '@lenixdev/fusion/web'
import { triggerNuiCallback } from '@trippler/tr_lib/web'

export default () => {
  const [alertElement, _alertIndex] = useAlert({
    title: "Leave Freeroam Mode",
    message: "Are you sure you want to leave freeroam mode?",
    type: "info",
    buttons: [
      {
        content: "Cancel",
        type: "primary",
        onClick: () => alertElement.remove()
      },
      {
        content: "No",
        type: "soft",
        onClick: () => {
          alertElement.remove()
          triggerNuiCallback("leaveFreeroam")
        }
      }
    ]
  })
}