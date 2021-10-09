import {ReactComponent as Logo} from "../../image/logo.svg";

function Navbar() {

    const NAV_STYLE = {
        width: "100%",
        height: "68px",
        position: "absolute",
        borderBottom: "1px solid white",
        display: "flex",
        alignItems: "center",
    }

    const HEAD_STYLE = {
        width: "100%",
        height: "48px",
        display: "flex",
        margin: "0 auto",
        maxWidth: "1140px",
    }

    const NAV_RIGHT = {
        height: "100%",
        display: "flex",
        flexGrow: "1",
        paddingLeft: "80px"
    }

    const NAV_LEFT = {
        display: "flex",
        height: "100%",
    }

    return(
        <div style={NAV_STYLE}>
            <div style={HEAD_STYLE}>
                <Logo style={{width: "50px", height: "100%"}}/>
                <div style={NAV_RIGHT}>
                    <ul style={{ listStyle: "none", display: "flex", margin: "0", padding:"0", alignItems: "center"}}>
                        <li>주문하기</li>
                        <li style={{paddingLeft: "40px"}}>정기배송</li>
                        <li style={{paddingLeft: "40px"}}>홈카페 레시피</li>
                        <li style={{paddingLeft: "40px"}}>고객센터</li>
                    </ul>
                </div>
                <div style={NAV_LEFT}>
                    <ul style={{ listStyle: "none", display: "flex", margin: "0", padding:"0", alignItems: "center" }}>
                        <li style={{paddingRight: "40px"}}>로그인</li>
                        <li>장바구니</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;