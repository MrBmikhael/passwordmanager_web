import React, { ChangeEvent, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { UIActions } from '../../Redux/Actions/UIActions'
import IconButton from '@mui/material/IconButton'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import { generatePassword } from '../../Security/PasswordGenerator'

export interface CreateEntryProps {
  isOpen: boolean
}

interface CreateEntryState {
  username: string
  password: string
}

const initialState = { username: '', password: '' }

export const CreateEntry = (props: CreateEntryProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateEntryState>(initialState)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [changeEvent.target.id]: changeEvent.target.value
    })
  }

  const handleClose = () => {
    setValues(() => initialState)
    dispatch(UIActions.closeAllDialogs())
  }

  const generatePasswd = () => {
    setValues((prevState: CreateEntryState) => ({
      ...prevState,
      password: generatePassword()
    }))
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
          {"Create A New Entry"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new entry
          </DialogContentText>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              type='text'
              value={values.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type='text'
              value={values.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="generate a new password"
                    onClick={generatePasswd}
                  >
                    <AutorenewIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}