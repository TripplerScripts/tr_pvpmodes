import { Button } from "@lenixdev/ui_components"
import unavailableNotice from "../../../../components/serviceUnavailable"

Button({
  parent: "player-details",
  content: "🌟 | 3000/4500",
  size: "base",
  type: "primary",
  onClick: () => {
    unavailableNotice()
  }
})