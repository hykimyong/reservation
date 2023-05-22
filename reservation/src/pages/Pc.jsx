import styled from 'styled-components';
import { useQuery } from 'react-query';
import ListData from '../components/ListData';
import ListValue from '../components/ListValue';

const H1 = styled.h1`
    text-align:center;
`;

const Aside = styled.aside`
    float:right;
    position:relative;
    top:0;
    right:0;
    width:40%;
    margin-left:5px;
    height:600px;
    height:150px;
`;

export default function Pc() {
  const { isLoading, error, data } = useQuery('repoData', () =>
  fetch('https://frontend.tabling.co.kr/v1/store/9533/reservations').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
    
  return ( 
    <div className='main'>
      <H1>예약 목록</H1>
      <Aside>
        <ListValue/>
      </Aside>
      {data.reservations.map((item)=>{
        return(<ListData key={item.id} data={item}/>)
      })}
    </div>
  )
}
