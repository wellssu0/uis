import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonSize, ButtonType, ButtonProps } from './Button'

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const defaultProps = {
      onClick: jest.fn()
    }
    const { getByText } = render(<Button {...defaultProps}>Click Me</Button>)
    const btn = getByText('Click Me') as HTMLButtonElement
    expect(btn).toBeInTheDocument()
    expect(btn.tagName).toBe('BUTTON')
    expect(btn).toHaveClass('btn btn-default')
    expect(btn.disabled).toBeFalsy()
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const testButton01: ButtonProps = {
      btnType: ButtonType.Danger,
      size: ButtonSize.Small,
      className: 'danger',
      onClick: jest.fn()
    }
    const { getByText } = render(<Button {...testButton01}>Delete</Button>)
    const element = getByText('Delete') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('BUTTON')
    expect(element).toHaveClass('btn btn-danger btn-sm danger')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(testButton01.onClick).toHaveBeenCalled()
  })
  it('should render disabled button when disabled set to sure', () => {
    const testButton03: ButtonProps = {
      btnType: ButtonType.Primary,
      size: ButtonSize.Large,
      disabled: true,
      onClick: jest.fn()
    }
    const { getByText } = render(<Button {...testButton03}>Disabled</Button>)
    const element = getByText('Disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('BUTTON')
    expect(element).toHaveClass('btn btn-primary btn-lg')
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(testButton03.onClick).not.toHaveBeenCalled()
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const testButton02: ButtonProps = {
      btnType: ButtonType.Link,
      size: ButtonSize.Large,
      disabled: true,
      href: 'http://www.google.com',
      onClick: jest.fn(),
      target: '_blank'
    }
    const { getByText } = render(<Button {...testButton02}>Google.com</Button>)
    const element = getByText('Google.com') as HTMLLinkElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('A')
    expect(element).toHaveClass('btn btn-lg btn-link disabled')
    expect(element.target).toBe('_blank')
  })
})
