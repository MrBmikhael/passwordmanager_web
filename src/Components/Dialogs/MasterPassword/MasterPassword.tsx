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
import GlobalActions from '../../../Redux/Store/UI/Global/GlobalActions'
import UserActions from '../../../Redux/Store/User/Auth/AuthActions'

export interface MasterPasswordProps {
  isOpen: boolean
}

interface CreateEntryState {
  password: string
}

const initialState = {
  password: ''
}

export function MasterPassword(props: MasterPasswordProps): React.ReactElement {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateEntryState>(initialState)

  const checkPassword = (password: string): boolean => (password !== '')

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    if (checkPassword(changeEvent.target.value)) {
      setValues({
        ...values,
        [changeEvent.target.id]: changeEvent.target.value
      })
    }
  }

  const handleClose = (): void => {
    if (values) {
      dispatch(UserActions.setMasterPassword(values.password))
      setValues(() => initialState)
      dispatch(GlobalActions.closeAllDialogs())
    }
  }

  const handleCreateAndClose = (): void => {
    handleClose()
  }

  const { isOpen } = props

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Enter Your Master Password
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your master password
          </DialogContentText>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              autoFocus
              aria-autocomplete="none"
              autoComplete="new-password"
              value={values.password}
              onChange={handleChange}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAndClose} autoFocus>
            Unlock
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
