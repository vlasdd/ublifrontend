import type { Meta, StoryObj } from '@storybook/react'
import CurrencySelect from './CurrencySelect'

const meta = {
  title: 'entities/Currency/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof CurrencySelect>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
