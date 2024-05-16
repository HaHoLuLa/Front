import "../../styles/nativeJoin1.css"
import { Link } from "react-router-dom";

export default function NativeJoin1() {
    return (
        <main>
            <div className="native1-login-box" style={{ marginTop: "50px" }}>
                <h1 style={{ marginBottom: "50px" }}>현지인(파트너) 상세 정보 입력</h1>

                <h2>현지인 프로필 사진</h2>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <div className="native1-image-circle" />
                    <button className="native1-check-btn">프로필 이미지 업로드</button>
                </div>
                <h2>현지인 이름</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name placeholder="현지인 프로필로 사용될 이름을 적어주세요" />
                </div>

                <h2>현지인 도시</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name placeholder="거주 도시를 적어주세요. 해당 지역 상품을 등록 가능하게 합니다."/>
                </div>

                <h2>간단 소개</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name placeholder="간단한 소개 문구를 적어주세요."/>
                </div>
            
                <h2>정산 은행 선택</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <select className='bank_list'>
                    <option value=''>-선택-</option>
                    <option value='SC제일은행'>SC제일은행</option>
                    <option value='경남은행'>경남은행</option>
                    <option value='광주은행'>광주은행</option>
                    <option value='국민은행'>국민은행</option>
                    <option value='기업은행'>기업은행</option>
                    <option value='농협중앙회'>농협중앙회</option>
                    <option value='농협회원조합'>농협회원조합</option>
                    <option value='대구은행'>대구은행</option>
                    <option value='부산은행'>부산은행</option>
                    <option value='산업은행'>산업은행</option>
                    <option value='새마을금고'>새마을금고</option>
                    <option value='수협중앙회'>수협중앙회</option>
                    <option value='신한은행'>신한은행</option>
                    <option value='신협중앙회'>신협중앙회</option>
                    <option value='하나은행'>하나은행</option>
                    <option value='우리은행'>우리은행</option>
                    <option value='우체국'>우체국</option>
                    <option value='전북은행'>전북은행</option>
                    <option value='제주은행'>제주은행</option>
                    <option value='한국씨티은행'>한국씨티은행</option>
                </select> 
                </div>

                <h2>정산 계좌 입력</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name placeholder='"-" 문자를 제외하고 숫자만 적어주세요' />
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <Link to={"/login"}>
                    <button className="native1-check-btn">현지인 가입 완료</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
