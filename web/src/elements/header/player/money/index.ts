import { useButton } from "@trippler/tr_kit/web"
import unavailableNotice from "../../../../components/serviceUnavailable"

useButton({
  parent: "player-details",
  content: "🌟 | 3000/4500",
  size: "base",
  type: "primary",
  onClick: () => {
    unavailableNotice()
  }
})