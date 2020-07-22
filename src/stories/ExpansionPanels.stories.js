import React from 'react'
import {action} from '@storybook/addon-actions';
import ControlledAccordinPanels from '../components/material/ExpansionPanels/ControlledAccordinPanels'
import CustomizedExpansionPanels from '../components/material/ExpansionPanels/CustomizedExpansionPanels'
import SecondaryHeadingPanels from '../components/material/ExpansionPanels/SecondaryHeadingPanels'
import SimpleExpansionPanels from '../components/material/ExpansionPanels/SimpleExpansionPanels';


export default {
    component : SimpleExpansionPanels,
    title : 'Expansion Panels',
    excludeStories: /.*Data$/,
};


 export const SimpleExpansionPanel = () => <SimpleExpansionPanels onClick={action('clicked')}></SimpleExpansionPanels>;

 export const ControlledAccordinPanel = () => <ControlledAccordinPanels onClick={action('clicked')}></ControlledAccordinPanels>
  
 export const CustomizedExpansionPanel = () => <CustomizedExpansionPanels onClick={action('clicked')}></CustomizedExpansionPanels>
 
 export const SecondaryHeadingPanel = () => <SecondaryHeadingPanels onClick={action('clicked')}></SecondaryHeadingPanels>