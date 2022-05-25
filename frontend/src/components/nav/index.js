import { useContext } from 'react'
import Button from '@mui/material/Button'

const Nav = props => {
    return(
        <ul style={{ listStyleType: "none", textAlign:"right" }}>
            <li>
                <h1 style={{ fontFamily:"Montserrat", fontWeight:"lighter", color:"#FFF" }}>M A R S P O R T</h1>
            </li>
            {
                props.data.map((el, i) => {
                    return(
                        <li key={ i }>
                            <Button color={ el.color }>{ el.link }</Button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav