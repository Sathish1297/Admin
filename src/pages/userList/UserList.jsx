import './userList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserList() {

    const [data, setData] = useState(userRows); 
    
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, 
            renderCell: (params) => {
                return <div className='userListUser'>
                <img className='userListUserImg' src={params.row.avatar} alt='userListUserImg'/>
                {params.row.username}
                </div>
            } 
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className='userListAction'>
                        <Link to ={'/user/' + params.row.id }>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={ () => handleDelete(params.row.id)} />
                    </div>
                ) 
            }
        }
    ]


    return (
        <div className='userList'>
            <DataGrid
            rows={data}
            disableRowSelectionOnClick
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 8 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
        </div>
    )
}
