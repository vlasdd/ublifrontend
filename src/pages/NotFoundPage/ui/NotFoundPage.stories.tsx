import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPageAsync as NotFoundPage } from './NotFoundPage.async'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}
