import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Stack, Typography } from '@mui/material'
import { RootState } from '../../Redux'
import EntryCard from '../EntryCard/EntryCard'
import EntryGridActions from '../../Redux/Store/UI/EntryGrid/EntryGridActions'

function EntryGrid(): React.ReactElement {
  const dispatch = useDispatch()
  const entrygridData = useSelector((state: RootState) => state.UI.EntryGrid)

  const cards: React.ReactNode[] = []
  Object.keys(entrygridData.items).forEach((key) => {
    const entry = entrygridData.items[key]
    cards.push(
      <Grid item xs key={entry.id}>
        <EntryCard name={entry.name} url={entry.url.toString()} user={entry.user} pass={entry.pass} />
      </Grid>
    )
  })

  const pageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    dispatch(EntryGridActions.entryGridLoadData(page, entrygridData.keyword))
  }

  let pages = <span />

  if (entrygridData.totalPages > 0) {
    pages = (
      <Pagination
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        shape="rounded"
        variant="outlined"
        color="primary"
        showFirstButton
        showLastButton
        count={entrygridData.totalPages}
        page={entrygridData.currentPage}
        boundaryCount={2}
        onChange={pageChange}
      />
    )
  }

  if (cards.length === 0) {
    return <Typography variant="body1" color="primary">No passwords in this category</Typography>
  }

  return (

    <Stack spacing={4}>
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
