import React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { RootState } from '../../Redux'
import { useSelector } from 'react-redux'

export const LinearProgressBar = () => {
  const state = useSelector((state: RootState) => state.UI.ProgressBar)
  const props: LinearProgressProps = { value: state.progress, variant: 'determinate' }

  if (state.indeterminate) {
    props.variant = "indeterminate"
    props.value = 0
  }

  if ((props.value !== 0 && props.variant === 'determinate') || state.indeterminate) {
    return (<LinearProgress {...props} />)
  }
  return (<></>)
}