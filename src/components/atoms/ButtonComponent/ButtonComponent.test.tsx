import { render, screen } from '@testing-library/react'

import { ButtonTypeStyleEnum } from './types'

import ButtonComponent from '.'
import userEvent from '@testing-library/user-event'

describe('<ButtonComponent />', () => {
  it('should render the button with default style', () => {
    render(
      <ButtonComponent buttonTypeStyle={ButtonTypeStyleEnum.DEFAULT}>
        button Text
      </ButtonComponent>
    )

    const button = screen.getByRole('button', { name: /button text/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': 'black',
      color: 'white'
    })
  })

  it('should render the button with google sign in style', () => {
    render(
      <ButtonComponent buttonTypeStyle={ButtonTypeStyleEnum.GOOGLE_SIGN_IN}>
        button Text
      </ButtonComponent>
    )

    const button = screen.getByRole('button', { name: /button text/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#4285f4',
      color: 'white'
    })
  })

  it('should render the button with inverted style', () => {
    render(
      <ButtonComponent buttonTypeStyle={ButtonTypeStyleEnum.INVERTED}>
        button Text
      </ButtonComponent>
    )

    const button = screen.getByRole('button', { name: /button text/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': 'white',
      color: 'black',
      border: '1px solid black'
    })
  })

  it('should called the handleClick function when click in the button', () => {
    const handleClick = jest.fn()

    render(
      <ButtonComponent
        handleClick={handleClick}
        buttonTypeStyle={ButtonTypeStyleEnum.DEFAULT}
      >
        button Text
      </ButtonComponent>
    )

    const button = screen.getByRole('button', { name: /button text/i })

    expect(button).toBeInTheDocument()
    userEvent.click(button)
    expect(handleClick).toBeCalledTimes(1)
  })
})
