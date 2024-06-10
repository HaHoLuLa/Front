import { useEffect, useState } from "react";
import "../../styles/UserPageBuyBox.css"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function UserPageBuyBox() {
    const { num } = useParams()
    const [ resInfo, setResInfo ] = useState([])
    useEffect(() => {
        axios.get("/my-page/res-info")
        .then(res => {setResInfo(res.data); console.log(res.data)} )
        .catch(e => console.error(e))
    }, [])
    return (
        <main>
            <p className="UserPageName">마이페이지</p>
            <div className="UserPageContainer">
                <div className="UsetPageLeftC">
                    <div className="UserProfileC">
                        <div className="UserProfileImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt=""/>
                        </div>
                        <p>이름</p>
                        <Link>프로필 설정</Link>
                    </div>

                    <div className="UserPageNev">
                        <Link to={`/mypage/${num}`}>계정</Link>
                        <Link className="UserPageNow">예약내역</Link>
                        <Link>위시리스트</Link>
                        <Link>최근 본</Link>
                    </div>
                </div>

                <div className="UsetPageRightC">
                    <div className="UsetPageRightBC">

                        {resInfo.map((resInfo, index) => (
                        <div className="UsetPageBuyBox" key={index}>
                            <div className="UsetPageBuyBoxImg">
                                {/* <img className="UsetPageBuyBoxImage" src={resInfo.hurl} alt=""/> */}
                                <div className="UsetPageBuyBoxImage" style={{backgroundImage: `url('${resInfo.hurl}')`, backgroundSize: "cover", width: "100%", height: "100%"}} />
                            </div>

                            <div>
                                <p className="UsetPageBuyNum">예약번호 {resInfo?.resNum}</p>
                                <p className="UsetPageBuyName">{resInfo?.hname}</p>
                                <p>예약날짜 {resInfo?.resDate}</p>
                            </div>

                            <div className="UserPageBuyDescC">
                                    <p className="UsetPageBuyOp">{resInfo?.rname}</p>
                                    <p className="UsetPageBuyCost">{resInfo?.rcost?.toLocaleString()}원</p>
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