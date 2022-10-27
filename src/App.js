import Header from './components/HeaderComponent';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import ReportComponent from './components/ReportComponent';

import './App.css';
import {useState, useEffect} from "react";
import DataContext from './data/DataContext';
import { Route, Routes } from 'react-router-dom';


function App() {

  
  const initState = [
    
      {id:1,title:"food",amount: -200},
      {id:2,title:"wage",amount: 11200},
      {id:3,title:"sell",amount: 5200},
      {id:4,title:"ticket",amount: -1200},
    
    ]


  const [items,setItem] = useState(initState)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    });
  }

  useEffect(() => {

  const amounts = items.map(items=>items.amount)
  const income = amounts.filter(e=>e>0).reduce((total,e)=>total+=e,0)
  const expense = (amounts.filter(e=>e<0).reduce((total,e)=>total+=e,0))*-1
  setReportIncome(income.toFixed(2))
  setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])




  return (
    <DataContext.Provider value={{income : reportIncome,expense : reportExpense}}>
      <div className='container'>
          
            <Header/>
            <Routes>
              <Route path='/'element={ <ReportComponent/> } />
              <Route path='/insert'element={<> <FormComponent onAddItem={onAddNewItem}/> <Transaction items = {items}/> </>} />
            </Routes>
            
            
              
  
      </div>
    </DataContext.Provider>
  );
}

export default App;
