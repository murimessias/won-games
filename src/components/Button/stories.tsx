import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  size: 'sm',
  icon: <AddShoppingCart />
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  children: 'Buy Now',
  size: 'lg',
  as: 'a',
  href: '/link'
}
