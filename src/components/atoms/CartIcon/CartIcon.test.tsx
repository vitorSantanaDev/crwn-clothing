import { render } from '@testing-library/react'
import CartIcon from '.'

describe('<ButtonComponent />', () => {
  it('should render the cart icon', () => {
    render(<CartIcon />)

    const icon = document.querySelector('.shoppingIcon')
    expect(icon).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = render(<CartIcon />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
