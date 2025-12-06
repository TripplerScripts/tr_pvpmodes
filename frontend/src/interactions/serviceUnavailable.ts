import Alert from "../components/alert"

export default (): void => {
  Alert({
    type: "warn",
    title: "Notice",
    message: "This feature is still not available yet",
    button: "Come back later",
    onClick: () => {}
  })
}