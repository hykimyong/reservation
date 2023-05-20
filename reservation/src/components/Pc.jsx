import React, { useEffect, useState } from 'react'
import axios from "axios";

const TestApiCall = async () => {
    try{
        const response = await axios.get('https://frontend.tabling.co.kr/v1/store/9533/reservations');
        console.log(response);
        return response.data;
    }catch(err){
        console.log(err);
    }
    
  }

export default function Pc() {
    const [data, setData] = useState();
    useEffect(()=>{
        setData(TestApiCall());
    },[])
    
  return (
    <>
    <h1>예약 목록</h1>
    <section>22</section>
    <section>11</section>
    <aside>dd</aside>
    </>
  )
}
