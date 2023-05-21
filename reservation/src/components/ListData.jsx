import React, { useState } from 'react'
import styled from 'styled-components';
import { useStore } from '../common/store';

const SeatedBtn = styled.button`
    color: #162149;
`;
const ReserveBtn = styled.button`
    color: #3BB94C;
`;

const Tr = styled.tr`
    cursor : pointer;
`;

const Section = styled.section`
    width:50%;
    background-color:white;
    height:150px;
    text-align:center;
    border-radius : 30px;
`;

const Table = styled.table`
border-collapse: separate;
border-spacing: 10px;
width:100%;
`


export default function ListData({data, index}) {
    const [status, setStatus] = useState(data.status);

    const setoData = useStore((state)=>state.setData);


    const reserveBtnClick = (event) =>{
        event.stopPropagation();
        setStatus('seated');
    }

    const SeatedBtnClick = (event) =>{
        event.stopPropagation();
        setStatus('remove');
    }

    const onTableClick = () =>{
        setoData(data);
    }

  return (
    (status !== 'done' && status!=='remove') ? 
    ( 
        <>
    <Section>
        <Table onClick={onTableClick}>
            <tbody>
        <Tr>
            <th rowSpan="3">시간상태</th>
            <td>{data.customer.name} -{data.tables[0].name}</td>
            <td rowSpan="3">
                {status === 'reserved' ? (<ReserveBtn onClick={reserveBtnClick}>예약</ReserveBtn>) : (<SeatedBtn onClick={SeatedBtnClick}>퇴석</SeatedBtn>)}
            </td>
        </Tr>
        <Tr>
        <td>성인 {data.customer.adult}명 아이 {data.customer.child}</td>
        </Tr>
        <Tr>
            <td>
                {data.menus.map((item)=>{
                    return (item.name+ item.qty+'개 ');
                })}
            </td>
        </Tr>
        </tbody>
        </Table>
        
    </Section>
    <br/>
    </>
    ) : (<></>)
  )
}
