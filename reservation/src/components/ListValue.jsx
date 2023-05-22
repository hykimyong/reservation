import React from 'react'
import styled from 'styled-components';
import { useStore } from '../common/store';

const Td = styled.td`
    width : 100px;
    color: gray;
    padding-left: 30px;
`;

const TdCenter = styled.td`
    text-align : center;
`;

const Table = styled.table`
    background-color: #FFFFFF;
    border-radius : 10px;
    width:500px;
    height:800px;
    border-collapse:collapse;
`;

export default function ListValue() {

    const data = useStore((state)=>state.data);

  return (
    <Table>
        <thead>
            <tr>
                <th colSpan={2}>
                    예약 정보
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <Td>예약 상태</Td>
                <TdCenter>{data.status === 'seated' ? "착석" : "예약중"}</TdCenter>
            </tr>
            <tr>
                <Td>예약 시간</Td>
                <TdCenter>{data.timeReserved ? data.timeReserved.substring(10,16) : "value"}</TdCenter>
            </tr>
            <tr>
                <Td>접수시간</Td>
                <TdCenter>{data.timeRegistered ? data.timeRegistered.substring(10,16) : "value"}</TdCenter>
            </tr>
            <tr>
            <th colSpan={2}>
            고객 정보
                </th>
                
            </tr>
            <tr>
                <Td>고객성명</Td>
                <TdCenter>{data.customer ? data.customer.name : "value"}</TdCenter>
            </tr>
            <tr>
                <Td>고객등급</Td>
                <TdCenter>{data.customer ? data.customer.level : "value"}</TdCenter>
            </tr>
            <tr>
                <Td>고객메모</Td>
                <TdCenter>{data.customer ? data.customer.memo : "value"}</TdCenter>
            </tr>
            <tr>
                <Td>요청사항</Td>
                <TdCenter>{data.customer ? data.customer.request : "value"}</TdCenter>
            </tr>
        </tbody>
    </Table>
  )
}
