import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import './style.css'

function App() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await window.api.getPartners()
      setPartners(res)
    })()
  }, [])


  return (
    <>
      <div className='page-heading'>
        <img alt="logo" className="logo" src={logo} />
        <h1>Партнеры</h1>
      </div>
      <ul className='partners-list'>
        {partners.map((partner) => {
          return <li key={partner.id} className='partner-card'>
            <div className='partner-data'>
              <p className='card_heading'>{partner.partner_type} | {partner.partner_name}</p>
              <div className='partner-data-info'>
                <p>{partner.ceo}</p>
                <p>{partner.phone}</p>
                <p>Рейтинг: {partner.rating}</p>
              </div>
            </div>
            <div className='partner-sale partner-data card_heading'>
              {partner.discount}%
            </div>
          </li>
        })}
      </ul>
    </>
  )
}

export default App

