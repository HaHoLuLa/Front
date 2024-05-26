import "./styles/main.css"
import Layout from "./layout/Layout"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
// import { Helmet } from "react-helmet-async"
import Login from "./pages/users/Login"
import Map from "./tests/Map"
import Index from "./pages/index/Index"
import Chat from "./tests/Chat"
import SwiperTest from "./tests/SwiperTest"
import UserInfo from "./pages/users/UserInfo"
import CityList from "./pages/CityList"
import NativeJoin1 from "./pages/users/NativeJoin1"
import NativeJoin from "./pages/users/NativeJoin"
import UserJoin from "./pages/users/UserJoin"
import Local from "./pages/users/Local"
import { Sub1 } from "./pages/subs/Sub1"
import { Sub3 } from "./pages/subs/Sub3"
import { Upload } from "./pages/uploads/Upload"
import { useEffect } from "react"
import Event from "./pages/events/Events"
import HookTest from "./tests/HookTest"
import Identify from "./pages/subs/Identify"
import Reservation from "./pages/reservation/Reservation"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth"
      behavior: "instant"
    })
  }, [pathname])
  return null;
}

const Redirect = () => {
  const nav = useNavigate()
  useEffect(() => {
    nav('/', {replace: true})
  }, [nav])
  return null
}

export default function App() {
  return (
    <>
    {/* 스크롤 자동으로 위 */}
    <ScrollToTop />
    <Routes>
      {/* 공용 레이아웃 */}
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route index element={<Index />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<UserInfo />} />
        {/* 도시들 (아마 안 쓸 수도) */}
        <Route path="/citys" element={<CityList />} />
        {/* 검색 결과 */}
        <Route path="/search/:locate" element={<Sub1 />} />
        {/* 객실 페이지 */}
        <Route path="/room" element={<Sub3 />}>
          <Route path=":num" element={<Sub3 />} />
        </Route>
        {/* 유저 회원가입 */}
        <Route path="/user-join" element={<UserJoin />} />
        {/* 현지인 회원가입 */}
        <Route path="/native-join" element={<NativeJoin />} />
        <Route path="/native-join1" element={<NativeJoin1 />} />
        {/* 현지인 페이지 */}
        <Route path="/local/*" element={<Local />} />
        {/* 객실 업로드 */}
        <Route path="/upload" element={<Upload />} />
        {/* 이벤트 상세 */}
        <Route path="/event" element={<Event />} />
        {/* 예약하기 */}
        <Route path="/order" element={<Reservation />} />
      </Route>
      {/* /test 들은 테스트용 */}
      <Route path="/test/map" element={<Map />} />
      <Route path="/test/swiper" element={<SwiperTest /> } />
      <Route path="/test/hook" element={<HookTest />} />
      <Route path="/test/chat/:sender/:id" element={<Chat />} />
      {/* 본인인증 */}
      <Route path="/identify" element={<Identify />} />
      {/* 404시 메인으로 */}
      <Route path="*" element={<Redirect />} />
    </Routes>
    </>
  )
}