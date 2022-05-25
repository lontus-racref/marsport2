import React, { useState } from 'react'

export const Context = React.createContext()

const Provider = props => {
    const [p, setP] = useState('')
    const [auth, setAuth] = useState('')
    const [visor, setVisor] = useState(false)

    return (
        <Context.Provider
            value = {{
                p,
                setP: p => setP(p),
                auth,
                setAuth: auth => setAuth(auth),
                visor,
                setVisor: visor => setVisor(visor)
            }}
        >
            { props.children }
        </Context.Provider>
    )
}

export default Provider