import React, { useState } from 'react'
import styled from 'styled-components';
import { useStore } from '../common/store';

const SeatedBtn = styled.button`
    color: white;
    background-color: #162149;
    width: 65px;
    height: 35px;
    border-radius: 5px;
`;

const ReservedBtn =styled.button`
    color: #162149;
    background-color: white;
    width: 65px;
    height: 35px;
    border-radius: 5px;
`;

const SeatedText = styled.span`
    color: #162149;
`;
const ReserveText = styled.span`
    color: #3BB94C;
`;

const Tr = styled.tr`
    cursor : pointer;
`;

const Th = styled.th`
    width:100px;
`;

const TdRight = styled.td`
    text-aligh : right;
    width: 70px;
`;

const Section = styled.section`
    width:55%;
    background-color:white;
    height:150px;
    display:flex;
    align-items:center;
    border-radius : 30px;
`;

const Table = styled.table`
border-collapse: separate;
border-spacing: 10px;
width:100%;
`


export default function ListData({data}) {
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
            <Th rowSpan="3">시간<br/>상태</Th>
            <td>{data.customer.name} -{data.tables[0].name}</td>
            <TdRight rowSpan="3">
                {status === 'reserved' ? (<ReservedBtn onClick={reserveBtnClick}>착석</ReservedBtn>) : (<SeatedBtn onClick={SeatedBtnClick}>퇴석</SeatedBtn>)}
            </TdRight>
        </Tr>
        <Tr>
        <td>성인 {data.customer.adult}명 아이 {data.customer.child}  {status === 'reserved' ? <ReserveText>예약</ReserveText> : <SeatedText>착석 중</SeatedText>}</td>
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
