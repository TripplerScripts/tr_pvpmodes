import Button from "../../../../components/button"
import Alert from "../../../../components/alert"

Button({
  parent: "player-details",
  content: "⭐ | 150",
  size: "base",
  type: "soft",
  onClick: () => {
    Alert("Notice", "This feature is still not available yet", "Come back later", () => {})
  }
})