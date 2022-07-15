import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Slider from '@mui/material/Slider';
import Tabledetails from './Tabledetails';
// import { PieChart, Pie, Label } from 'recharts';
// import TextField from '@mui/material/TextField';


function App() {
  

  const[pAmount , setpAmount] = useState(0);
  const[interest , setInterest] = useState(1);
  const[duration , setDuration] = useState(1);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration =360;

  const intr = interest/1200;
  const emi = duration?Math.round(pAmount * intr/(1-(Math.pow(1/(1+intr),duration)))) : 0;
  const totalAmt = duration*emi;
  var TotalAmountofCredit = Math.round((emi/intr)*(1-(Math.pow((1+intr),(-duration)))));
  const TotalAmountofInterest = Math.round(totalAmt-TotalAmountofCredit);
  

  const handlehangeLoan = (event, vAmt)=>{
    setpAmount(vAmt);
  }
  const handlehangeinterest = (event, vInt)=>{
    setInterest(vInt);
  }
  const handlehangeTenure = (event, vDur)=>{
    setDuration(vDur);
  }
  

  return (
    <>
    <div className="App">
      <div className="CalApp">
        <h2 className='CalHeading'><u>EMI Calculator</u></h2>
      </div>

      <div className='abc'>
      <strong>Loan Amount</strong>
      <Slider  aria-label="small" valueLabelDisplay="auto" 
      value={pAmount}
      onChange = {handlehangeLoan} 
      max = {maxValue}
      />
      </div>
      <div>
      <strong>Interest Rate %</strong>
      <Slider  aria-label="small" valueLabelDisplay="auto" 
      value={interest}
      onChange = {handlehangeinterest} 
      max = {intMax}
      />
      </div>

      <div>
      <strong>Teneure (Months)</strong>
      <Slider  aria-label="small" valueLabelDisplay="auto" 
      value={duration}
      onChange = {handlehangeTenure} 
      max = {maxDuration}
      />
      </div>

      <Table>
        <TableRow>
          <TableCell>
            <Tabledetails pAmount={pAmount} totalAmt ={totalAmt} interest = {interest} duration ={duration} emi= {emi} TotalAmountofInterest={TotalAmountofInterest} />
          </TableCell>

          
        </TableRow>
      </Table>


      
    </div>
    </>
  );
}

export default App;
