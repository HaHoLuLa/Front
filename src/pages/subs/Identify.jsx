// import { useContext } from "react"


// 보류
export default function Identify() {
  
  
  const handleSubmit = (e) => {
    // alert("본인 인증에 성공하였습니다.")
    
    // window.close()
    e.preventDefault()
    if (window.opener) {
      window.opener.postMessage({message: "hello"}, window.location.origin);
      window.close()
    } else {
      console.log("error")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <input />
      <button>인증하기</button>
    </form>
  )
}