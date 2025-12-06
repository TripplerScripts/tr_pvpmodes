import nuiMessage from '../components/nuiMessage'

export default function closeDashboard() {
  nuiMessage({
    action: 'close',
  })
}