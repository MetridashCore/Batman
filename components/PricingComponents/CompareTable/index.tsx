import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsCheck } from 'react-icons/bs';
export default function CompareTable() {
    function createData(
        name: string,
        calories: string,
        fat: string,
        carbs: string,
        
      ) {
        return { name, calories, fat, carbs };
      }

      const rows = [
        createData('Word Count', "10000", "Up To 500k", "Unlimited"),
        createData('Generative Model', "GPT3", "GPT4", "GPT4"),
        createData('AI Content Ideas', "Yes", "Yes", "Yes"),
        createData('Drafts',"Yes", "Yes", "Yes"),
        createData('Content Calendar',"Yes", "Yes", "Yes"),
        createData('Basic Analytics',"Yes", "Yes", "Yes"),
        createData('Creator Community',"Yes", "Yes", "Yes"),
        createData('Scheduler',"-", "Yes", "Yes"),
        createData('Advanced Analytics',"-", "Yes", "Yes"),
        createData('Insight Engine	',"-", "Yes", "Yes"),
        createData('Team Collaboration',"-", "-", "Yes"),
        createData('Custom Models',"-", "-", "Yes"),
        createData('Customized Reporting',"-", "-", "Yes"),
        createData('Custom Workflows',"-", "-", "Yes"),
        createData('Content Strategy Consultation',"-", "-", "Yes"),
      ];

  return (
    <div className='flex w-screen  bg-black px-20 py-20'>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: 'black' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: '#3d82f4', fontSize: '24px', padding: '25px'}}>Compare Plans</TableCell>
            <TableCell sx={{color: '#3d82f4', fontSize: '24px', padding: '25px'}} align="center">Starter
                
            </TableCell>
            <TableCell sx={{color: '#3d82f4', fontSize: '24px', padding: '25px'}} align="center">Pro</TableCell>
            <TableCell sx={{color: '#3d82f4', fontSize: '24px', padding: '25px'}} align="center">Teams</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: '#3d82f4', fontSize: '18px', padding: '16px'}}  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color: 'white'}} align="center">{row.calories}</TableCell>
              <TableCell sx={{color: 'white'}} align="center">{row.fat}</TableCell>
              <TableCell sx={{color: 'white'}} align="center">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
