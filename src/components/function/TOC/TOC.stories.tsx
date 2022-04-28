import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TOC from './TOC'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/TOC',
  component: TOC,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TOC>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TOC> = (args) => <TOC {...args} />

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  markdown: `## 1 
  ## 2
  ## 3
  ## 4
    `,
}
