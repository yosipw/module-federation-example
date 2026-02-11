// libs/web-components/src/stories/tabs.stories.ts
import { html } from 'lit-html';
import { registerElements } from '../lib/register-elements';

registerElements();

export default {
  title: 'Training/Tabs',
  component: 'wc-tabs',
  argTypes: {
    tabs: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A tabbed interface component built with Lit. Demonstrates reactive properties, state management, and event binding.',
      },
    },
  },
};

const Template = (args: any) => {
  const container = document.createElement('div');
  const tabs = document.createElement('wc-tabs') as any;
  tabs.tabs = args.tabs;
  container.appendChild(tabs);
  return container;
};

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  tabs: [
    { label: 'Overview', content: 'Welcome to our web components training!' },
    { label: 'Features', content: 'Reusable • Encapsulated • Framework-agnostic' },
    { label: 'Benefits', content: 'Better maintainability and team collaboration' },
  ],
};

export const TechnicalContent = Template.bind({});
TechnicalContent.args = {
  tabs: [
    { 
      label: 'Custom Elements', 
      content: 'Define new HTML tags with custom behavior using the Custom Elements API.' 
    },
    { 
      label: 'Shadow DOM', 
      content: 'Encapsulate styles and markup to prevent conflicts with the rest of the page.' 
    },
    { 
      label: 'HTML Templates', 
      content: 'Use <template> and <slot> for reusable markup patterns.' 
    },
  ],
};

export const ManyTabs = Template.bind({});
ManyTabs.args = {
  tabs: Array.from({ length: 8 }, (_, i) => ({
    label: `Tab ${i + 1}`,
    content: `Content for tab number ${i + 1}`,
  })),
};

export const WithHTML = () => {
  const container = document.createElement('div');
  const tabs = document.createElement('wc-tabs') as any;
  tabs.tabs = [
    { 
      label: 'HTML', 
      content: '<h3>Rich Content</h3><p>You can include <strong>HTML</strong> in tab content!</p>' 
    },
    { 
      label: 'Lists', 
      content: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>' 
    },
  ];
  container.appendChild(tabs);
  return container;
};