import React from 'react'
import styled from 'styled-components';
import { useStore } from '../common/store';

const Td = styled.td`
    width : 100px;
    color: gray;
    padding-left: 30px;
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
                    <h3>예약 정보</h3>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <Td>예약 상태</Td>
                <td>{data.status === 'seated' ? "착석" : "예약중"}</td>
            </tr>
            <tr>
                <Td>예약 시간</Td>
                <td>{data.timeReserved ? data.timeReserved.substring(10,16) : "value"}</td>
            </tr>
            <tr>
                <Td>접수시간</Td>
                <td>{data.timeRegistered ? data.timeRegistered.substring(10,16) : "value"}</td>
            </tr>
            <tr>
            <th colSpan={2}>
                <h3>고객 정보</h3>
            </th>
            </tr>
            <tr>
                <Td>고객성명</Td>
                <td>{data.customer ? data.customer.name : "value"}</td>
            </tr>
            <tr>
                <Td>고객등급</Td>
                <td>{data.customer ? data.customer.level : "value"}</td>
            </tr>
            <tr>
                <Td>고객메모</Td>
                <td>{data.customer ? data.customer.memo : "value"}</td>
            </tr>
            <tr>
                <Td>요청사항</Td>
                <td>{data.customer ? data.customer.request : "value"}</td>
            </tr>
        </tbody>
    </Table>
  )
}
