import React from 'react'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import TextField from '@mui/material/TextField';

const Tabledetails = (props) => {
  return (
    <Table style={{width:'100%', border:'2px solid #ccc'}} arial-label ="simple-table">
        <TableHead>
            <TableRow>
                <TableCell className='EtableCellText'><strong>Loan Amount</strong></TableCell>
                {/* <TableCell><input type='number' value={props.pAmount} onChange={(e) => props.setpAmount(e.target.value)}/></TableCell> */}
                <TableCell><TextField id="outlined-basic" label="Loan Amount" variant="outlined" value={props.pAmount} onChange={(e) => props.setpAmount(e.target.value)} /></TableCell>
                <TableCell className='EtableCellVal'><strong>₹</strong>{props.pAmount}</TableCell>
                
            </TableRow>
            <TableRow>
                <TableCell className='EtableCellText'><strong>Interest Rate %</strong></TableCell>
                <TableCell><TextField id="outlined-basic" label="Interest Rate %" variant="outlined" value={props.interest}/></TableCell>
                <TableCell className='EtableCellVal'>{props.interest}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='EtableCellText'><strong>Teneure (Months)</strong></TableCell>
                <TableCell><TextField id="outlined-basic" label="Teneure (Months)" variant="outlined" value={props.duration}/></TableCell>
                <TableCell className='EtableCellVal'>{props.duration}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='EtableCellText'><strong>EMI (Monthly)</strong></TableCell>
                <TableCell></TableCell>
                <TableCell className='EtableCellVal'><strong>₹</strong>{props.emi}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='EtableCellText'><strong>Total Interest</strong></TableCell>
                <TableCell></TableCell>
                <TableCell className='EtableCellVal'><strong>₹</strong>{props.TotalAmountofInterest}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='EtableCellText'><strong>Total Payment</strong><br />(Loan Amount + Interest)</TableCell>
                <TableCell></TableCell>
                <TableCell className='EtableCellVal'><strong>₹</strong>{props.totalAmt}</TableCell>
            </TableRow>
        </TableHead>
    </Table>
  )
}

export default Tabledetails