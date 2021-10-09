import Navbar from "./components/Navbar";
import Bottom from "./components/Bottom";

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
            <section style={{width: "100%", height: "744px", backgroundColor: "black", alignItems: "center" }}>
                <div style={{maxWidth: "750px", backgroundColor: "white", height: "100%", margin: "0 auto" }}>
                    <div>
                        <p style={{margin: 0}}>
                            미즈희 수제미 밀크티 베이스는<br/>
                            <span>다릅니다.</span>
                        </p>
                        <hr align={"left"} style={{width:"70px", border: "1px solid black"}}/>
                        <p style={{margin: 0}}>
                            공장에서 대량생산 하는 것이 아닌<br/>
                            배송전날 직접 끓여<br/>
                            하나하나 정성스럽게 만들어 드립니다.
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <section style={{width: "100%", height: "744px", backgroundColor: "#D8CBBB", alignItems: "center" }}>
            </section>
            <section style={{width: "100%", height: "744px", backgroundColor: "black", alignItems: "center" }}>

            </section>
        </>
    )
}

export default Home;