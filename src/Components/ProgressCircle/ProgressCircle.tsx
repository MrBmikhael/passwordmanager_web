import React from 'react'
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'

export function ProgressCircle(props: CircularProgressProps): React.ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CircularProgress {...props} />
}
