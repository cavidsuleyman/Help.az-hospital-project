import React,{useState} from 'react';
import "./style.css";
import {Table } from 'antd';
import { careerData } from '../../fakedata';

const columns = [
    {
        title: '№',
        dataIndex: 'id',
      },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'How to apply?',
      dataIndex: 'apply',
    },
  ];




const CareerSide = () => {

    return (
      <>

        <Table  
        columns={columns} 
        dataSource={careerData}  
        pagination={{position: 'center'}}
        />

      </>
    );
}

export default CareerSide