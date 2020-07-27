import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleLists from '../components/material/Lists/SimpleLists'
import AlignListItems from '../components/material/Lists/AlignListItems'
import CheckBoxItems from '../components/material/Lists/CheckBoxItems'
import CheckBoxLists from '../components/material/Lists/CheckBoxLists'
import FolderLists from '../components/material/Lists/FolderLists'
import InsetLists from '../components/material/Lists/InsetLists'
import InteractiveLists from '../components/material/Lists/InteractiveLists'
import NestedLists from '../components/material/Lists/NestedLists'
import PinnedSubheaderLists from '../components/material/Lists/PinnedSubheaderLists'
import SelectedListItems from '../components/material/Lists/SelectedListItems'
import VirtualisedLists from '../components/material/Lists/VirtualisedLists'
import SwitchLists from '../components/material/Lists/SwitchLists'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
    component : SimpleLists,
    title : 'Lists',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleList = () => <SimpleLists onClick={action('clicked')}></SimpleLists>;

 export const AlignListItem = () => <AlignListItems onClick={action('clicked')}></AlignListItems>
 export const CheckBoxItem = () => <CheckBoxItems onClick={action('clicked')}></CheckBoxItems>
 export const CheckBoxList = () => <CheckBoxLists onClick={action('clicked')}></CheckBoxLists>
 export const FolderList = () => <FolderLists onClick={action('clicked')}></FolderLists>
 export const InsetList = () => <InsetLists onClick={action('clicked')}></InsetLists>


 export const InteractiveList = () => <InteractiveLists onClick={action('clicked')}></InteractiveLists>

 export const NestedList = () => <NestedLists onClick={action('clicked')}></NestedLists>
 export const PinnedSubheaderList = () => <PinnedSubheaderLists onClick={action('clicked')}></PinnedSubheaderLists>
 export const SelectedListItem = () => <SelectedListItems onClick={action('clicked')}></SelectedListItems>
 export const SwitchList = () => <SwitchLists onClick={action('clicked')}></SwitchLists>
 export const VirtualisedList = () => <VirtualisedLists onClick={action('clicked')}></VirtualisedLists>
 