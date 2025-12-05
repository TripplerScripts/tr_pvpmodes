import Alert from "../components/alert"

export default function unavailableNotice() {
  Alert("warn", "Notice", "This feature is still not available yet", "Come back later", () => {})
}