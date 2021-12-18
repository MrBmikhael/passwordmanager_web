import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux'
import { DataGrid, GridRowsProp, GridColDef, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import { Category } from '../../Redux/Store/Data/DataReducer'
import useWindowDimensions from '../../Hooks/useWindowDimensions'

export const EntryTable = () => {
  const selectedCategoryName = useSelector((state: RootState) => state.Data.SelectedCategory)
  const selectedCategory: Category = useSelector((state: RootState) => state.Data.Passwords[selectedCategoryName])
  const { height } = useWindowDimensions()

  const data = Object.values(selectedCategory.entries)

  data.forEach((entry: any) => {
    entry['actions'] = (
      <p>Test</p>
    )
  })

  const rows: GridRowsProp = Object.values(selectedCategory.entries)

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 500 },
    { field: 'user', headerName: 'Username', width: 500 },
    { field: 'pass', headerName: 'Password', width: 500 },
    { field: 'url', headerName: 'URL', width: 500 }
  ]

  const copyCellData = async (cell: any) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(cell.value)
    }
  }

  const editCellData = () => {
    console.log('Double Click')
  }

  return (
    <div style={{ height: (height - (height / 3)), width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid pagination pageSize={20} rows={rows} editMode='row' columns={columns} onCellClick={copyCellData} onCellDoubleClick={editCellData} components={{
            Toolbar: () => <GridToolbarContainer><GridToolbarExport /></GridToolbarContainer>
          }} />
        </div>
      </div>
    </div>
  )
}