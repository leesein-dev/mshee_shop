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
            <div style={JUMBOTRON_1}>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    )
}

export default Home;