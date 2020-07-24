import React from 'react'
import {action} from '@storybook/addon-actions';
import ControlledToolTips from '../components/material/ToolTips/ControlledToolTips'
import CustomisedToolTips from '../components/material/ToolTips/CustomisedToolTips'
import DisabledElements from '../components/material/ToolTips/DisabledElements'
import InteractiveToolTips from '../components/material/ToolTips/InteractiveToolTips'
import PositionedToolTips from '../components/material/ToolTips/PositionedToolTips'
import ShowingandHidingToolTips from '../components/material/ToolTips/ShowingandHidingToolTips'
import ToolTips from '../components/material/ToolTips/ToolTips'
import TransitionToolTips from '../components/material/ToolTips/TransitionToolTips'
import TriggersToolTips from '../components/material/ToolTips/TriggersToolTips'
import VariableWidthToolTips from '../components/material/ToolTips/VariableWidthToolTips'



export default {
    component : ToolTips,
    title : 'Tooltips',
    excludeStories: /.*Data$/,
};


 export const ToolTip = () => <ToolTips onClick={action('clicked')}></ToolTips>;

 export const ControlledToolTip = () => <ControlledToolTips onClick={action('clicked')}></ControlledToolTips>
 export const CustomisedToolTip = () => <CustomisedToolTips onClick={action('clicked')}></CustomisedToolTips>
 export const DisabledElement = () => <DisabledElements onClick={action('clicked')}></DisabledElements>
 export const InteractiveToolTip = () => <InteractiveToolTips onClick={action('clicked')}></InteractiveToolTips>

 export const PositionedToolTip = () => <PositionedToolTips onClick={action('clicked')}></PositionedToolTips>

 export const ShowingandHidingToolTip = () => <ShowingandHidingToolTips onClick={action('clicked')}></ShowingandHidingToolTips>
 
 export const TransitionToolTip = () => <TransitionToolTips onClick={action('clicked')}></TransitionToolTips>
 
 export const TriggersToolTip = () => <TriggersToolTips onClick={action('clicked')}></TriggersToolTips>
 
 export const VariableWidthToolTip = () => <VariableWidthToolTips onClick={action('clicked')}></VariableWidthToolTips>
 