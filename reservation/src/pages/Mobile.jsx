import React from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components';
import MobileListData from '../components/MobileListData';
import MobileModal from '../components/MobileModal';

const H1 = styled.h1`
text-align:center;
`;

export default function Mobile() {

  const { isLoading, error, data } = useQuery('repoData', () =>
  fetch('https://frontend.tabling.co.kr/v1/store/9533/reservations').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
    <H1>예약 목록</H1>
    {data.reservations.map((item)=>{
      return(<MobileListData key={item.id} data={item}/>)
    })}
    <MobileModal/>
    </>
  )
}
