import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleTabs from '../components/material/Tabs/SimpleTabs'
import CenteredTabs from '../components/material/Tabs/CenteredTabs'
import DisabledTabs from '../components/material/Tabs/DisabledTabs'
import ForcedScrollButtons from '../components/material/Tabs/ForcedScrollButtons'
import FullWidthTabs from '../components/material/Tabs/FullWidthTabs'
import IconTabs from '../components/material/Tabs/IconTabs'
import NavTabs from '../components/material/Tabs/NavTabs'
import PreventScrollButtons from '../components/material/Tabs/PreventScrollButtons'
import WrappedLabels from '../components/material/Tabs/WrappedLabels'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : SimpleTabs,
    title : 'Tabs',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleTab = () => <SimpleTabs onClick={action('clicked')}></SimpleTabs>;

 export const CenteredTab = () => <CenteredTabs onClick={action('clicked')}></CenteredTabs>

 export const DisabledTab = () => <DisabledTabs onClick={action('clicked')}></DisabledTabs>

 export const ForcedScrollButton = () => <ForcedScrollButtons onClick={action('clicked')}></ForcedScrollButtons>

 export const IconTab = () => <IconTabs onClick={action('clicked')}></IconTabs>

 export const NavTab = () => <NavTabs onClick={action('clicked')}></NavTabs>

 export const PreventScrollButton = () => <PreventScrollButtons onClick={action('clicked')}></PreventScrollButtons>

 export const WrappedLabel = () => <WrappedLabels onClick={action('clicked')}></WrappedLabels>

