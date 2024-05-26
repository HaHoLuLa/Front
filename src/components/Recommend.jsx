import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useNavigate } from "react-router-dom"

export default function Recommend({style, data, id, title, sub}) {
  const nav = useNavigate();

  return (
    <div className="recommend" style={style}>

      <h2>{title}</h2>
      <div className="recommend-container">
        <button id={`prev${id}`} style={{left: "-25px"}}><i className="fa-solid fa-chevron-left"></i></button>
        <button id={`next${id}`} style={{right: "-25px"}}><i className="fa-solid fa-chevron-left fa-rotate-180"></i></button>
        <Swiper
          modules={[ Navigation ]}
          slidesPerView={4}
          slidesPerGroup={4}
          spaceBetween={25}
          navigation={{prevEl: `#prev${id}`, nextEl: `#next${id}`}}
        >
          {data.map((i, index) => (
          <SwiperSlide key={index} onClick={() => nav(`/room/${i.hNum}`)}>

            <div className="recommend-object">

            <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}></div>
            <div>
  
              <div>
                <span>{sub}</span>
                <h3>{i.hName}</h3>
                {/* [특가] 이주현의 집 아남아파트{i} */}
              </div>
  
              <div>
                <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> 341</span>
                <span>가격 {i.rCost !== undefined ? i.rCost.toLocaleString() : ""}원 / {i.rPeople}명</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </div>
  )
}