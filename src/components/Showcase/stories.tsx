import { Story, Meta } from '@storybook/react'

import Showcase from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: Story = (args) => <Showcase {...args} />

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: Story = (args) => <Showcase {...args} />

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
