import { Button } from "@lenixdev/ui_components"
import unavailableNotice from "../../../../components/serviceUnavailable"

Button({
  parent: "player-details",
  content: "⭐ | 150",
  size: "base",
  type: "soft",
  onClick: () => {
    unavailableNotice()
  }
})