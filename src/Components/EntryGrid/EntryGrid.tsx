import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { RootState } from '../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import EntryCard from '../EntryCard/EntryCard'
import { Pagination, Stack, Typography } from '@mui/material'
import EntryGridActions from '../../Redux/Store/UI/EntryGrid/EntryGridActions'

const EntryGrid = () => {
  const dispatch = useDispatch()
  const entrygridData = useSelector((state: RootState) => state.UI.EntryGrid)

  const cards: React.ReactNode[] = []
  Object.keys(entrygridData.items).forEach((key) => {
    const entry = entrygridData.items[key]
    cards.push(
      <Grid item xs key={entry.id}>
        <EntryCard name={entry.name} url={entry.url} user={entry.user} pass={entry.pass} />
      </Grid>
    )
  })

  const pageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(EntryGridActions.entryGridLoadData(page, entrygridData.keyword))
  }

  let pages = <></>

  if (entrygridData.total_pages > 0) {
    pages = <Pagination sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} shape="rounded" variant="outlined" color="primary" showFirstButton showLastButton count={entrygridData.total_pages} page={entrygridData.current_page} boundaryCount={2} onChange={pageChange} />
  }

  if (cards.length === 0) {
    return <Typography variant="body1" color={'primary'}>No passwords in this category</Typography>
  }

  return (

    <Stack spacing={4} >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {cards}
        </Grid>
      </Box>

      {pages}

    </Stack>
  )
}

export default EntryGrid
