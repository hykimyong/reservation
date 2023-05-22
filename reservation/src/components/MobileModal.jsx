import React from "react";
// import { Modal, Text, View } from "react-native";
import {Modal, StyleSheet, Pressable, View} from 'react-native';
import { useStore } from '../common/store';
import styled from 'styled-components';

const Td = styled.td`
    width : 70px;
    color: gray;
`;

const Td2 = styled.td`
    text-align : center;
`;

const Table = styled.table`
    background-color: white;
    border-radius : 10px;
    width:80%;
    height:80%;
    border-collapse:collapse;
`;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });

export default function MobileModal() {
    const [isModalVisible, setModalVisible, data] = useStore((state)=>[
        state.mobileClick,
        state.setMobileClick,
        state.data
    ]);
    
    return(
      <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Table>
            <thead>
                <tr>
                    <th colSpan={2}>
                        예약 정보
                    </th>
                    <th style={{width : "50px"}}><Pressable onPress={() => setModalVisible(false)}>
                <button>닫기</button>
                </Pressable></th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <Td>예약 상태</Td>
                    <Td2>{data.status === 'seated' ? "착석" : "예약중"}</Td2>
                </tr>
                <tr>
                    <Td>예약 시간</Td>
                    <Td2>{data.timeReserved ? data.timeReserved.substring(10,16) : "value"}</Td2>
                </tr>
                <tr>
                    <Td>접수시간</Td>
                    <Td2>{data.timeRegistered ? data.timeRegistered.substring(10,16) : "value"}</Td2>
                </tr>
                <tr>
                    <th colSpan={2}>고객 정보</th>
                </tr>
                <tr>
                    <Td>고객성명</Td>
                    <Td2>{data.customer ? data.customer.name : "value"}</Td2>
                </tr>
                <tr>
                    <Td>고객등급</Td>
                    <Td2>{data.customer ? data.customer.level : "value"}</Td2>
                </tr>
                <tr>
                    <Td>고객메모</Td>
                    <Td2>{data.customer ? data.customer.memo : "value"}</Td2>
                </tr>
                <tr>
                    <Td>요청사항</Td>
                    <Td2>{data.customer ? data.customer.request : "value"}</Td2>
                </tr>
            </tbody>
            </Table>
          </View>
        </View>
      </Modal>
    </View>
    )
    
}