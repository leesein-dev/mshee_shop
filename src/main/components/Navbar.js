import {ReactComponent as Logo} from "../../image/logo.svg";

function Navbar() {

    const NAV_STYLE = {
        width: "100%",
        height: "68px",
        position: "absolute",
        borderBottom: "1px solid white"
    }

    return(
        <div style={NAV_STYLE}>
            <Logo style={{width: "50px", height: "100%"}}/>
        </div>
    )
}

export default Navbar;