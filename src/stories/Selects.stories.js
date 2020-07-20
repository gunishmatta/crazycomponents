import React from 'react'
import {action} from '@storybook/addon-actions';
import CustomizedSelects from '../components/material/Selects/CustomizedSelects'
import ControlledOpenSelects from '../components/material/Selects/ControlledOpenSelects'
import MultipleSelects from '../components/material/Selects/MultipleSelects'
import NativeSelects from '../components/material/Selects/NativeSelects'
import SimpleSelects from '../components/material/Selects/SimpleSelects'
import WithDialogSelects from '../components/material/Selects/WithDialogSelects'

export default {
    component : SimpleSelects,
    title : 'Buttons',
    excludeStories: /.*Data$/,
};


 export const SimpleSelect = () => <SimpleSelects onClick={action('clicked')}>Contained Button</SimpleSelects>;

 export const ControlledOpenSelect = () => <ControlledOpenSelects onClick={action('clicked')}></ControlledOpenSelects>
 export const MultipleSelect = () => <MultipleSelects onClick={action('clicked')}></MultipleSelects>
 export const NativeSelect = () => <NativeSelects onClick={action('clicked')}></NativeSelects>
 export const WithDialogSelect = () => <WithDialogSelects onClick={action('clicked')}></WithDialogSelects>

 export const CustomizedSelect = () => <CustomizedSelects onClick={action('clicked')}></CustomizedSelects>

 