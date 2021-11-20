import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import red from '@mui/material/colors/red'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const copyCellData = async (str: string) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(str)
  }
}

interface EntryCardProps {
  name: string
  url: string
  user: string
  pass: string
}

const EntryCard = (props: EntryCardProps) => {
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name.substring(0, 1)}
          </Avatar>
        }
        title={props.name}
        subheader={props.url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" onClick={() => copyCellData(props.user)}>
          Username: {props.user}
        </Typography>
        <Typography variant="body2" color="text.secondary" onClick={() => copyCellData(props.pass)}>
          Password: {props.pass}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit entry">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete entry">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default EntryCard
