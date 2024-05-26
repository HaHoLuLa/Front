import { GoogleMap, LoadScript } from "@react-google-maps/api"
import "../../styles/upload.css"
import { useNavigate } from "react-router-dom"

export const Upload = () => {
  const nav = useNavigate();

  return (
    <main>
      <div className="upload-form">
        <div className="upload-menu">
          <span>업로드 할 지역과 호텔을 선택해주세요</span>
          <div>
            <select>
              <option>국가 선택</option>
            </select>
            <select>
              <option>도시 선택</option>
            </select>
          </div>
        </div>
        <div className="upload-content">
          <div className="map-wrapper">
            <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
              <GoogleMap mapContainerClassName="map" center={{lat: 37, lng: 127}} zoom={15} options={{ disableDefaultUI: false }}/>
            </LoadScript>
          </div>
          <div className="search-menu">
            <div className="search-bar-wrapper">
              <div className="upload-search-bar">
                <input type="text" placeholder="검색" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="search-result">
              <p>블럭</p>
              <p>블럭</p>
              <p>블럭</p>
              <p>블럭</p>
              <p>블럭</p>
            </div>
          </div>
        </div>
        <button onClick={() => nav("/upload-more")} style={{width: "100%"}}>폼 작성하기</button>
      </div>
    </main>
  )
}