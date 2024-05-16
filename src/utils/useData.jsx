import { useEffect, useState } from "react"
import { data as dummy } from "../dummy/data";
import axios from "axios";

export const useSetDummyData = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    setData(dummy)
  }, [])

  return data
}

export const useGetData = (url) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}${url}`)
    .then(res => setData(res.data))
    .catch(e => console.error(e))
  }, [url])

  return data
}

/**
 * url, 전송데이터 입력하면 요청 후 데이터 받는 훅
 * @param {string} url 스프링부트 post 매핑 url
 * @param {Object} postdata 전송할 객체
 * @returns 요청 후 받은 데이터
*/
export const usePostData = (url, postdata) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_URL}${url}`, postdata)
    .then(res => setData(res.data))
    .catch(e => console.error(e))
    setData()
  }, [url, postdata])

  return data
}

export const useTrigGetData = (url, trigger) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    if (trigger) {
      axios.get(`${process.env.REACT_APP_URL}${url}`)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
    }
  }, [url, trigger])

  return data
}

export const useTrigPostData = (url, postdata, trigger) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    if (trigger) {
      axios.post(`${process.env.REACT_APP_URL}${url}`, postdata)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
      setData()
    }
  }, [url, postdata, trigger])
  return data
}