import React from 'react'
import {action} from '@storybook/addon-actions';
import CustomizedSwitches from '../components/material/Switches/CustomizedSwitches'
import LabelPlacements from '../components/material/Switches/LabelPlacements'
import SimpleSwitches from '../components/material/Switches/SimpleSwitches'
import SwitcheswithFormGroups from '../components/material/Switches/SwitcheswithFormGroups'
import SwitcheswithFormLabels from '../components/material/Switches/SwitcheswithFormLabels'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : SimpleSwitches,
    title : 'Switches',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleSwitch = () => <SimpleSwitches onClick={action('clicked')}>Contained Button</SimpleSwitches>;

 export const CustomizedSwitch = () => <CustomizedSwitches onClick={action('clicked')}></CustomizedSwitches>
 export const LabelPlacement = () => <LabelPlacements onClick={action('clicked')}></LabelPlacements>
 export const SwitcheswithFormGroup = () => <SwitcheswithFormGroups onClick={action('clicked')}></SwitcheswithFormGroups>
 export const SwitcheswithFormLabel = () => <SwitcheswithFormLabels onClick={action('clicked')}></SwitcheswithFormLabels>


 