import "../styles/sub4.css"

function CityList() {
  return (
  <main>
    {[1,1,1,1].map((i, index) => (
    <div className="city-menu" key={index}>
      <h1>도시 이름</h1>
      <span>도시 설명</span>
      <button>숙소 보러가기 &gt;</button>
    </div>
    ))}
  </main>
  )
}

export default CityList