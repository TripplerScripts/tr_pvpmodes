import closeDashboard from '../modules/closeGame'

onNet('tr_competitive:client:shutDownDashboard', () => {
  closeDashboard()
})