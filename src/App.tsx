import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Three Bears Motel Lincoln, MT</h1>
        <p className='address'>MT HWY 200 203 Main St Lincoln, Montana 59639</p>
        <p className='phoneNumber'>406-362-4355</p>
      </div>
      <div className="section">
        <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/3bearsoutside.jpg' />
      </div>
      <div className='section'>
        <img src='https://threebearsmotel.com/wp-content/uploads/2021/06/sign2.jpg' />
        <h2>Welcom</h2>
        <p>The Three Bears Motel welcomes you to our family owned establishment in the mountains of Montana!

          The following are just some of the services we offer to make your stay the perfect mountain getaway! Find more details on our services page.</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
