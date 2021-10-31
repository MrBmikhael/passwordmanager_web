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
import { UIActions } from '../../../Redux/Actions/UIActions'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import { DataActions } from '../../../Redux/Actions/DataActions'

export interface CreateCategoryProps {
  isOpen: boolean
}

interface CreateCategoryState {
  category: string
}

const initialState: CreateCategoryState = { category: '' }

export const CreateCategory = (props: CreateCategoryProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateCategoryState>(initialState)

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

  const handleCreateAndClose = () => {
    if (values.category) {
      dispatch(DataActions.CategoryActions.createNewCategory(values.category))
    }
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
          {"Create A New Entry"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new category
          </DialogContentText>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Input
              id="category"
              type='text'
              value={values.category}
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