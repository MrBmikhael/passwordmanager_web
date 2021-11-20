import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'
import EntryCard from '../EntryCard/EntryCard'

const EntryGrid = () => {
  const passWordData = useSelector((state: RootState) => state.Data)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {
          Object.keys(passWordData.Passwords[passWordData.SelectedCategory].entries).map((key: string) => {
            const entry = passWordData.Passwords[passWordData.SelectedCategory].entries[key]
            return (
              <Grid item xs>
                <EntryCard name={entry.id} url={entry.url} user={entry.user} pass={entry.pass} />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default EntryGrid