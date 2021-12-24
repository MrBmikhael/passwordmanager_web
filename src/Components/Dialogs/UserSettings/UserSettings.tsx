import React, { useState } from 'react'
import _ from 'lodash'
import updateSettings from '../../../Redux/Store/User/Settings/SettingsActions'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import FormControl from '@mui/material/FormControl'
import GlobalActions from '../../../Redux/Store/UI/Global/GlobalActions'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { RootState } from '../../../Redux/'
import { SettingsState } from '../../../Redux/Store/User/Settings/SettingsReducer'
import { DialogContentText } from '@mui/material'
import Utils from '../../../Utils'

export interface UserSettingsProps {
  isOpen: boolean
}

const valueRanges = {
  'timeout': { 'min': 5 },
  'expire': { 'min': 1 },
  'length': { 'min': 1, 'max': 500 }
}

export const UserSettings = (props: UserSettingsProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const currentSettings = useSelector((state: RootState) => state.User.Settings)
  const [values, setValues] = useState<SettingsState>(currentSettings)

  const handleSecurityChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const id = changeEvent.currentTarget.id
    let value: string | number = _.get(changeEvent.target, 'value')

    if (id === 'timeout') value = Utils.forceMin(Number(value), valueRanges.timeout.min)
    if (id === 'expire') value = Utils.forceMin(Number(value), valueRanges.expire.min)

    setValues({
      ...values,
      security: {
        ...values.security,
        [id]: value
      }
    })
  }

  const handlePasswordGeneratorChange = (changeEvent: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<Element, Event>, checked?: boolean) => {
    const id = changeEvent.currentTarget.id
    let value = _.get(changeEvent.target, 'value')

    if (id === 'length') {
      if (Number(value)) {
        setValues({
          ...values,
          passwordGenerator: {
            ...values.passwordGenerator,
            [id]: Utils.forceRange(value, valueRanges.length.min, valueRanges.length.max)
          }
        })
      }
    }
    else if (id === 'exclude') {
      setValues({
        ...values,
        passwordGenerator: {
          ...values.passwordGenerator,
          [id]: String(value)
        }
      })
    }
    else {
      setValues({
        ...values,
        passwordGenerator: {
          ...values.passwordGenerator,
          [id]: checked
        }
      })
    }
  }

  const handleClose = () => {
    if (values) {
      dispatch(GlobalActions.closeAllDialogs())
    }
  }

  const handleCreateAndClose = () => {
    dispatch(updateSettings(values))
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
        <DialogTitle id="responsive-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '1em' }}>
            Password generation settings
          </DialogContentText>
          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Password Length"
              id="length"
              type="number"
              InputProps={{ inputProps: { min: valueRanges.length.min, max: valueRanges.length.max } }}
              value={values.passwordGenerator.length}
              onChange={handlePasswordGeneratorChange}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Exclude Characters"
              id="exclude"
              value={values.passwordGenerator.exclude}
              onChange={handlePasswordGeneratorChange}
            />
          </FormControl>

          <FormControlLabel onChange={handlePasswordGeneratorChange} control={<Checkbox id='lowercase' checked={values.passwordGenerator.lowercase} />} label="Lowercase" disabled={true} />
          <FormControlLabel onChange={handlePasswordGeneratorChange} control={<Checkbox id='uppercase' checked={values.passwordGenerator.uppercase} />} label="Uppercase" />
          <FormControlLabel onChange={handlePasswordGeneratorChange} control={<Checkbox id='numbers' checked={values.passwordGenerator.numbers} />} label="Numbers" />
          <FormControlLabel onChange={handlePasswordGeneratorChange} control={<Checkbox id='symbols' checked={values.passwordGenerator.symbols} />} label="Symbols" />

          <DialogContentText sx={{ margin: '1em' }}>
            Security settings
          </DialogContentText>

          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Lock after inactivity (seconds)"
              id="timeout"
              type="number"
              InputProps={{ inputProps: { min: valueRanges.timeout.min } }}
              value={values.security.timeout}
              onChange={handleSecurityChange}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Password expires after (days)"
              id="expire"
              type="number"
              InputProps={{ inputProps: { min: valueRanges.expire.min } }}
              value={values.security.expire}
              onChange={handleSecurityChange}
            />
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={handleCreateAndClose} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}