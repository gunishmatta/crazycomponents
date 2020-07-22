import React from 'react'
import {action} from '@storybook/addon-actions';
import Papers from '../components/material/Papers/Papers'


export default {
    component : Papers,
    title : 'Paper',
    excludeStories: /.*Data$/,
};


 export const Paper = () => <Papers onClick={action('clicked')}></Papers>;
