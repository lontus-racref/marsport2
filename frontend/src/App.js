//--import packages
import React, { useState, useEffect } from 'react'
import { urbitVisor } from "@dcspark/uv-core"

//--import components
import Visor from './components/visor'
import MarsportTemplate from './components/marsportTemplate'
//import GetMarsport from './components/getMarsport'

//--import services 
import checkVisor from './services/checkVisor'
import searchAzimuth from './services/searchAzimuth'
import checkPassport from './services/checkPassport'
import getPassport from './services/getPassport'

//--import styles
import './App.css'

const App = () => {
  const [p, setP] = useState('')
  const [auth, setAuth] = useState('')
  const [passportId, setPassportId] = useState('')
  const [visor, setVisor] = useState(false)
  const [star, setStar] = useState('')
  const [galaxy, setGalaxy] = useState('')
  const [citizenType, setCitizenType] = useState('')
  const [qr, setQr] = useState('')
  
  useEffect(() => {
    checkVisor().then(data => {
      if(data) {
        setVisor(true)
        urbitVisor.require(["shipName", "auth"], setData)
      }
    })

    if(p){
      if(star && galaxy) {
        setCitizenType('Planet')
      } else if(!star && galaxy) {
        setCitizenType('Star')
      } else {
        setCitizenType('Galaxy')
      }
    }
  },[p])

  const setData = () => {
    urbitVisor.getShip().then(res => {
      setP(`~${ res.response }`)
      setAuth(res.id)
    }).then(
      searchAzimuth(p).then(data => {
        if(p.match(/-/)) setStar(data.sponsor['urbit-id'])
        if(p.length > 4) setGalaxy(data.sponsor.sponsor['urbit-id'])
        if(p){
          if(data.sponsor['urbit-id'] && data.sponsor.sponsor['urbit-id']) {
            setCitizenType('Planet')
          } else if(!data.sponsor['urbit-id'] &&  data.sponsor.sponsor['urbit-id']) {
            setCitizenType('Star')
          } else {
            setCitizenType('Galaxy')
          }
        }
        checkPassport(p).then(data => {
          if(data) { 
            setPassportId(data)
          } else { 
            getPassport(`${ process.env.REACT_APP_DB_URL }/getpassport`, { 'p': p, 'g': '5537' })
              .then(data => {
                if(data) setPassportId(data.result.id)
              })
          }
        })
      })
    )
  }

  //--check if visor installed
  if(!visor) {
    return (
      <div id="background" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Visor />
      </div>
    )
  }

  if(passportId) {
    return (
      <div id="background" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <MarsportTemplate p={ p } sigil={ p } star={ star } galaxy={ galaxy } type={ citizenType } id={ passportId } raw={ qr } />   
      </div>
    ) 
  } else {
    return (
      <div id="background" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        
      </div>
    )
  }
}

export default App;
