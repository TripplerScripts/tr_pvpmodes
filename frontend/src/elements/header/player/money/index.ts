import Button from "../../../../components/button"
import unavailableNotice from "../../../../modules/serviceUnavailable"

Button({
  parent: "player-details",
  content: "🌟 | 3000/4500",
  size: "base",
  type: "primary",
  onClick: () => {
    unavailableNotice()
  }
})