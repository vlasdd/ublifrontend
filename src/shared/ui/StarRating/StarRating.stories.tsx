import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}

export const AlreadySelected: Story = {
  args: {
    selectedStars: 3
  }
}
