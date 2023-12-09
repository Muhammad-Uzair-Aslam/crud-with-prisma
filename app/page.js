// pages/index.js
import React from 'react';
import Header from './components/header/Header';
import Button from './components/button/Button';
import BillList from './components/billList/BillList';
import prisma from '@/config/prisma';

// import Header from './components/header/Header'; // Import the Header component
// import BillList from './components/billList/BillList';
// import CreateBillModal from './components/createBillModal/CreateBillModal';
// import Button from './components/button/Button';
// import { prisma } from '../config/prisma';

// {
//   units:24,
//   consumerNumber:12,
//   address:"Saylani House",
//   status:"paid",
//   date: new Date()
// }

const fetchBills=async()=>{
  try {
    const bills=await prisma.bill.findMany()
  return bills
  } catch (error) {
    console.log("error",error)
  }
  
}

const Home = async () => {
   const bills = await fetchBills()

  return (
    <div>
      {/* <Header /> 
      <Button/>
      <BillList bills={bills} />
  
      */}
    <Header/>
    <Button/>
    <BillList bills={bills}/>
    </div>
  );
};

export default Home;

