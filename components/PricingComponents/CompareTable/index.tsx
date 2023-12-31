import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsCheck } from 'react-icons/bs';
import checkIcon from '../../../public/icons/check.png'
import Link from 'next/link';
export default function CompareTable() {
    function createData(
        name: string,
        calories: any,
        fat: any,
        carbs: any,
        
      ) {
        return { name, calories, fat, carbs };
      }

      const rows = [
        createData('Word Count', "10000", "Up To 500k", "Unlimited"),
        createData('Generative Model', "GPT3", "GPT4", "GPT4"),
        createData('AI Content Ideas', "☑️", "☑️", "☑️"),
        createData('Drafts',"☑️", "☑️", "☑️"),
        createData('Content Calendar',"☑️", "☑️", "☑️"),
        createData('Basic Analytics',"☑️", "☑️", "☑️"),
        createData('Creator Community',"☑️", "☑️", "☑️"),
        createData('Scheduler',"-", "☑️", "☑️"),
        createData('Advanced Analytics',"-", "☑️", "☑️"),
        createData('Insight Engine	',"-", "☑️", "☑️"),
        createData('Team Collaboration',"-", "-", "☑️"),
        createData('Custom Models',"-", "-", "☑️"),
        createData('Customized Reporting',"-", "-", "☑️"),
        createData('Custom Workflows',"-", "-", "☑️"),
        createData('Content Strategy Consultation',"-", "-", "☑️"),
      ];

  return (
    <div className='flex w-screen  bg-black md:px-20 md:py-20 px-0 py-0'>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: 'black' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: 'white', fontSize: '24px', padding: '25px', fontWeight: 'bold'}}>
            <h1 className='title-style'> Compare Plans</h1>
            
            </TableCell>
            <TableCell sx={{color: 'white', fontSize: '24px'}} align="center">
            
            <div className='flex w-full py-2  rounded-lg items-center justify-center gap-y-2 flex-col'>
                <h1 className='title-style '>Starter</h1>
                <Link href={'/auth/signup'} className='w-full h-4 flex cursor-pointer bg-white rounded-lg  py-4  items-center justify-center'>
                    <h1 className='text-sm text-black'>Get Started</h1>
                </Link>
            </div>
            </TableCell>
           
            <TableCell sx={{color: 'white', fontSize: '24px' }} align="center">
            <div className='flex w-full py-2  rounded-lg items-center justify-center gap-y-2 flex-col'>
                <h1 className='title-style'> Pro</h1>
                <Link href={'/auth/signup'} className='w-full h-4 flex cursor-pointer bg-white rounded-lg  py-4  items-center justify-center'>
                    <h1 className='text-sm text-black'>Get Started</h1>
                </Link>
            </div>
            </TableCell>
            <TableCell sx={{color: 'white', fontSize: '24px' }} align="center">
            <div className='flex w-full py-2  rounded-lg items-center justify-center gap-y-2 flex-col'>
                <h1 className='title-style'> Teams</h1>
                <Link href={'/auth/signup'} className='w-full h-4 flex cursor-pointer bg-white rounded-lg  py-4  items-center justify-center'>
                    <h1 className='text-sm text-black'>Get Started</h1>
                </Link>
            </div>
            </TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
             
              sx={{ '&:last-child td, &:last-child th': { border: 0.2 } }}
            >
              <TableCell sx={{color: 'white', fontSize: '18px', padding: '16px', borderWidth: '0.5px'}}  component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell sx={{color: 'white', alignSelf: 'center', fontSize: '18px', borderWidth: '0.5px'}} align="center">{row.calories}</TableCell>
              <TableCell sx={{color: 'white',  alignSelf: 'center', fontSize: '18px', borderWidth: '0.5px'}} align="center">{row.fat}</TableCell>
              <TableCell sx={{color: 'white',  alignSelf: 'center',  fontSize: '18px', borderWidth: '0.5px'}} align="center">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
