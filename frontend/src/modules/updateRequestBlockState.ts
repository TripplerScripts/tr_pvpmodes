let requestsBlockCollapsed = true

const friendsHeader = document.getElementById('friendsHeader')
friendsHeader.addEventListener('click', () => {
  updateRequestBlockState(true)
})

export default function updateRequestBlockState(collapsed: boolean) {
  const requests = document.getElementById('friendsRequests');

  if (collapsed === true) {
    requests.classList.remove("-bottom-[0%]");
    requests.classList.add("-bottom-[80%]");
  } else {
    requests.classList.remove("-bottom-[80%]");
    requests.classList.add("-bottom-[0%]");
  }

  requestsBlockCollapsed = collapsed;
};