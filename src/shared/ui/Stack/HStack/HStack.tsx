import React from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'flexDirection'>

export const HStack: React.FC<HStackProps> = (props) => {
  return (
    <Flex
      flexDirection="row"
      {...props}
    />
  )
}
