import React from 'react'
import {action} from '@storybook/addon-actions';
import Components from '../components/material/Typography/Components'
import Themes from '../components/material/Typography/Themes'

export default {
    component : Components,
    title : 'Typography',
    excludeStories: /.*Data$/,
};


 export const Component = () => <Components onClick={action('clicked')}></Components>;

 export const Theme = () => <Themes onClick={action('clicked')}></Themes>
 