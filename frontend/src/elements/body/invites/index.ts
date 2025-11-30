import Button from "../../../components/button"
import createElement from "../../../components/createElement"

createElement({
  parent: "invites",
  id: "left-InviteSide",
  className: "w-full flex justify-around"
})

createElement({
  parent: "invites",
  id: "right-InviteSide",
  className: "w-full flex justify-around"
})

Button({
  parent: "left-InviteSide",
  content: "+",
  type: "soft"
})

Button({
  parent: "left-InviteSide",
  content: "+",
  type: "soft"
})

Button({
  parent: "right-InviteSide",
  content: "+",
  type: "soft"
})

Button({
  parent: "right-InviteSide",
  content: "+",
  type: "soft"
})