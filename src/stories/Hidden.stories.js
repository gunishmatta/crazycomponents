import React from 'react'
import {action} from '@storybook/addon-actions';
import BreakpointDowns from '../components/material/Hidden/BreakpointDowns'
import BreakpointOnlyy from '../components/material/Hidden/BreakpointOnlyy'
import BreakpointUps from '../components/material/Hidden/BreakpointUps'
import IntegrationwithGrids from '../components/material/Hidden/IntegrationwithGrids'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : BreakpointDowns,
    title : 'Hidden',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const BreakpointDown = () => <BreakpointDowns onClick={action('clicked')}></BreakpointDowns>;

 export const BreakpointOnly = () => <BreakpointOnlyy onClick={action('clicked')}></BreakpointOnlyy>
 export const BreakpointUp = () => <BreakpointUps onClick={action('clicked')}></BreakpointUps>
 export const IntegrationwithGrid = () => <IntegrationwithGrids onClick={action('clicked')}></IntegrationwithGrids>
 