import {ReactComponent as Logo} from "../../image/logo.svg";

function Navbar() {

    const NAV_STYLE = {
        width: "100%",
        height: "68px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        color: "#752007",
    }

    const HEAD_STYLE = {
        width: "100%",
        height: "48px",
        display: "flex",
        margin: "0 auto",
        maxWidth: "750px",
    }

    const NAV_RIGHT = {
        height: "100%",
        display: "flex",
        flexGrow: "1",
        paddingLeft: "30px"
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
                    <ul style={{ listStyle: "none", display: "flex", margin: "0", padding:"0", alignItems: "center", fontSize: "14px"}}>
                        <li>주문하기</li>
                        <li style={{paddingLeft: "40px"}}>미즈희 스토리</li>
                        <li style={{paddingLeft: "40px"}}>홈카페 레시피</li>
                        <li style={{paddingLeft: "40px"}}>고객센터</li>
                    </ul>
                </div>
                <div style={NAV_LEFT}>
                    <ul style={{ listStyle: "none", display: "flex", margin: "0", padding:"0", alignItems: "center", fontSize: "14px"}}>
                        <li style={{paddingRight: "40px"}}>로그인</li>
                        <li>장바구니</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;