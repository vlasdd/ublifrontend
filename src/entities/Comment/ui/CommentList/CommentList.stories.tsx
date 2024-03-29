import type { Meta, StoryObj } from '@storybook/react'
import CommentList from './CommentList'

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof CommentList>

export default meta

type Story = StoryObj<typeof meta>

const comments = [
  {
    id: '1',
    text: 'Some comment here',
    user: {
      id: '1',
      username: 'username',
      avatar: 'https://miro.medium.com/v2/resize:fit:679/0*ngAthWxOvKZHvsw9'
    }
  },
  {
    id: '2',
    text: 'Some comment here123',
    user: {
      id: '12',
      username: 'username2',
      avatar: 'https://miro.medium.com/v2/resize:fit:679/0*ngAthWxOvKZHvsw9'
    }
  }
]

export const Light: Story = {
  args: {
    comments
  }
}
