import React from 'react'
import {action} from '@storybook/addon-actions';
import CollapseTransitions from '../components/material/Transitions/CollapseTransitions'
import FadeTransitions from '../components/material/Transitions/FadeTransitions'
import GrowTransitions from '../components/material/Transitions/GrowTransitions'
import SlideTransitions from '../components/material/Transitions/SlideTransitions'
import ZoomTransitions from '../components/material/Transitions/ZoomTransitions'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : CollapseTransitions,
    title : 'Transitions',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const CollapseTransition = () => <CollapseTransitions onClick={action('clicked')}></CollapseTransitions>;

 export const FadeTransition = () => <FadeTransitions onClick={action('clicked')}></FadeTransitions>
 export const GrowTransition = () => <GrowTransitions onClick={action('clicked')}></GrowTransitions>
 export const SlideTransition = () => <SlideTransitions onClick={action('clicked')}></SlideTransitions>
 export const ZoomTransition = () => <ZoomTransitions onClick={action('clicked')}></ZoomTransitions>

