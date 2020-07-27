import React from 'react'
import {action} from '@storybook/addon-actions';
import SimplePortals from '../components/material/Portals/SimplePortals'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : SimplePortals,
    title : 'Portals',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimplePortal = () => <SimplePortals onClick={action('clicked')}></SimplePortals>;

 