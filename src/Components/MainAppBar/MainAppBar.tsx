import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
// import GoogleIcon from '@mui/icons-material/Google'
// import LogoutIcon from '@mui/icons-material/Logout'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import Avatar from '@mui/material/Avatar'
import { LoginWithGoogle, Logout } from '../LoginWithGoogle/LoginWithGoogle'
import { LinearProgressBar } from '../LinearProgressBar/LinearProgressBar'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export const MainAppBar = () => {
  const state = useSelector((state: RootState) => state.User.google_token)

  let userData = <>
    <LoginWithGoogle />
  </>

  if (state) {
    userData = <>
      <Logout />
      <IconButton size="large" edge="end" color="inherit">
        <Avatar alt={state.profileObj.name} src={state.profileObj.imageUrl} sx={{ width: 24, height: 24 }} />
      </IconButton>
    </>
  }

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Password Manager
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {userData}
          </Box>
        </Toolbar>
        <LinearProgressBar />
      </AppBar>
    </Box>
  )
}