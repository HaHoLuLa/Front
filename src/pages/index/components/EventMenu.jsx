import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function EventMenu({title, data}) {
  return (
    <div className="event-menu">
      <div className="event-text">
        <h2>{title}</h2>
      </div>
      
      <div className="event-container">
        <div>
          <button id="prev"><i className="fa-solid fa-chevron-left"></i></button>  
        </div>

        <Swiper
          style={{ width: "86%" }}
          modules={[ Navigation ]}
          navigation={{ prevEl: "#prev", nextEl: "#next"}}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
        >

        {data.map((item, index) => (
          <SwiperSlide key={index}>

          <div className="event-object">
            <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}></div>
            <div>

              <div>
                <span>티켓/패스</span>
                <h4>[특가] 이주현의 집 아남아파트!</h4>
              </div>

              <div>
                <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> 341</span>
                <span>가격 500,000원 / 1인</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
        <div>
          <button id="next"><i className="fa-solid fa-chevron-left fa-rotate-180"></i></button>  
        </div>
      </div>
    </div>
  )
}