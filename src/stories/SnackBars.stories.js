import React from 'react'
import {action} from '@storybook/addon-actions';
import ChangeTransitionSnackBars from '../components/material/SnackBars/ChangeTransitionSnackBars'
import ControlSlideDirectionSnackBars from '../components/material/SnackBars/ControlSlideDirectionSnackBars'
import CustomizedSnackBars from '../components/material/SnackBars/CustomizedSnackBars'
import MessageLengthSnackBars from '../components/material/SnackBars/MessageLengthSnackBars'
import PositionedSnackBars from '../components/material/SnackBars/PositionedSnackBars'
import SimpleSnackBars from '../components/material/SnackBars/SimpleSnackBars'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : SimpleSnackBars,
    title : 'SnackBars',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleSnackBar = () => <SimpleSnackBars onClick={action('clicked')}></SimpleSnackBars>

 export const ChangeTransitionSnackBar = () => <ChangeTransitionSnackBars onClick={action('clicked')}></ChangeTransitionSnackBars>
 export const ControlSlideDirectionSnackBar = () => <ControlSlideDirectionSnackBars onClick={action('clicked')}></ControlSlideDirectionSnackBars>
 export const CustomizedSnackBar = () => <CustomizedSnackBars onClick={action('clicked')}></CustomizedSnackBars>
 export const MessageLengthSnackBar = () => <MessageLengthSnackBars onClick={action('clicked')}></MessageLengthSnackBars>

 export const MenuListComposition = () => <PositionedSnackBars onClick={action('clicked')}></PositionedSnackBars>

 