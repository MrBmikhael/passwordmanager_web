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
import TextField from '@mui/material/TextField'
import GlobalActions from '../../../Redux/Store/UI/Global/GlobalActions'
import DataActions from '../../../Redux/Store/Data/DataActions'

export interface CreateCategoryProps {
  isOpen: boolean
}

interface CreateCategoryState {
  category: string
}

const initialState: CreateCategoryState = { category: '' }

export function CreateCategory(props: CreateCategoryProps): React.ReactElement {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch()
  const [values, setValues] = useState<CreateCategoryState>(initialState)

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [changeEvent.target.id]: changeEvent.target.value
    })
  }

  const handleClose = (): void => {
    setValues(() => initialState)
    dispatch(GlobalActions.closeAllDialogs())
  }

  const handleCreateAndClose = (): void => {
    if (values.category) {
      dispatch(DataActions.CategoryActions.createNewCategory(values.category))
    }
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
          Create A New Category
        </DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth margin="dense">
            <TextField
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
