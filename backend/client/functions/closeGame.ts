import nuiMessage from '../wrappers/nuiMessage'

export default function closeDashboard() {
  nuiMessage({
    action: 'close',
  })
}