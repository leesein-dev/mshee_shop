import "./home.scss";
import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import Section_1 from "../image/section_1.svg";
import Section_2 from "../image/rooibos.png";
import MILK_TEA_RECIPE from "../image/milk_tea_recipe.svg";
import * as RiIcon from "react-icons/ri";

function Home() {
    return(
        <>
            <Navbar/>
            <RandingPage/>
            <Bottom/>
        </>
    )
}

function RandingPage() {

    return(
        <div id={"main-page"}>
            <div id={"home-area-1"}/>
            <section id={"home-area-2"}>
                <div className={"contents-area"}>
                    <div className={"text-area"}>
                        <p className={"title"}>
                            수제 밀크티 베이스<br/>미즈희는 다릅니다.
                        </p>
                        <p className={"description"}>
                            공장에서 대량생산 하는 것이 아닌<br/>
                            배송전날 하나하나 직접 끓여 <br/>
                            정성스럽게 만들어 보냅니다.
                        </p>
                        <button>
                            미즈희 스토리
                            {RiIcon.RiArrowRightSLine(undefined)}
                        </button>
                    </div>
                    <img src={Section_1} alt={"밀크티 붓는 사진"} align={"right"}/>
                </div>
            </section>
            <section id={"home-area-3"}>
                <div className={"contents-area"}>
                    <div className={"text-area"}>
                        <p className={"title"}>
                            임산부, 어린아이도<br/>안심하고 먹어요.
                        </p>
                        <p className={"description"}>
                            루이보스 홍차잎만을 넣어 만든 디카페인 수제 밀크티 베이스는<br/>
                            안심하고 드실 수 있도록 카페인 검사 및 영양검사를 모두 받았습니다.
                        </p>
                    </div>
                    <img src={Section_2} alt={"밀크티 붓는 사진"}/>
                </div>
            </section>
            <section style={{width: "100%", height: "500px", alignItems: "center", backgroundColor: "#FEF2DF"}}>
                <div style={{maxWidth: "750px", height: "100%", margin: "0 auto", overflow: "hidden"}}>
                    <p>미즈희가 추천하는<br/>밀크티 홈카페 레시피</p>
                    <p>지금 만들어 보세요.</p>
                    <button>레시피 보기</button>
                    <div style={{height: "100px"}}></div>
                    <img src={MILK_TEA_RECIPE} alte={"다양한 밀크티 음료 사진"} style={{width: "100%"}}/>
                </div>
            </section>
        </div>
    )
}

export default Home;