import React from 'react'
import { cleanup, render, fireEvent, screen, waitFor } from '@testing-library/react'
import { AlertSnackbar } from '../Components/AlertSnackbar/AlertSnackbar'
import { SnackbarAlertStatus } from '../Redux/UI/Snackbar/SnackbarConstants'

afterEach(cleanup)

test('renders alert', () => {
  const { getByText } = render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.success} />)
  expect(getByText('Test Alert')).toBeInTheDocument()
})

test('success and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.success} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('SuccessOutlinedIcon')).toBeInTheDocument()
})

test('warning and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.warning} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ReportProblemOutlinedIcon')).toBeInTheDocument()
})

test('info and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.info} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('InfoOutlinedIcon')).toBeInTheDocument()
})

test('error and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.error} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ErrorOutlineIcon')).toBeInTheDocument()
})

test('close button closes alert', () => {
  render(<AlertSnackbar message={'Test Alert'} status={SnackbarAlertStatus.error} />)
  expect(screen.queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(screen.getByText('Test Alert')).toBeInTheDocument()

  const closeBtn = screen.queryByTestId('CloseIcon')
  if (closeBtn) {
    fireEvent.click(closeBtn)
  }

  waitFor(() => {
    expect(screen.getByTitle('Close')).not.toBeVisible()
  }, {
    timeout: 1000,
    interval: 250
  })

})
