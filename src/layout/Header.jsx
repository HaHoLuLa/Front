import { Link, useLocation, useNavigate } from "react-router-dom";
import PopUp from "../pages/users/PopUp";
import { useState } from "react";

const SearchBar = () => {
  const [ search, setSearch ] = useState("")
  const nav = useNavigate();
  // value={search}

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className="search" type="text" name="" placeholder="도시를 검색하세요" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter" && search !== "") {
          nav(`/search/${search}`)
          // setSearch("")
        }
      }}/>
    </div>
  )
}

export default function Header() {
  const { pathname } = useLocation();
  const [ act, setAct ] = useState(false);
  const nav = useNavigate();

  return (
    <>
      {pathname !== "/login" ? <PopUp act={act} setAct={setAct} /> : <></>}
      <header>
        <div style={{width: '1200px', margin: '0 auto'}}>

        <div className="header">
          <div>
            <div className="logo">
              <Link to={"/"}>
                <h1 onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })}>여간행장</h1>
              </Link>
            </div>
            { pathname !== "/upload" ?
            <SearchBar /> : <span style={{marginLeft: "10px"}}>현지인</span>
             }
          </div>
          <div className="login-menu">
            { 
              pathname === "/login" || pathname === "/user-join" || pathname === "/native-join" || pathname === "/native-join1" ? 
              <></>
              :
              <>
                <span onClick={() => setAct(true)}>회원가입</span>
                <Link to={"/login"}>
                  <button>로그인</button>
                </Link>
              </>
            }
          </div>
        </div>
        <div className="header-nav">
          <span><i className="fa-solid fa-plane-departure"></i>&nbsp; 메뉴1</span>
          <span onClick={() => nav("/citys")}><i className="fa-solid fa-hotel"></i>&nbsp;도시들</span>
          <span><i className="fa-solid fa-comments"></i>&nbsp;채팅</span>
          <span onClick={() => nav("/event")}><i className="fa-solid fa-gift"></i>&nbsp;이벤트</span>
          {/* <span><i className="fa-solid fa-box"></i>&nbsp;메뉴 5</span> */}
          {/* <span>더보기&nbsp;<i className="fa-solid fa-caret-down"></i></span> */}
        </div>
        </div>
      </header>
    </>
  )
}