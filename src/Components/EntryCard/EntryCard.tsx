import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import red from '@mui/material/colors/red'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Tooltip from '@mui/material/Tooltip'
import MoreIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

interface EntryCardProps {
  name: string
  url: string
  user: string
  pass: string
}

const EntryCard = (props: EntryCardProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const copyCellData = async (str: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(str)
    }
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const cardAction = () => {
    const ele = [
      <Tooltip title="More" arrow>
        <IconButton onClick={handleMenu}>
          <MoreIcon />
        </IconButton></Tooltip>,
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Delete
        </MenuItem>
      </Menu>
    ]
    if (props.url && props.url !== 'http://') {
      ele.unshift(
        <Tooltip title="Open" arrow>
          <IconButton aria-label="open in a new window" onClick={() => window.open(props.url)}>
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
      )
    }

    return <>{ele.map((el) => el)}</>
  }

  const cardHeader = () => {
    if (props.url && props.url !== 'http://') {
      return <Typography noWrap variant='body2' color={'text.secondary'}>{props.url}</Typography>
    }
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.name.substring(0, 1)}
          </Avatar>
        }
        action={cardAction()}
        title={<Typography noWrap>{props.name}</Typography>}
        subheader={cardHeader()}
      />
      <CardContent>
        <Typography noWrap gutterBottom variant="body2" color="text.secondary" onClick={() => copyCellData(props.user)}>
          Username: {props.user}
        </Typography>
        <Typography noWrap gutterBottom variant="body2" color="text.secondary" onClick={() => copyCellData(props.pass)}>
          Password: {props.pass}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EntryCard
