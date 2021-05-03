import React, {useState} from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@material-ui/data-grid';
import {server_calls} from '../../api';
import {useGetData} from '../../custom-hooks';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import {HeroForm} from '../../components/HeroForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 450 },
    {
      field: 'comics_appeared_in',
      headerName: '# of Comic Appearances',
      type: 'number',
      width: 225,
    },
    { field: 'super_power', headerName: 'Super Power', width: 450},
];

interface gridData{
  data:{
    id?: string;
  }
}

export const DataTable =  () => {
  let {heroData, getData} = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Heroes In Collection</h2>
          <DataGrid rows={heroData} columns={columns} pageSize={9} checkboxSelection onRowSelected = { setData } />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Hero</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Hero</DialogContentText>
              <HeroForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
        </div>
      );
}