// import { useContext } from "react"


// 보류
export default function Identify() {
  
  
  const handleSubmit = () => {
    alert("본인 인증에 성공하였습니다.")
    
    window.close()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <input />
      <button>인증하기</button>
    </form>
  )
}