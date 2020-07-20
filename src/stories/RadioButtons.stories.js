import React from 'react'
import {action} from '@storybook/addon-actions';
import RadioGroups from '../components/material/RadioButtons/RadioGroups'
import RadioLabelPlacements from '../components/material/RadioButtons/RadioLabelPlacements'
import StandaloneRadioButtons from '../components/material/RadioButtons/StandaloneRadioButtons'


export default {
    component : RadioGroups,
    title : 'Radio Buttons',
    excludeStories: /.*Data$/,
};


 export const RadioGroup = () => <RadioGroups onClick={action('clicked')}>Date Pickers</RadioGroups>;

 export const RadioLabelPlacement = () => <RadioLabelPlacements onClick={action('clicked')}></RadioLabelPlacements>
 export const StandaloneRadioButton = () => <StandaloneRadioButtons onClick={action('clicked')}></StandaloneRadioButtons>
 