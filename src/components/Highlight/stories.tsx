import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Default.args = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  backgroundImage: '/img/red-dead-bg.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  backgroundImage: '/img/red-dead-bg.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  floatImage: '/img/red-dead-float.png'
}
