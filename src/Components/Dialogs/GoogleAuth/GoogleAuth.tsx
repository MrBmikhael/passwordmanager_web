import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { LoginWithGoogle } from '../../LoginWithGoogle/LoginWithGoogle'
import { RootState } from '../../../Redux'

interface GoogleAuthProps {
  isOpen: boolean
}

export const GoogleAuth = (props: GoogleAuthProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const auth = useSelector((state: RootState) => state.User.Auth.GoogleToken)

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={!Boolean(auth)} >
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoginWithGoogle />
        </DialogContent>
      </Dialog>
    </div>
  )
}