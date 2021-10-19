import './bottom.scss';

function Bottom() {
    return (
        <section id={"bottom-style"}>
            <div id={"top-container"}>
                <div id={"top-contents"}>
                    <ul id={"left-list"}>
                        <li>개인정보처리방침</li>
                        <li>이용안내</li>
                        <li>사업자정보확인</li>
                    </ul>
                    <ul id={"right-list"}>
                        <li>로그인</li>
                        <li>주문하기</li>
                    </ul>
                </div>
            </div>
            <div id={"bottom-container"}>
                <div id={"left-contents"}>
                    <p className={"title"}>COMPANY INFO</p>
                    <div className={"text-wrap"}>
                        <p>회사명 <span>미즈희</span></p>
                        <p> 대표자 <span>이지민</span></p>
                    </div>
                    <p>사업자 등록번호 <span>113-75-00338</span></p>
                    <p>주소 부산광역시 연제구 쌍미천로7번길 24</p>
                    <p>이메일 apsxh1145@naver.com</p>
                    <p>Copyright©2021 <span>미즈희</span>.ALL rights reserved</p>
                </div>
                <div id={"right-contents"}>
                    <div className={"text-wrap-top"}>
                        <p>SERVICE CENTER</p>
                        <p>051-866-8900</p>
                        <p>평일 09:00 - 18:00 토, 일, 공휴일 휴무</p>
                    </div>
                    <div className={"text-wrap-bottom"}>
                        <p>BANK ACCOUNT</p>
                        <p>예금주 <span>이지민</span></p>
                        <p>카카오뱅크 <span>3333-20-0521997</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bottom;