import { render, screen } from '@testing-library/react'
import CategoryCard from '.'

describe('<CategoryCard />', () => {
  it('should render the component correctly', () => {
    render(
      <CategoryCard
        title="Hats"
        action="/"
        urlImageBackground="https://i.ibb.co/ypkgK0X/blue-beanie.png"
      />
    )
    const heading = screen.getByRole('heading', { name: /hats/i })
    expect(heading).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <CategoryCard
        title="Hats"
        action="/"
        urlImageBackground="https://i.ibb.co/ypkgK0X/blue-beanie.png"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
