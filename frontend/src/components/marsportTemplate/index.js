//--import packages
import React, { createRef } from 'react'
import { sigil, reactRenderer } from '@tlon/sigil-js'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import { QRCodeSVG } from 'qrcode.react'
import { useScreenshot, createFileName } from "use-react-screenshot"

//--import services
import getFormattedDate from '../../services/getDate'

//--import assets
import mpt from '../../assets/marsport_series_a.webp'

//--import styles
import './style.css'

const MarsportTemplate = props => {
    const ref = createRef(null)
    const[image, takeScreenShot] = useScreenshot({
        type:'image/jpg',
        quality: 1.0
    })

    const download = (image, { name=`${props.p}-urbitpassport`, extension='png'} = {}) => {
        const a = document.createElement('a')
        a.href = image
        a.download = createFileName(extension, name)
        a.click()
    }

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return(
        props.sigil ?
            <Container maxWidth='sm'>
                <Button color="primary" onClick={ downloadScreenshot }>Download Marsport</Button>
                <div id="screenshotframe" ref={ref} style={{ width:'620px' }}>
                    <div style={{ margin:'0 auto', height:'721px', width:'620px', backgroundImage:`url(${mpt})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"contain" }}>
                        <div style={{ position:'relative', left:'35px', top:'140px', zIndex:"1"}}>
                            {
                                sigil({
                                    patp: `~${props.sigil}`,
                                    renderer: reactRenderer,
                                    colors: ['rgba(224,191,112,75%)', 'rgba(0,0,0,75%)'],
                                    attributes: {
                                        transform: "scale(1)"
                                    }
                                })
                            }
                        </div>
                        <div style={{ position: "relative", color: "rgba(68,91,210,.45)", mixBlendMode: "color-burn", left: "83px", top: "312px", transform: "rotate(-15deg)", fontSize:"30px" }}>
                            { getFormattedDate() }
                        </div>
                        <div style={{ display:'flex', position:'relative', left:'170px', top:'-43px', zIndex:'1' }}>
                            <List dense={ true }>
                                <ListItem key="id">
                                    <span className="id">
                                        <strong>{ props.id }</strong>
                                    </span>
                                </ListItem>
                                <ListItem key="p">
                                    <span className="id">
                                        @p: { props.p }
                                    </span>
                                </ListItem>
                                { 
                                    props.star ? 
                                        <ListItem key="star">
                                            <span className="id">
                                                Star: { props.star }
                                            </span>
                                        </ListItem> 
                                        : 
                                        '' 
                                }
                                { 
                                    props.galaxy ? 
                                        <ListItem key="galaxy">
                                            <span className="id">
                                                Galaxy: { props.galaxy }
                                            </span>
                                        </ListItem> 
                                        : 
                                        '' 
                                }
                                <ListItem key="type">
                                    <span className="id">
                                        Citizen Type: { props.type }
                                    </span>
                                </ListItem>
                            </List>
                            <div style={{ display:'flex', position:'relative', left:'115px', top:'15px', zIndex:'1'  }}>
                                <QRCodeSVG value={ JSON.stringify(props) } bgColor="rgba(224,191,112,0%)" />
                            </div> 
                        </div>
                    </div>
                </div>
               
            </Container>
        :
        ''
    )
}
export default MarsportTemplate