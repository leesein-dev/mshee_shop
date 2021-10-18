import {ReactComponent as Logo} from "../../image/logo.svg";
import "./navbar.scss";
import {useHistory} from "react-router-dom";

function Navbar() {

    let history = useHistory();

    return(
        <div id={"nav-style"}>
            <div id={"head-style"}>
                <Logo id={"logo"} onClick={()=>history.push('/')}/>
                <div id={"nav-right"}>
                    <ul>
                        <li onClick={()=>history.push('/order')}>주문하기</li>
                        <li onClick={()=>history.push('/story')}>미즈희 스토리</li>
                        <li onClick={()=>history.push('/recipe')}>홈카페 레시피</li>
                        <li onClick={()=>history.push('/service')}>고객센터</li>
                    </ul>
                </div>
                <div id={"nav-left"}>
                    <ul>
                        <li onClick={()=>history.push('/auth/login')}>로그인</li>
                        <li>장바구니</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;