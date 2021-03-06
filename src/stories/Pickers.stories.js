import React from 'react'
import {action} from '@storybook/addon-actions';
import DatePickers from '../components/material/Pickers/DatePickers'
import DateTimePickers from '../components/material/Pickers/DateTimePickers'
import TimePickers from '../components/material/Pickers/TimePickers'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : DatePickers,
    title : 'Pickers',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const DatePicker = () => <DatePickers onClick={action('clicked')}>Date Pickers</DatePickers>;

 export const DateTimePicker = () => <DateTimePickers onClick={action('clicked')}></DateTimePickers>
 export const TimePicker = () => <TimePickers onClick={action('clicked')}></TimePickers>
 