import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function customRender(reactElement, container){

}

const reactElement = {
  type: 'a', // this will be any tag div , a , p etc.
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visi google'

}

customRender(reactElement, mainContainer)

{} // this is evaluated expression we can inject variable only 