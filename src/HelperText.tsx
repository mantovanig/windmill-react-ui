import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from './context/ThemeContext'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  valid?: boolean
}

const HelperText = React.forwardRef<HTMLSpanElement, Props>(function HelperText(props, ref) {
  const { children, valid, className, ...other } = props
  const {
    theme: { helperText },
  } = useContext(ThemeContext)

  const baseStyle = helperText.base
  const validStyle = helperText.valid
  const invalidStyle = helperText.invalid

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  // NEEDS REVIEW - return type?
  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  const cls = classNames(baseStyle, validationStyle(valid), className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default HelperText