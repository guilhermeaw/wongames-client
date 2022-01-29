import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockGame from './mock'

import GameInfo from '.'

describe('<GameInfo />', () => {
  it('should render game with informations', () => {
    const { container } = renderWithTheme(<GameInfo {...mockGame} />)

    expect(
      screen.getByRole('heading', { name: mockGame.title })
    ).toBeInTheDocument()
    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument()
    expect(screen.getByText(mockGame.description)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...mockGame} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
