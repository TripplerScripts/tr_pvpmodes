document.getElementById('root').setAttribute('class', 'fixed w-full h-full flex items-center justify-center flex-col')

const style = document.createElement('style')

style.textContent = `
#header {
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  height: 15vh;
  width: 100%;
}
#body {
  background-color:rgb(116, 116, 116);
  color: #000000;
  height: 100%;
  width: 100%;
}
`

document.head.appendChild(style)

export default true