import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'
import { AlertSnackbar } from '../Components/AlertSnackbar/AlertSnackbar'
import { AlertStatus } from '../Redux/Constants/UIConstants'

afterEach(cleanup)

test('renders alert', () => {
  const { getByText } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.success} />)
  expect(getByText('Test Alert')).toBeInTheDocument()
})

test('success and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.success} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('SuccessOutlinedIcon')).toBeInTheDocument()
})

test('warning and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.warning} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ReportProblemOutlinedIcon')).toBeInTheDocument()
})

test('info and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.info} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('InfoOutlinedIcon')).toBeInTheDocument()
})

test('error and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.error} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ErrorOutlineIcon')).toBeInTheDocument()
})

test('error and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.error} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ErrorOutlineIcon')).toBeInTheDocument()
})

test('error and close icon visible', () => {
  const { queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.error} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(queryByTestId('ErrorOutlineIcon')).toBeInTheDocument()
})

test('close button closes alert', () => {
  const { getByText, queryByTestId } = render(<AlertSnackbar message={'Test Alert'} status={AlertStatus.error} />)
  expect(queryByTestId('CloseIcon')).toBeInTheDocument()
  expect(getByText('Test Alert')).toBeInTheDocument()

  const closeBtn = queryByTestId('CloseIcon')
  if (closeBtn) {
    fireEvent.click(closeBtn)
  }

  expect(getByText('Test Alert')).not.toBeInTheDocument()
})
