import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import MoreIcon from '@mui/icons-material/MoreVert'
import Link from '@mui/material/Link'

interface EntryCardProps {
  name: string
  url: string
  user: string
  pass: string
  onContextMenuClick: (event: React.MouseEvent<HTMLElement>) => void
}

interface CardState {
  elevation: number
}

const initialState: CardState = {
  elevation: 1
}

function EntryCard(props: EntryCardProps): React.ReactElement {
  const [state, setState] = useState(initialState)

  const copyCellData = async (str: string): Promise<void> => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(str)
    }
  }

  const {
    url, name, user, pass, onContextMenuClick
  } = props

  const isUrl = (url && url !== 'http://' && url !== 'https://')

  const cardHeader = (): React.ReactElement => {
    if (isUrl) {
      return <Link underline="hover" variant="body2" href={url} target="_blank">{url}</Link>
    }
    return <span />
  }

  const updateElevation = (): void => {
    if (state.elevation === 7) {
      setState((pState) => ({ ...pState, elevation: 1 }))
    } else {
      setState((pState) => ({ ...pState, elevation: 7 }))
    }
  }

  let iconUrl = ''

  if (isUrl) {
    iconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url.replace('http://', '').replace('https://', '')}`
  } else {
    iconUrl = 'https://www.google.com/s2/favicons?sz=64&domain=nothing'
  }

  return (
    <Card elevation={state.elevation} onMouseEnter={updateElevation} onMouseLeave={updateElevation} sx={{ minWidth: '300px', maxWidth: '500px' }}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: '#fff' }} src={iconUrl} aria-label="recipe">
            {name.substring(0, 1)}
          </Avatar>
        )}
        action={(
          <span>
            <IconButton onClick={onContextMenuClick}>
              <MoreIcon />
            </IconButton>
          </span>
        )}
        title={<Typography noWrap maxWidth={200}>{name}</Typography>}
        subheader={cardHeader()}
      />
      <CardContent>
        <Typography noWrap gutterBottom variant="body2" color="text.secondary" onClick={() => copyCellData(user)}>
          Username:
          {' '}
          {user}
        </Typography>
        <Typography noWrap gutterBottom variant="body2" color="text.secondary" onClick={() => copyCellData(pass)}>
          Password:
          {' '}
          {pass}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EntryCard
