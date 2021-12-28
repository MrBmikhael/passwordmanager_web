import React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux'

export function LinearProgressBar(): React.ReactElement {
  const progressBarState = useSelector((state: RootState) => state.UI.ProgressBar)
  const props: LinearProgressProps = { value: progressBarState.progress, variant: 'determinate' }

  if (progressBarState.indeterminate) {
    props.variant = 'indeterminate'
    props.value = 0
  }

  const { value, variant } = props

  if ((props.value !== 0 && props.variant === 'determinate') || progressBarState.indeterminate) {
    return (<LinearProgress value={value} variant={variant} />)
  }
  return <span />
}
