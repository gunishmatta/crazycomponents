import React from 'react'
import {action} from '@storybook/addon-actions';
import CirclularStaticBars from '../components/material/ProgressBars/CirclularStaticBars'
import CircularDeterminateBars from '../components/material/ProgressBars/CircularDeterminateBars'
import CircularIndeterminateBars from '../components/material/ProgressBars/CircularIndeterminateBars'
import CustomizedProgressBars from '../components/material/ProgressBars/CustomizedProgressBars'
import DelayingAppearanceBars from '../components/material/ProgressBars/DelayingAppearanceBars'
import InteractiveIntegrationBars from '../components/material/ProgressBars/InteractiveIntegrationBars'
import LimitationsBars from '../components/material/ProgressBars/LimitationsBars'
import LinearBufferBars from '../components/material/ProgressBars/LinearBufferBars'
import LinearIntermediateBars from '../components/material/ProgressBars/LinearIntermediateBars'
import LinearQueryBars from '../components/material/ProgressBars/LinearQueryBars'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : CircularDeterminateBars,
    title : 'Progress Bars',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const CircularDeterminateBar = () => <CircularDeterminateBars onClick={action('clicked')}></CircularDeterminateBars>;

 export const CircularIndeterminateBar = () => <CircularIndeterminateBars onClick={action('clicked')}></CircularIndeterminateBars>
 export const CustomizedProgressBar = () => <CustomizedProgressBars onClick={action('clicked')}></CustomizedProgressBars>
 export const CirclularStaticBar = () => <CirclularStaticBars onClick={action('clicked')}></CirclularStaticBars>
 export const DelayingAppearanceBar = () => <DelayingAppearanceBars onClick={action('clicked')}></DelayingAppearanceBars>

 export const InteractiveIntegrationBar = () => <InteractiveIntegrationBars onClick={action('clicked')}></InteractiveIntegrationBars>

 export const LimitationsBar = () => <LimitationsBars onClick={action('clicked')}></LimitationsBars>
 
 export const LinearBufferBar = () => <LinearBufferBars/>

 export const LinearIntermediateBar = () => <LinearIntermediateBars/>

 export const LinearQueryBar = () => <LinearQueryBars/>