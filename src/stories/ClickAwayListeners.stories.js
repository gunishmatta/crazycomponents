import React from 'react'
import {action} from '@storybook/addon-actions';
import ClickAwayListeners from '../components/material/ClickAwayListeners/ClickAwayListeners'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : ClickAwayListeners,
    title : 'ClickAwayListeners',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const ClickAwayListener = () => <ClickAwayListeners onClick={action('clicked')}></ClickAwayListeners>;

 