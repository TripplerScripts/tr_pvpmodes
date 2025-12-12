import closeDashboard from '../closeGame'

export default () => {
  onNet('tr_competitive:client:shutDownDashboard', () => {
    closeDashboard()
  })
}