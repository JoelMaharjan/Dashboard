import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userData } from '../../../UserData';

function UserList(){
    const[data,setData]=useState(userData)

    const deleteHandler = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 100 },
        { field: 'lastName', headerName: 'Last name', width: 100 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 60,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 220,
        },
        {
            field: 'designation',
            headerName: 'Designation',
            width: 200,
        },
        {
        field: 'salary',
        headerName: 'Salary',
        width: 90,
        },
        {
        field:'action',
        headerName: 'Action',
        width:100,
        
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
            <div className='userHeading'>
                <h2> User Lists</h2>
                <input type= "text" placeholder='Search...' className='search'  />
            </div>
                <DataGrid 
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />

        </div>
    )}   

export default UserList;