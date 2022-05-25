import Button from '@mui/material/Button'

const GetMarsport = props => {
    return(
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ padding:"20px", borderStyle:"solid", border:"1px" }}>
                <div style={{ backgroundColor: "rgba(0,0,0,.75)", padding:"20px 50px 20px 50px" }}>
                    <Button color="warning" disabled>Get a Marsport</Button>
                </div>
            </div>
        </div>
    )
}

export default GetMarsport