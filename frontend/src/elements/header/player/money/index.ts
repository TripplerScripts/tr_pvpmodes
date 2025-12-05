import Button from "../../../../components/button"
import Alert from "../../../../components/alert"

Button({
  parent: "player-details",
  content: "🌟 | 3000/4500",
  size: "base",
  type: "primary",
  onClick: () => {
    Alert("Notice", "This feature is still not available yet", "Come back later", () => {})
  }
})