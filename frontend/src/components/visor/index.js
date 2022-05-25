import Button from '@mui/material/Button'

const Visor = val => {
    const handleClick = val => {
        let url

        switch(val) {
            case '0':
                url = "https://chrome.google.com/webstore/detail/urbit-visor/oadimaacghcacmfipakhadejgalcaepg"
                break
            case '1':
                url = "https://urbit.org/getting-started/get-planet"
                break
            default:
                url = ''
                break
        }

        window.open(url, '_blank')
    }

    return(
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ padding:"2px", borderStyle:"solid", border:"1px" }}>
                <div style={{ backgroundColor: "rgba(0,0,0,.75)", padding:"10px" }}>
                    <p style={{ color:"#FFF" }}>This site requires ownership of an Urbit planet and the Visor plugin for Chromium browers. Discover the new internet!</p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button variant="outlined" size="large" onClick={ e => handleClick(e.target.value) } value="0">GET VISOR</Button>
                        <span style={{ width:"20px" }} />
                        <Button variant="outlined" size="large" onClick={ e => handleClick(e.target.value) } value="1">GET URBIT</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visor