import { useParams } from "react-router-dom"
import "../../styles/sub1.css"
import { useEffect, useState } from "react"
import { GoogleMap, LoadScript, 
  MarkerF, InfoWindowF
 } from "@react-google-maps/api"
import axios from "axios"
import { useGetData } from "../../utils/useData"

const MapPopup = ({act, setAct}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleSetMarker = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  useEffect(() => {
    if (act) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [act])

  const handleClose = () => {
    setAct(false)
  }

  return (
    <div className="map-popup" style={act ? {display: "block"} : {display: "none"}}>
      <div>
        <div style={{display: "flex", justifyContent: "flex-end"}}><button style={{fontSize: "30px", backgroundColor: "transparent", border: "none", height: "30.75px", lineHeight: "30.75px"}} onClick={handleClose}>&times;</button></div>
        <div style={{display: "flex"}}>
          <div style={{width: "30%", paddingLeft: "30px"}}>
            <h2 style={{marginTop: "0"}}>예약 가능 숙소 123개</h2>
            
          </div>
          <div style={{flex: "1", paddingRight: "30px"}}>
          <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
            <GoogleMap mapContainerStyle={{width: "100%", height: "83vh"}} center={{lat: 37, lng: 127}} zoom={15} options={{ disableDefaultUI: false }}>
            {[
            {
              name: "₩ 100,000",
              position: {
                lat: 37,
                lng: 127,
              },
            },
            { name: "₩ 200,000", position: { lat: 38, lng: 128 } },
            { name: "₩ 300,000", position: { lat: 37, lng: 128 } },
            { name: "₩ 400,000", position: { lat: 38, lng: 127 } },
            {
              name: "고덕 아남아파트",
              position: { lat: 37.5578508, lng: 127.1459139 },
            },
          ].map((item, index) => (
            <MarkerF
              key={index}
              position={item.position}
              title={item.name}
              label={{
                color: "white",
                text: item.name,
              }}
              onClick={() => handleSetMarker(item)}
            />
          ))}
          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker.position}
              onCloseClick={handleInfoWindowClose}
              options={{
                pixelOffset: new window.google.maps.Size(0, -30),
              }}
            >
              <div>
                <h1 style={{ margin: "0" }}>특가</h1>
                {selectedMarker.name}
              </div>
            </InfoWindowF>
          )}
            </GoogleMap>
          </LoadScript>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Sub1 = () => {
  const { locate } = useParams()
  const [ act, setAct ] = useState(false);
  // const data = useGetData("/search/city-hotels?city=튀빙겐")
  const [ data, setData ] = useState(null)

  useEffect(() => {
    axios.get(`/search/city-hotels?city=${locate}`)
    .then(res => {
      setData(res.data)
      console.log(res.data)
    })
    .catch(e => console.error(e))
  }, [])

  return (
    <>
    <MapPopup act={act} setAct={setAct} />
    <main>
    <h2>'{locate}' 검색 결과</h2>
    <div className="main">

      <div className="left-menu">

        <div className="map-menu" onClick={() => setAct(true)}>
          <i className="fa-solid fa-location-dot fa-2xl"></i>
          <span><b>지도에서 숙소보기</b></span>
        </div>

        <div className="local-cart">
          <p><input type="checkbox" value="" />체크1</p>
          <p><input type="checkbox" value="" />체크2</p>
          <p><input type="checkbox" value="" />체크3</p>
          <p><input type="checkbox" value="" />체크4</p>
          <p><input type="checkbox" value="" />체크5</p>
        </div>

        <div className="local-opt">
          <hr /><div><span>메뉴 1</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 2</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 3</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 4</span><i className="fa-solid fa-plus"></i></div>
          <hr />
        </div>
      </div>

      <div className="right-menu">

        <div className="sort-menu">

          <h4>134건의 검색 결과</h4>

          {/* <div>
            <select><option>예약가능 날짜</option></select>
            <select><option>가격대</option></select>
            <span>예약즉시 확정<input type="checkbox" /></span>
          </div>
          <label for="정렬">정렬 : </label>
          <select name="정렬"><option>추천순</option></select> */}
        </div>

        <div className="result-container">

        {data?.map((item, index) => (
          
          <div className="result-obj" key={index}>
            <div style={{backgroundImage: `url('${item.hpUrl}')`}}>
              <div>
                <i className="fa-regular fa-heart fa-xl"></i>
              </div>
            </div>
            <div>
              <p><b>{item.hname}</b></p>
              <p><i className="fa-solid fa-star"></i> {item.hrate} ({item?.rcount})</p>
              <p><b></b>원</p>
            </div>
          </div>
        ))}
          
        </div>

        {/* <div className="result-page"><h3>&lt; 1 2 3 4 5 &gt;</h3></div> */}
      </div>
    </div>
  </main>
        </>
  )
}