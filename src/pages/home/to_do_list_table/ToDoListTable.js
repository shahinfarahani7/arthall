import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import api from '../../../service/api';
import { useEffect, useState } from 'react';



const ToDoListTable = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        getTodoList()
    }, [])

    const getTodoList = async () => {
        try {
            let res = await api.getTodoList();
            setTodoList(res.data);
        } catch (err) {

        }
    }

    return (
        <div>
            <TableContainer>
                <Table aria-label="simple table" sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none",
                        color: 'white'
                    },
                    borderCollapse: 'separate',
                    borderSpacing: '0px 6px',
                }}>
                    <TableHead>
                        <TableRow >
                        <TableCell align="center" >عنوان</TableCell>
                            <TableCell align="center">توضیح کامل</TableCell>
                            <TableCell align="center">تاریخ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.map((row, index) => (
                            <TableRow
                                sx={{ backgroundColor: '#31A2A9' }}
                                key={index}
                            >
                                <TableCell align="center">
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">{row.description}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ToDoListTable;