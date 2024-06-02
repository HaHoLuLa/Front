import "../../styles/UserPage.css"

function UserPage() {
    return (
        <main>
            <p class="UserPageName">마이페이지</p>
            <div class="UserPageContainer">
                <div class="UsetPageLeftC">
                    <div class="UserProfileC">
                        <div class="UserProfileImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt=""/>
                        </div>
                        <p>이름</p>
                        <a href="">프로필 설정</a>
                    </div>

                    <div class="UserPageNev">
                        <a>계정</a>
                        <a>결제내역</a>
                        <a>위시리스트</a>
                        <a>최근 본</a>
                    </div>
                </div>

                <div class="UsetPageRightC">
                    
                    <div class="UserAccountTop">
                        
                        <button>편집</button>
                        <table>
                            <tr>
                                <td class="UAThead">이름</td>
                                <td class="UATbody">곽 춘식</td>
                            </tr>

                            <tr>
                                <td class="UAThead">이메일</td>
                                <td class="UATbody">I.Want.Go.Home@No.Home.kr</td>
                            </tr>

                            <tr>
                                <td class="UAThead">비밀번호</td>
                                <td class="UATbody">이거 별표시</td>
                            </tr>

                            <tr>
                                <td class="UAThead">전화번호</td>
                                <td class="UATbody">010-1577-1577</td>
                            </tr>

                            <tr>
                                <td class="UAThead" style={{verticalAlign:"top"}}>연동</td>
                                <td class="UATbody" style={{padding:0, textAlign:"right"}}>
                                    <table style={{float:"right", paddingRight:"20px"}}>
                                        <tr>
                                            <td class="InnerHead">네이버</td>
                                            <td class="InnerBody">GoHome@naver.com</td>
                                        </tr>
                                        <tr>
                                            <td class="InnerHead">구글</td>
                                            <td class="InnerBody">GoHome@naver.com</td>
                                        </tr>
                                        <tr>
                                            <td class="InnerHead">카카오</td>
                                            <td class="InnerBody">GoHome@naver.com</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td class="UAThead" style={{verticalAlign:"top"}}>수신동의</td>
                                <td class="UATbody" style={{padding:0, textAlign:"right", }}>
                                    <table style={{float:"right", paddingRight:"20px"}}>
                                        <tr>
                                            <td class="InnerHead">네이버</td>
                                            <td class="InnerBody">
                                                <div class="wrapper">
                                                    <input type="checkbox" id="switch" />
                                                    <label for="switch" class="switch_label">
                                                        <span class="onf_btn"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="InnerHead">구글</td>
                                            <td class="InnerBody">
                                                <div class="wrapper">
                                                    <input type="checkbox" id="switch2" />
                                                    <label for="switch2" class="switch_label">
                                                        <span class="onf_btn"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="InnerHead">카카오</td>
                                            <td class="InnerBody">
                                                <div class="wrapper">
                                                    <input type="checkbox" id="switch3" />
                                                    <label for="switch3" class="switch_label">
                                                        <span class="onf_btn"></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="UserAccountBot">
                        <p class="UABName">계좌관리</p>
                        <table>
                            <tr>
                                <td class="UAThead">계좌</td>
                                <td class="UATbody">1010100101 - 10010010000</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </main> 
    )
}
    
export default UserPage;