export const logoutPlayer = (source: number) => {
  emitNet('tr_onboarding/client/logout', source)
}