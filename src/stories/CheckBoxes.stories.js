import React from 'react'
import {action} from '@storybook/addon-actions';
import CheckBoxwithFormGroups from '../components/material/CheckBoxes/CheckBoxwithFormGroups'
import FormControlLabels from '../components/material/CheckBoxes/FormControlLabels'
import LabelPlacements from '../components/material/CheckBoxes/LabelPlacements'
import SimpleCheckBoxes from '../components/material/CheckBoxes/SimpleCheckBoxes'


export default {
    component : SimpleCheckBoxes,
    title : 'CheckBoxes',
    excludeStories: /.*Data$/,
};


 export const CheckBoxwithFormGroup = () => <CheckBoxwithFormGroups onClick={action('clicked')}>Check Boxes</CheckBoxwithFormGroups>;

 export const FormControlLabel = () => <FormControlLabels onClick={action('clicked')}></FormControlLabels>
 export const LabelPlacement = () =><div> 
 
 <LabelPlacements onClick={action('clicked')}></LabelPlacements>
 
 </div>
 
 
 export const SimpleCheckBox = () => <SimpleCheckBoxes onClick={action('clicked')}></SimpleCheckBoxes>
 