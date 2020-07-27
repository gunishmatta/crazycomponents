import React from 'react'
import {action} from '@storybook/addon-actions';
import AlertDialogs from '../components/material/Dialogs/AlertDialogs'
import ConfirmationDialogs from '../components/material/Dialogs/ConfirmationDialogs'
import CustomizedDialogs from '../components/material/Dialogs/CustomizedDialogs'
import DraggableDialogs from '../components/material/Dialogs/DraggableDialogs'
import FormDialogs from '../components/material/Dialogs/FormDialogs'
import FullScreenDialogs from '../components/material/Dialogs/FullScreenDialogs'
import OptionalSizedDialogs from '../components/material/Dialogs/OptionalSizedDialogs'
import ResponsiveFullScreenDialogs from '../components/material/Dialogs/ResponsiveFullScreenDialogs'
import ScrollingLongContentDialogs from '../components/material/Dialogs/ScrollingLongContentDialogs'
import SimpleDialogs from '../components/material/Dialogs/SimpleDialogs'
import TransitionsDialogs from '../components/material/Dialogs/TransitionsDialogs'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";



export default {
    component : SimpleDialogs,
    title : 'Dialogs',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleDialog = () => <SimpleDialogs onClick={action('clicked')}></SimpleDialogs>;

 export const AlertDialog = () => <AlertDialogs onClick={action('clicked')}></AlertDialogs>
 export const ConfirmationDialog = () => <ConfirmationDialogs onClick={action('clicked')}></ConfirmationDialogs>
 export const CustomizedDialog = () => <CustomizedDialogs onClick={action('clicked')}></CustomizedDialogs>
 export const DraggableDialog = () => <DraggableDialogs onClick={action('clicked')}></DraggableDialogs>

 export const FormDialog = () => <FormDialogs onClick={action('clicked')}></FormDialogs>

 export const FullScreenDialog = () => <FullScreenDialogs onClick={action('clicked')}></FullScreenDialogs>
 
 export const OptionalSizedDialog = () => <OptionalSizedDialogs onClick={action('clicked')}></OptionalSizedDialogs>
 
 export const ResponsiveFullScreenDialog = () => <ResponsiveFullScreenDialogs onClick={action('clicked')}></ResponsiveFullScreenDialogs>
 
 export const ScrollingLongContentDialog = () => <ScrollingLongContentDialogs onClick={action('clicked')}></ScrollingLongContentDialogs>
 
 
 export const TransitionsDialog = () => <TransitionsDialogs onClick={action('clicked')}></TransitionsDialogs>
 