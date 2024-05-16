import "./styles/main.css"
import Layout from "./layout/Layout"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
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
import { Events } from "./pages/events/Events"

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
    nav(-1, {replace: 'true'})
  }, [nav])
  return null
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/login" element={
          <>
            <Helmet>
              <title>여간행장 - Login</title>
            </Helmet>
            <Login />
          </>
        } />
        <Route path="/mypage" element={
          <>
            <Helmet>
              <title>여간행장 - Mypage</title>
            </Helmet>
            <UserInfo />
          </>
        } />
        <Route path="/test/map" element={<Map />} />
        <Route path="/test/swiper" element={<SwiperTest /> } />
        <Route path="/citys" element={<CityList />} />
        <Route path="/search/:locate" element={<Sub1 />} />
        <Route path="/room" element={<Sub3 />}>
          <Route path=":num" element={<Sub3 />} />
        </Route>
        <Route path="/user-join" element={<UserJoin />} />
        <Route path="/native-join" element={<NativeJoin />} />
        <Route path="/native-join1" element={<NativeJoin1 />} />
        <Route path="/local/*" element={<Local />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/event" element={<Events />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
      <Route path="/test/chat/:sender/:id" element={<Chat />} />
      <Route path="*" element={<Redirect />} />
    </Routes>
    </>
  )
}