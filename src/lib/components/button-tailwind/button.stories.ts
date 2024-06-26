import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';
import '../../../app.css';
import ButtonWithIcon from '../buttons/button-with-icon.svelte';
import ButtonSizeIcon from '../buttons/button-size-icon.svelte';
import ButtonLoading from '../buttons/button-loading.svelte';

const meta = {
	title: 'Components/With Tailwind/Buttons',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text'
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon']
		},
		variant: {
			control: 'select',
			options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
		},
		content: {
			control: 'text'
		}
	},
	parameters: {}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	}
};

export const Destructive: Story = {
	args: {
		variant: 'destructive'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost'
	}
};

export const Link: Story = {
	args: {
		variant: 'link'
	}
};

export const WithIcon: Story = {
	render: (args) => ({
		Component: ButtonWithIcon,
		props: args
	}),
	parameters: {
		docs: {
			source: {
				language: 'jsx',
				code: `
<Button>
	<EnvelopeOpen class="mr-2 h-5 w-5" />
	Login with Email
</Button>
				`
			}
		}
	}
};

export const Icon: Story = {
	args: {
		variant: 'outline',
		size: 'icon'
	},
	render: (args) => ({
		Component: ButtonSizeIcon,
		props: args
	}),
	parameters: {
		docs: {
			source: {
				language: 'jsx',
				code: `
<Button size="icon" variant="outline">
	<ChevronRight class="h-4 w-4" />
</Button>
				`
			}
		}
	}
};

export const Loading: Story = {
	args: {
		disabled: true
	},
	render: (args) => ({
		Component: ButtonLoading,
		props: args
	}),
	parameters: {
		docs: {
			source: {
				language: 'jsx',
				code: `
<Button disabled>
	<Reload class="mr-2 h-4 w-4 animate-spin" />
	Please wait
</Button>
				`
			}
		}
	}
};
