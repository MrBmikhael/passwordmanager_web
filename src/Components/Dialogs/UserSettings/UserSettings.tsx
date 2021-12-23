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

export interface UserSettingsProps {
  isOpen: boolean
}

export const UserSettings = (props: UserSettingsProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const currentSettings = useSelector((state: RootState) => state.User.Settings)
  console.log(currentSettings)
  const [values, setValues] = useState<SettingsState>(currentSettings)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<Element, Event>, checked?: boolean) => {
    if (checked === undefined) {
      const id = changeEvent.currentTarget.id
      let value = _.get(changeEvent.target, 'value')
      if (id === 'length') {
        if (Number(value)) {
          if (value > 500) {
            value = 500
          }
          if (value < 1) {
            value = 1
          }
          setValues({
            ...values,
            passwordGenerator: {
              ...values.passwordGenerator,
              [id]: value
            }
          })
        }
      }
      else {
        setValues({
          ...values,
          passwordGenerator: {
            ...values.passwordGenerator,
            [id]: value
          }
        })
      }
    }
    else {
      setValues({
        ...values,
        passwordGenerator: {
          ...values.passwordGenerator,
          [changeEvent.currentTarget.id]: checked
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
          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Password Length"
              id="length"
              type="number"
              value={values.passwordGenerator.length || 10}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              label="Excluded Characters"
              id="exclude"
              value={values.passwordGenerator.exclude || ''}
              onChange={handleChange}
            />
          </FormControl>

          <FormControlLabel onChange={handleChange} control={<Checkbox id='lowercase' checked={values.passwordGenerator.lowercase} />} label="Lowercase" />
          <FormControlLabel onChange={handleChange} control={<Checkbox id='uppercase' checked={values.passwordGenerator.uppercase} />} label="Uppercase" />
          <FormControlLabel onChange={handleChange} control={<Checkbox id='numbers' checked={values.passwordGenerator.numbers} />} label="Numbers" />
          <FormControlLabel onChange={handleChange} control={<Checkbox id='symbols' checked={values.passwordGenerator.symbols} />} label="Symbols" />
          <FormControlLabel onChange={handleChange} control={<Checkbox id='excludeSimilarCharacters' checked={values.passwordGenerator.excludeSimilarCharacters} />} label="Exclude Similar Characters" />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={handleCreateAndClose} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}