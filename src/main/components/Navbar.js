import {ReactComponent as Logo} from "../../image/logo.svg";
import "./navbar.scss";

function Navbar() {

    return(
        <div id={"nav-style"}>
            <div id={"head-style"}>
                <Logo id={"logo"}/>
                <div id={"nav-right"}>
                    <ul>
                        <li>주문하기</li>
                        <li>미즈희 스토리</li>
                        <li>홈카페 레시피</li>
                        <li>고객센터</li>
                    </ul>
                </div>
                <div id={"nav-left"}>
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