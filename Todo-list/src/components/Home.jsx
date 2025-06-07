import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

// function createData(userId, todo_desc, status) {
//   return { userId, todo_desc, status };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0,),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Eclair', 262, 16.0, ),
//   createData('Cupcake', 305, 3.7, ),
//   createData('Gingerbread', 356, 16.0, ),
// ];



const Home = () => {
 const [newTodo, setNewTodo] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then((res) => {
                console.log(res.data);
                setNewTodo(res.data.todos);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="center">Todo-Description</TableCell>
            <TableCell align="center">Completion Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {newTodo.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="center">{row.todo}</TableCell>
              <TableCell align="center">{row.completed.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home