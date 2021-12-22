import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import FormControl from '@mui/material/FormControl'
import GlobalActions from '../../../Redux/Store/UI/Global/GlobalActions'
import { PasswordGeneratorProps } from '../../../Security/PasswordGenerator'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export interface UserSettingsProps {
  isOpen: boolean
}

interface UserSettingsState {
  passwordGenerator: PasswordGeneratorProps
}

const initialState = {
  passwordGenerator: {}
}

export const UserSettings = (props: UserSettingsProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<UserSettingsState>(initialState)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<Element, Event>, checked?: boolean) => {
  }

  const handleClose = () => {
    if (values) {
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
          {"Settings"}
        </DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Excluded Characters"
              id="exclude"
              value={values.passwordGenerator.exclude || ''}
              onChange={handleChange}
            />
          </FormControl>

          <FormControlLabel onChange={handleChange} control={<Checkbox id='symbols' checked={Boolean(values.passwordGenerator.symbols) || false} />} label="Use Symbols" />

          <FormControl variant="outlined" fullWidth margin='dense' disabled={!(Boolean(values.passwordGenerator.symbols) || false)}>
            <TextField
              disabled={!(Boolean(values.passwordGenerator.symbols) || false)}
              label="Allowd Symbols"
              id="symbols"
              value={values.passwordGenerator.symbols || ''}
              onChange={handleChange}
            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleCreateAndClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}