function Bottom() {
    return(
        <section style={{width: "100%", alignItems: "center", padding: "0 0 40px"}}>
            <div style={{borderBottom: "1px solid #D8D8D8", width: "100%", height: "60px", alignItems: "center", display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "100%", maxWidth: "1140px", margin: "0 auto", padding: "0 25px", display: "flex", justifyContent: "space-between"}}>
                    <ul style={{display: "flex", listStyle: "none", padding: "0", fontSize: "12px", color: "#5A5A5A"}}>
                        <li style={{fontWeight: "bold"}}>개인정보처리방침</li>
                        <li style={{marginLeft: "35px"}}>이용안내</li>
                        <li style={{marginLeft: "35px"}}>사업자정보확인</li>
                    </ul>
                    <ul style={{display: "flex", listStyle: "none",  padding: "0", fontSize: "12px", color: "#5A5A5A"}}>
                        <li style={{fontWeight: "bold"}}>로그인</li>
                        <li style={{marginLeft: "35px"}}>주문하기</li>
                    </ul>
                </div>
            </div>
            <div style={{display: "flex", maxWidth: "1140px", padding: "0 25px", margin: "0 auto", justifyContent: "space-between"}}>
                <div>
                    <p style={{fontWeight: "bold"}}>COMPANY INFO</p>
                    <div style={{display: "flex", fontSize: "14px"}}>
                        <p>회사명 <span style={{fontWeight: "bold"}}>미즈희</span> </p>
                        <p style={{marginLeft: "30px"}}> 대표자 <span style={{fontWeight: "bold"}}>이지민</span></p>
                    </div>
                    <p style={{fontSize: "14px"}}>사업자 등록번호 <span style={{fontWeight: "bold"}}>113-75-00338</span></p>
                    <p style={{fontSize: "14px"}}>주소 부산광역시 연제구 쌍미천로7번길 24</p>
                    <p style={{fontSize: "14px"}}>이메일 apsxh1145@naver.com</p>
                    <p>Copyright©2021 <span style={{fontWeight: "bold"}}>미즈희</span>.ALL rights reserved</p>
                </div>
                <div>
                    <p>SERVICE CENTER</p>
                    <p>051-866-8900</p>
                    <p>평일 09:00 - 18:00 토, 일, 공휴일 휴무</p>
                    <p>BANK ACCOUNT</p>
                    <p>예금주 <span>이지민</span></p>
                    <p>카카오뱅크 <span>3333-20-0521997</span></p>
                </div>
            </div>

        </section>
    )
}

export default Bottom;