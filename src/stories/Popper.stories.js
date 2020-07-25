import React from 'react'
import {action} from '@storybook/addon-actions';
import MinimalistPoppers from '../components/material/Poppers/MinimalistPoppers'
import PopupStateHelpers from '../components/material/Poppers/PopupStateHelpers'
import PositionedPoppers from '../components/material/Poppers/PositionedPoppers'
import SimplePoppers from '../components/material/Poppers/SimplePoppers'
import WithoutTransitionPoppers from '../components/material/Poppers/WithoutTransitionPoppers'


export default {
    component : SimplePoppers,
    title : 'Poppers',
    excludeStories: /.*Data$/,
};


 export const SimpleMenu = () => <SimplePoppers onClick={action('clicked')}></SimplePoppers>;

 export const SelectedMenu = () => <MinimalistPoppers onClick={action('clicked')}></MinimalistPoppers>
 export const CustomizedMenu = () => <PopupStateHelpers onClick={action('clicked')}></PopupStateHelpers>
 export const MaxHeightMenu = () => <PositionedPoppers onClick={action('clicked')}></PositionedPoppers>
 export const LimitationMenu = () => <WithoutTransitionPoppers onClick={action('clicked')}></WithoutTransitionPoppers>

 