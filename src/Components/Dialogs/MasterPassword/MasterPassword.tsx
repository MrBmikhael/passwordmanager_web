import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import GlobalActions from '../../../Redux/UI/Global/GlobalActions'
import UserActions from '../../../Redux/User/Auth/AuthActions'

export interface MasterPasswordProps {
  isOpen: boolean
}

interface CreateEntryState {
  password: string
}

const initialState = {
  password: ''
}

export const MasterPassword = (props: MasterPasswordProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateEntryState>(initialState)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    if (checkPassword(changeEvent.target.value)) {
      setValues({
        ...values,
        [changeEvent.target.id]: changeEvent.target.value
      })
    }
  }

  const checkPassword = (password: string): boolean => {
    return false
  }

  const handleClose = () => {
    if (values) {
      dispatch(UserActions.setMasterPassword(values.password))
      setValues(() => initialState)
      dispatch(GlobalActions.closeAllDialogs())
    }
  }

  const handleCreateAndClose = () => {
    handleClose()
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Enter Your Master Password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your master password
          </DialogContentText>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type='text'
              value={values.password}
              onChange={handleChange}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAndClose} autoFocus>
            Check
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}