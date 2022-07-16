import { render, screen } from '@testing-library/react'
import SHOP_DATA from 'database/shop-data'

import CartItem from '.'

const mockData = SHOP_DATA[0].items[0]

describe('<CartItem />', () => {
  it('should render cart item correctly', () => {
    render(<CartItem quantity={3} {...mockData} />)

    const imageItem = screen.getByRole('img', { name: mockData.name })
    const nameItem = screen.getByText(mockData.name)
    const priceAndQuantity = screen.getByText(`${3} x $${mockData.price}`)

    expect(imageItem).toBeInTheDocument()
    expect(nameItem).toBeInTheDocument()
    expect(priceAndQuantity).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<CartItem quantity={3} {...mockData} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
