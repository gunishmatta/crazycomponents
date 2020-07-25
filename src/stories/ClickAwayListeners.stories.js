import React from 'react'
import {action} from '@storybook/addon-actions';
import ClickAwayListeners from '../components/material/ClickAwayListeners/ClickAwayListeners'

export default {
    component : ClickAwayListeners,
    title : 'ClickAwayListeners',
    excludeStories: /.*Data$/,
};


 export const ClickAwayListener = () => <ClickAwayListeners onClick={action('clicked')}></ClickAwayListeners>;

 