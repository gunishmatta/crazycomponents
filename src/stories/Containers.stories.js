import React from 'react'
import {action} from '@storybook/addon-actions';
import FixedContainers from '../components/material/Containers/FixedContainers'
import FluidContainers from '../components/material/Containers/FluidContainers'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : FluidContainers,
    title : 'Containers',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const FluidContainer = () => <FluidContainers onClick={action('clicked')}></FluidContainers>;

 export const FixedContainer = () => <FixedContainers onClick={action('clicked')}></FixedContainers>
 