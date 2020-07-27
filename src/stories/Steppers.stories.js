import React from 'react'
import {action} from '@storybook/addon-actions';
import CustomizedSteppers from '../components/material/Steppers/CustomizedSteppers'
import HorizontalLinearAlternateLabels from '../components/material/Steppers/HorizontalLinearAlternateLabels'
import HorizontalLinears from '../components/material/Steppers/HorizontalLinears'
import HorizontalNonLinears from '../components/material/Steppers/HorizontalNonLinears'
import HorizontalNonLinearsAlternateLabels from '../components/material/Steppers/HorizontalNonLinearsAlternateLabels'
import HorizontalNonLinearsErrorSteppers from '../components/material/Steppers/HorizontalNonLinearsErrorSteppers'
import MobileStepperDots from '../components/material/Steppers/MobileStepperDots'
import MobileStepperProgressers from '../components/material/Steppers/MobileStepperProgressers'
import MobileStepperWithCaraousels from '../components/material/Steppers/MobileStepperWithCaraousels'
import VerticalSteppers from '../components/material/Steppers/VerticalSteppers'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : HorizontalLinears,
    title : 'Steppers',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const HorizontalLinear = () => <HorizontalLinears onClick={action('clicked')}></HorizontalLinears>;

 export const HorizontalLinearAlternateLabel = () => <HorizontalLinearAlternateLabels onClick={action('clicked')}></HorizontalLinearAlternateLabels>

 export const HorizontalNonLinear = () => <HorizontalNonLinears onClick={action('clicked')}></HorizontalNonLinears>

 export const HorizontalNonLinearsAlternateLabel = () => <HorizontalNonLinearsAlternateLabels onClick={action('clicked')}></HorizontalNonLinearsAlternateLabels>

 export const HorizontalNonLinearsErrorStepper = () => <HorizontalNonLinearsErrorSteppers onClick={action('clicked')}></HorizontalNonLinearsErrorSteppers>

 export const MobileStepperDot = () => <MobileStepperDots onClick={action('clicked')}></MobileStepperDots>

 export const MobileStepperProgresser = () => <MobileStepperProgressers onClick={action('clicked')}></MobileStepperProgressers>

 export const MobileStepperWithCaraousel = () => <MobileStepperWithCaraousels onClick={action('clicked')}></MobileStepperWithCaraousels>

 export const VerticalStepper = () => <VerticalSteppers onClick={action('clicked')}></VerticalSteppers>
 