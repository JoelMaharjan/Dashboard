import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { rows } from '../../../data';
import { useState } from 'react';

function UserList(){
    const[data, setData]=useState(rows)

    const deleteHandler = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 160,
        },
        {
            field: 'designation',
            headerName: 'Designation',
            width: 180,
        },
        {
        field: 'salary',
        headerName: 'Salary',
        width: 90,
        },
        {
        field:'action',
        headerName: 'Action',
        width:150,
        renderCell: (params) => {
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                    <button className='btnEdit'>Edit</button>
                </Link>
                    <DeleteOutline className='btnDelete' onClick={()=>deleteHandler(params.row.id)}/>
                </>
            );
        },
        },
    ];
    


    return(
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default UserList;