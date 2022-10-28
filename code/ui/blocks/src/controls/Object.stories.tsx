import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/addons';
import { ObjectControl } from './Object';

export default {
  component: ObjectControl,
  tags: ['docsPage'],
  parameters: { controls: { include: ['value'] } },
  render: (args) => {
    const [, updateArgs] = useArgs();
    const { value, onChange } = args;

    return (
      <>
        <ObjectControl
          {...args}
          name="theName"
          onChange={(newValue) => {
            updateArgs({ value: newValue });
            onChange?.(newValue);
          }}
        />
        <pre>{JSON.stringify(value) || 'undefined'}</pre>
      </>
    );
  },
} as Meta<typeof ObjectControl>;

export const Object: StoryObj<typeof ObjectControl> = {
  args: {
    value: {
      name: 'Michael',
      someDate: new Date('2022-10-30T12:31:11'),
      nested: { someBool: true, someNumber: 22 },
    },
  },
};

export const Array: StoryObj<typeof ObjectControl> = {
  args: {
    value: [
      'someString',
      22,
      true,
      new Date('2022-10-30T12:31:11'),
      { someBool: true, someNumber: 22 },
    ],
  },
};

export const EmptyObject: StoryObj<typeof ObjectControl> = {
  args: {
    value: {},
  },
};

export const EmptyArray: StoryObj<typeof ObjectControl> = {
  args: {
    value: {},
  },
};

export const Null: StoryObj<typeof ObjectControl> = {
  args: {
    value: null,
  },
};

export const Undefined: StoryObj<typeof ObjectControl> = {
  args: {
    value: undefined,
  },
};
