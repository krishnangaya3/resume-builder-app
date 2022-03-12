import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../../dummyData";
import { Link ,BrowserRouter} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

export default function UserList() {
  // const [data, setData] = useState(userRows);
  var [data,setData] = useState([]);

  async function handleDelete(id)  {
    console.log("hi")
    // setData(data.filter((item) => item.email !== id));

    await axios.post(`http://localhost:5000/deleteuser/${id}`).then(
        (response)=>{
            console.log(response);
            // setData(data = response.data);
            
        }
    )
  };
  
  const columns = [
    // { field: "id", headerName: "ID", width: 150  },
    {
      field: "username",
      headerName: "Username",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 350 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    // },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 180,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
         
         {/* <Link to={"/user/" + params.row.email}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.email)}
            />
          </>
        );
      },
    },
  ];

  async function dataLoading  (){
    
   
    await axios.get("http://localhost:5000/userslist").then(
        (response)=>{
            // console.log(response);
            setData(data = response.data);
            
        }
    )
}

  useEffect(
    ()=>{
        dataLoading();
        });

  return (
    <div className="userList">
      {/* <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        style={{color:"rgb(228, 224, 224)",border:"none"}}
      /> */}
       <div className="userListUser">
       <Table>
             <TableHead>
                 <TableRow>
                     {/* <TableCell>ID</TableCell>
                     <TableCell>TITLE</TableCell>
                     <TableCell>STATUS</TableCell> */}
                     <TableCell className="head">SLNo:</TableCell>
                     <TableCell className="head">Username</TableCell>
                     <TableCell className="head">Email</TableCell>
                     <TableCell className="head">Action</TableCell>
                    
                 </TableRow>
             </TableHead>
             <TableBody>
                 {data.map(
                     (value,index)=>{
                         return  <TableRow key={index} >
                                     <TableCell className="head" key={index._id} >{index+1}</TableCell>
                                     <TableCell className="head" >{value.username}</TableCell>
                                     <TableCell className="head">{value.email}</TableCell>
                                     <TableCell className="head">
                                     <DeleteOutline
                                                className="userListDelete"
                                                onClick={() => handleDelete(value._id)}
                                              />
                                       </TableCell>
                                     
                                              
                                      </TableRow>
                     }
                 )}
                
             </TableBody>
         </Table>
         </div>
      
    </div>
  );
}