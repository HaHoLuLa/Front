import { GoogleMap, LoadScript } from "@react-google-maps/api"
import "../../styles/upload.css"
import { useNavigate } from "react-router-dom"

export const Upload = () => {
  const nav = useNavigate();

  return (
    <main>  
        <div className="selectLocationForm">

            <div className="selectLocationMenu">
                <span>업로드 할 지역과 숙박시설을 선택해주세요.</span>

                <div class="selectLocationOptionContainer">
                    <select class="locationOption1">
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
                        {/* 아이콘 */}
                        </div>
                    </div>

                    <div className="search-result-container">
                        <div class="searchLocationResult">
                            <div class="SLRimg">
                                <img src="https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp" alt=""/>
                            </div>

                            <div class="SLRP">
                                <div>
                                    <p class="SLRPhotel">진짜 멋진 호텔</p>
                                    <p class="SLRPLocation">대한민국 어디였지 아무튼 거기</p>
                                </div>
                                <div class="tlqkf">
                                    <button>선택</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button onClick={() => nav("/upload-more")} class="goWriteForm">폼 작성하기</button>

        </div>
    </main>
  )
}