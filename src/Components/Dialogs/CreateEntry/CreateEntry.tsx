import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import { FormHelperText } from '@mui/material'
import _ from 'lodash'
import GlobalActions from '../../../Redux/Store/UI/Global/GlobalActions'
import DataActions from '../../../Redux/Store/Data/DataActions'
import Store, { RootState } from '../../../Redux'
import { checkPasswordStrength, generatePassword } from '../../../Security/PasswordGenerator'
import EntryGridActions from '../../../Redux/Store/UI/EntryGrid/EntryGridActions'

interface CreateEntryState {
  username: string
  password: string
  url: string
  name: string
  passwordStrength: { lowercase: boolean, uppercase: boolean, number: boolean, symbol: boolean, value: string }
}

export interface CreateEntryProps {
  isOpen: boolean
  values?: Omit<CreateEntryState, 'passwordStrength'>
}

export function CreateEntry(props: CreateEntryProps): React.ReactElement {
  const theme = useTheme()
  const masterPassword = useSelector((state: RootState) => state.User.Auth.masterPassword)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()

  let initialState: CreateEntryState = {
    username: '',
    password: '',
    url: 'http://',
    name: '',
    passwordStrength: {
      lowercase: false,
      uppercase: false,
      number: false,
      symbol: false,
      value: 'Too weak'
    }
  }

  const { values } = props

  if (values) {
    initialState = { ...initialState, ...values }
  }

  const [formValues, setValues] = useState<CreateEntryState>(initialState)
  const currentCategory = useSelector((state: RootState) => state.Data.SelectedCategory)
  const pwGenerationSettings = useSelector((state: RootState) => state.User.Settings.passwordGenerator)

  const checkPassword = (password: string): void => {
    const pwStrength = checkPasswordStrength(password)
    const pwst = { ...initialState.passwordStrength }

    pwStrength.contains.forEach((value): void => {
      _.set(pwst, value, true)
    })

    pwst.value = pwStrength.value
    setValues((state) => ({
      ...state,
      passwordStrength: pwst
    }))
  }

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...formValues,
      [changeEvent.target.id]: changeEvent.target.value
    })

    if (changeEvent.target.id === 'password') {
      checkPassword(changeEvent.target.value)
    }
  }

  const handleClose = (): void => {
    setValues(() => initialState)
    const currentStore = Store.getState().UI.EntryGrid
    dispatch(GlobalActions.closeAllDialogs())
    dispatch(EntryGridActions.entryGridLoadData(currentStore.currentPage, currentStore.keyword))
  }

  const handleCreateAndClose = (): void => {
    if (formValues.username) {
      dispatch(DataActions.EntryActions.createNewPasswordEntry(currentCategory, formValues.username, formValues.password, formValues.url, formValues.name, masterPassword))
    }
    handleClose()
  }

  const generatePasswd = (): void => {
    const generatedPW = generatePassword(pwGenerationSettings)
    setValues((prevState: CreateEntryState) => ({
      ...prevState,
      password: generatedPW
    }))
    checkPassword(generatedPW)
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
          Create A New Entry
        </DialogTitle>

        <DialogContent>
          <FormControl variant="outlined" fullWidth margin="dense">
            <TextField
              required
              label="Name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth margin="dense">
            <TextField
              required
              label="Username"
              id="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth margin="dense" required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              label="Password"
              id="password"
              type="text"
              value={formValues.password}
              onChange={handleChange}
              endAdornment={(
                <InputAdornment position="end">
                  <Typography align="right" minWidth="5ch">{formValues.password.length}</Typography>
                  <IconButton
                    aria-label="generate a new password"
                    onClick={generatePasswd}
                  >
                    <AutorenewIcon />
                  </IconButton>
                </InputAdornment>
              )}
            />
            <FormHelperText>
              <Box alignContent="center" alignSelf="center">
                <FormControlLabel disabled control={<Checkbox checked={formValues.passwordStrength.lowercase} />} label="Lowercase" />
                <FormControlLabel disabled control={<Checkbox checked={formValues.passwordStrength.uppercase} />} label="Uppercase" />
                <FormControlLabel disabled control={<Checkbox checked={formValues.passwordStrength.number} />} label="Number" />
                <FormControlLabel disabled control={<Checkbox checked={formValues.passwordStrength.symbol} />} label="Symbol" />
                <Typography align="right" color="Highlight" variant="caption">{formValues.passwordStrength.value}</Typography>
              </Box>
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined" fullWidth margin="dense">
            <TextField
              label="URL"
              id="url"
              value={formValues.url}
              onChange={handleChange}
            />
          </FormControl>
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

CreateEntry.defaultProps = {
  values: undefined
}
