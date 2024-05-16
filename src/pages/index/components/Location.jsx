export default function Location({title, sub, data}) {
  return (
    <div className="location">

      <div className="location-title">
        <h2>{title}</h2>
        <span>{sub}</span>
      </div>

      <div className="location-container">

        {data.map((item, index) => (

          
          <div className="location-object" key={index}>
          <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}></div>
          <div>
            <h3>서울{item}</h3>
            <span>숙소 2,652개</span>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}