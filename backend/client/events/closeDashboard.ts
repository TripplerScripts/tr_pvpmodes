import closeDashboard from '../modules/closeGame'

export default () => {
  onNet('tr_competitive:client:shutDownDashboard', () => {
    closeDashboard()
  })
}