import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import { checkPasswordStrength, generatePassword } from '../../../Security/PasswordGenerator'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import GlobalActions from '../../../Redux/UI/Global/GlobalActions'
import DataActions from '../../../Redux/Data/DataActions'
import { RootState } from '../../../Redux/store'

export interface CreateEntryProps {
  isOpen: boolean
}

interface CreateEntryState {
  username: string
  password: string
  passwordStrength: { lowercase: boolean, uppercase: boolean, number: boolean, symbol: boolean, value: string }
}

const initialState = { username: '', password: '', passwordStrength: { lowercase: false, uppercase: false, number: false, symbol: false, value: '' } }

export const CreateEntry = (props: CreateEntryProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateEntryState>(initialState)
  const currentCategory = useSelector((state: RootState) => state.Data.SelectedCategory)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [changeEvent.target.id]: changeEvent.target.value
    })

    if (changeEvent.target.id === 'password') {
      checkPassword(changeEvent.target.value)
    }
  }

  const checkPassword = (password: string) => {
    const pwStrength = checkPasswordStrength(password)
    const pwst = { ...initialState.passwordStrength }

    pwStrength.contains.forEach((value) => {
      pwst[value] = true
    })

    pwst.value = pwStrength.value
    setValues((state) => ({
      ...state,
      passwordStrength: pwst
    }))
  }

  const handleClose = () => {
    setValues(() => initialState)
    dispatch(GlobalActions.closeAllDialogs())
  }

  const handleCreateAndClose = () => {
    if (values.username) {
      dispatch(DataActions.EntryActions.createNewEntry(currentCategory, values.username, values.password))
    }
    handleClose()
  }

  const generatePasswd = () => {
    const generatedPW = generatePassword()
    setValues((prevState: CreateEntryState) => ({
      ...prevState,
      password: generatedPW
    }))
    checkPassword(generatedPW)
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
                  <Typography align='right' minWidth={'5ch'}>{values.password.length}</Typography>
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
          <Box>
            <FormControlLabel disabled control={<Checkbox checked={values.passwordStrength.lowercase} />} label="Lowercase" />
            <FormControlLabel disabled control={<Checkbox checked={values.passwordStrength.uppercase} />} label="Uppercase" />
            <FormControlLabel disabled control={<Checkbox checked={values.passwordStrength.number} />} label="Number" />
            <FormControlLabel disabled control={<Checkbox checked={values.passwordStrength.symbol} />} label="Symbol" />
          </Box>
          <Box>
            <Typography>
              {values.passwordStrength.value}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCreateAndClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}