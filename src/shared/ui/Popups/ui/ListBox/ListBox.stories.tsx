import { Currency } from '@/shared/constants/currency'
import type { Meta, StoryObj } from '@storybook/react'
import { ListBox, ListBoxItem } from './ListBox'

const currencyOptions: ListBoxItem[] = [
  {
    value: Currency.EUR,
    content: Currency.EUR
  },
  {
    value: Currency.USD,
    content: Currency.USD
  },
  {
    value: Currency.UAH,
    content: Currency.UAH
  }
]

const meta = {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof ListBox>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    defaultValue: 'Select Currency',
    items: currencyOptions,
    onChange: () => null
  }
}
