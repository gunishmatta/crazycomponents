import React from 'react'
import {action} from '@storybook/addon-actions';
import ComponentFields from '../components/material/TextFields/ComponentFields'
import CustomizedFields from '../components/material/TextFields/CustomizedFields'
import FilledAdornments from '../components/material/TextFields/FilledAdornments'
import FilledInputAdornments from '../components/material/TextFields/FilledInputAdornments'
import LayoutFields from '../components/material/TextFields/LayoutFields'
import OutlinedAdornments from '../components/material/TextFields/OutlinedAdornments'
import OutlinedFields from '../components/material/TextFields/OutlinedFields'
import TextFields from '../components/material/TextFields/TextFields'
import WithIconFields from '../components/material/TextFields/WithIconFields'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : TextFields,
    title : 'Text Fields',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const ContainedField = () => <ComponentFields onClick={action('clicked')}></ComponentFields>;

 export const CustomizedField = () => <CustomizedFields onClick={action('clicked')}></CustomizedFields>
 export const FilledAdornment = () => <FilledAdornments onClick={action('clicked')}></FilledAdornments>
 export const FilledInputAdornment = () => <FilledInputAdornments onClick={action('clicked')}></FilledInputAdornments>
 export const LayoutField = () => <LayoutFields onClick={action('clicked')}></LayoutFields>
 export const OutlinedAdornment = () => <OutlinedAdornments onClick={action('clicked')}></OutlinedAdornments>
 export const OutlinedField = () => <OutlinedFields onClick={action('clicked')}></OutlinedFields>
 
 export const TextField = () => <TextFields onClick={action('clicked')}></TextFields>
 export const WithIconField = () => <WithIconFields onClick={action('clicked')}></WithIconFields>
 