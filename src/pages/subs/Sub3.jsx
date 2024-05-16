import "../../styles/sub3.css"
import Recommend from "../../components/Recommend"

export const Sub3 = () => {
  return (
  <main>
    <div className="room-info">
      <div>
        <div>
          <div
            style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
          </div>
          <div>
            <div
              style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
            </div>
            <div
              style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
            </div>
            <div
              style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>아남아파트</h1>
          <div>
            <h2>500,000원</h2>
            <span>1~6인실</span>
            <span>조리기구 有</span>
            <span>내부 화장실 2개</span>
            <span>방 3개</span>
          </div>
        </div>

        <div>
          <select>
            <option value="1">1인실</option>
          </select>
          <button>예약하기</button>
        </div>
      </div>
    </div>

    <Recommend id={1} data={[1, 2, 3, 4, 5, 6, 7, 8]} title={"유사한 객실"} style={{marginTop: "50px"}} />

    <div className="detail-info">
      <div>
        <h2>호텔 설명</h2>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        </div>
        <div>
          <div
            style={{backgroundImage: "url('data:image/jpeg;base64,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')"}}>
          </div>
          <div>
            <p>김우진</p>
            <p>02-1234-5678</p>x
          </div>
        </div>
      </div>
      <div>
        <h2>리뷰</h2>
        <div>
          <div>
            <p><span>하호룰라</span><span>2003.06.10 | 2024.04.11</span></p>
            <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
            <p>엵긝 올즨뫈소애요. 빵에서 so cute 미키 마우스 서비스 i was 정말 놀라다. 한 뫄릥도 안늭곡 three really good</p>
          </div>
          <div>
            <p><span>하호룰라</span><span>2003.06.10 | 2024.04.11</span></p>
            <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
            <p>엵긝 올즨뫈소애요. 빵에서 so cute 미키 마우스 서비스 i was 정말 놀라다. 한 뫄릥도 안늭곡 three really good</p>
          </div>
          <div>
            <p><span>하호룰라</span><span>2003.06.10 | 2024.04.11</span></p>
            <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
            <p>엵긝 올즨뫈소애요. 빵에서 so cute 미키 마우스 서비스 i was 정말 놀라다. 한 뫄릥도 안늭곡 three really good</p>
          </div>

        </div>
      </div>
    </div>

  </main>
  )
}