import React from 'react'
import {action} from '@storybook/addon-actions';

import SimpleLinks from '../components/material/NavLinks/SimpleLinks'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : SimpleLinks,
    title : 'NavLinks',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleLink = () => <SimpleLinks onClick={action('clicked')}></SimpleLinks>;

