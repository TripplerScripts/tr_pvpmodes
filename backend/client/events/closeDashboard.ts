import closeDashboard from '../modules/closeGame'

export default (): void => {
  onNet('tr_competitive:client:shutDownDashboard', () => {
    closeDashboard()
  })
}