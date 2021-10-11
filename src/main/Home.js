import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";
import Section_1 from "../image/section_1.svg";
import Section_2 from "../image/section_2.svg";

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

    const JUMBOTRON_1 = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url("http://witchkitchen.co.kr/web/upload/allStore/section1.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    return(
        <>
            <div style={JUMBOTRON_1}></div>
            <section style={{width: "100%", height: "744px", alignItems: "center", overflow: "hidden"}}>
                <div style={{maxWidth: "750px", height: "100%", margin: "0 auto"}}>
                    <div style={{position: "absolute", margin: "58px 0 0 33px"}}>
                        <p style={{fontSize: "42px", fontWeight: "bold", margin: "14px 0 34px", letterSpacing: "-1px"}}>
                            수제 밀크티 베이스<br/>미즈희는 다릅니다.
                        </p>
                        <p style={{margin: "25px 0 0", fontSize: "16px"}}>
                            공장에서 대량생산 하는 것이 아닌<br/>
                            배송전날 하나하나 직접 끓여 <br/>
                            정성스럽게 만들어 보냅니다.
                        </p>
                        <button>미즈희 스토리 ></button>
                    </div>
                    <img src={Section_1} alt={"밀크티 붓는 사진"} align={"right"} />
                </div>
            </section>
            <section style={{width: "100%", height: "744px", backgroundColor: "#D8CBBB", alignItems: "center", overflow: "hidden"}}>
                <div style={{maxWidth: "750px", height: "100%", margin: "0 auto"}}>
                    <p style={{fontSize: "42px", fontWeight: "bold", margin: "58px 0 0 0", letterSpacing: "-1px", textAlign: "center", color: "#795A49"}}>
                        임산부, 어린아이도<br/>안심하고 먹어요.
                    </p>
                    <p style={{textAlign: "center", margin: "48px 0 20px", color: "#795A49"}}>
                        루이보스 홍차잎만을 넣어 만든 디카페인 수제 밀크티 베이스는<br/>
                        안심하고 드실 수 있도록 카페인 검사 및 영양검사를 모두 받았습니다.
                    </p>
                    <img src={Section_2} alt={"밀크티 붓는 사진"}/>
                </div>
            </section>
            <section style={{width: "100%", height: "744px", alignItems: "center", backgroundColor: "#FEF2DF"}}>
                <div style={{maxWidth: "750px", height: "100%", margin: "0 auto"}}>
                    <p>미즈희가 추천하는<br/>밀크티 홈카페 레시피</p>
                    <p>지금 만들어 보세요.</p>
                    <button>레시피 보기</button>
                </div>
            </section>
        </>
    )
}

export default Home;