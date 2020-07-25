import React from 'react'
import {action} from '@storybook/addon-actions';
import SimplePopovers from '../components/material/Popovers/SimplePopovers'
import MouseoverInteractions from '../components/material/Popovers/MouseoverInteractions'
import PopupStateHelpers from '../components/material/Popovers/PopupStateHelpers'

export default {
    component : SimplePopovers,
    title : 'Popovers',
    excludeStories: /.*Data$/,
};


 export const SimplePopover = () => <SimplePopovers onClick={action('clicked')}></SimplePopovers>;

 export const MouseoverInteraction = () => <MouseoverInteractions onClick={action('clicked')}></MouseoverInteractions>
 export const PopupStateHelper = () => <PopupStateHelpers onClick={action('clicked')}></PopupStateHelpers>
 