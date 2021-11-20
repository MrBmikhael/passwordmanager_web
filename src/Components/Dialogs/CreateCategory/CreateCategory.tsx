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
import GlobalActions from '../../../Redux/UI/Global/GlobalActions'
import DataActions from '../../../Redux/Data/DataActions'
import TextField from '@mui/material/TextField'

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
    dispatch(GlobalActions.closeAllDialogs())
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
          {"Create A New Category"}
        </DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth margin='dense'>
            <TextField
              focused
              required
              label="Category"
              id="category"
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