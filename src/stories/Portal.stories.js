import React from 'react'
import {action} from '@storybook/addon-actions';
import SimplePortals from '../components/material/Portals/SimplePortals'

export default {
    component : SimplePortals,
    title : 'Portals',
    excludeStories: /.*Data$/,
};


 export const SimplePortal = () => <SimplePortals onClick={action('clicked')}></SimplePortals>;

 