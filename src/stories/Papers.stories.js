import React from 'react'
import {action} from '@storybook/addon-actions';
import Papers from '../components/material/Papers/Papers'

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : Papers,
    title : 'Paper',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const Paper = () => <Papers onClick={action('clicked')}></Papers>;
