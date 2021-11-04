import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Reducers'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { Category } from '../../Redux/Reducers/DataReducer'
import _ from 'lodash'
import useWindowDimensions from '../../Hooks/useWindowDimensions'

export const EntryTable = () => {
  const selectedCategoryName = useSelector((state: RootState) => state.Data.SelectedCategory)
  const selectedCategory: Category = useSelector((state: RootState) => state.Data.Data[selectedCategoryName])
  const { height } = useWindowDimensions()

  console.log(selectedCategory)

  let rows: GridRowsProp = _.get(selectedCategory, 'entries', [])

  const columns: GridColDef[] = [
    { field: 'user', headerName: 'Username', width: 300 },
    { field: 'pass', headerName: 'Password', width: 500 },
    { field: 'note', headerName: 'Note', width: 500 }
  ]

  const logger = {
    debug: (str: string) => { console.log(str) },
    info: (str: string) => { console.log(str) },
    warn: (str: string) => { console.log(str) },
    error: (str: string) => { console.log(str) }
  }

  const copyCellData = async (cell: any) => {
    console.log('Single Click')
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
          <DataGrid rows={rows} columns={columns} logger={logger} onCellClick={copyCellData} onCellDoubleClick={editCellData} />
        </div>
      </div>
    </div>
  )
}