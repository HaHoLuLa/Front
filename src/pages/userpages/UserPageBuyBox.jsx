import { useEffect, useState } from "react";
import "../../styles/UserPageBuyBox.css"
import axios from "axios";

function UserPageBuyBox() {
    const [ resInfo, setResInfo ] = useState([])
    useEffect(() => {
        axios.get("/my-page/res-info")
        .then(res => {setResInfo(res.data); console.log(res.data)} )
        .catch(e => console.error(e))
    }, [])
    return (
        <main>
            <p class="UserPageName">마이페이지</p>
            <div class="UserPageContainer">
                <div class="UsetPageLeftC">
                    <div class="UserProfileC">
                        <div class="UserProfileImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                        </div>
                        <p>이름</p>
                        <a href="">프로필 설정</a>
                    </div>

                    <div class="UserPageNev">
                        <a>계정</a>
                        <a class="UserPageNow">예약내역</a>
                        <a>위시리스트</a>
                        <a>최근 본</a>
                    </div>
                </div>

                <div class="UsetPageRightC">
                    <div class="UsetPageRightBC">

                        {resInfo.map((resInfo, index) => (
                        <div class="UsetPageBuyBox" key={index}>
                            <div class="UsetPageBuyBoxImg">
                                <img class="UsetPageBuyBoxImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" />
                            </div>

                            <div>
                                <p class="UsetPageBuyNum">예약번호 {resInfo?.resNum}</p>
                                <p class="UsetPageBuyName">{resInfo?.rname}</p>
                                <p>예약날짜 {resInfo?.resDate}</p>
                            </div>

                            <div class="UserPageBuyDescC">
                                    <p class="UsetPageBuyOp">{resInfo?.rname}</p>
                                    <p class="UsetPageBuyCost">{resInfo?.rcost}원</p>
                            </div>
                            
                        </div>
))}
                    </div>
                </div>
            </div>
        </main>
    )
}
    
export default UserPageBuyBox;