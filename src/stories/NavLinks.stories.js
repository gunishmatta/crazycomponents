import React from 'react'
import {action} from '@storybook/addon-actions';

import SimpleLinks from '../components/material/NavLinks/SimpleLinks'


export default {
    component : SimpleLinks,
    title : 'NavLinks',
    excludeStories: /.*Data$/,
};


 export const SimpleLink = () => <SimpleLinks onClick={action('clicked')}></SimpleLinks>;

