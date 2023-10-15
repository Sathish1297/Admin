import "./productList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ProductList() {

  const [data, setData] = useState(productRows); 
    
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'product', headerName: 'ID', width: 90 },
    { field: 'Product', headerName: 'User', width: 200, 
        renderCell: (params) => {
            return <div className='productListUser'>
            <img className='productListUserImg' src={params.row.img} alt='userListUserImg'/>
            {params.row.name}
            </div>
        } 
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 160,
        renderCell: (params) => {
            return (
                <div className='productListAction'>
                    <Link to ={'/product/' + params.row.id }>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="productListDelete" onClick={ () => handleDelete(params.row.id)} />
                </div>
            ) 
        }
    }
  ]

  return (
    <div className="productList">
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
