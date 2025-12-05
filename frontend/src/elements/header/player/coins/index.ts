import Button from "../../../../components/button"
import unavailableNotice from "../../../../interactions/serviceUnavailable"

Button({
  parent: "player-details",
  content: "⭐ | 150",
  size: "base",
  type: "soft",
  onClick: () => {
    unavailableNotice()
  }
})