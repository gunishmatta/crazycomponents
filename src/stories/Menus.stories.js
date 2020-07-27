import React from 'react'
import {action} from '@storybook/addon-actions';
import ChangeTransitions from '../components/material/Menus/ChangeTransitions'
import CustomizedMenus from '../components/material/Menus/CustomizedMenus'
import Limitations from '../components/material/Menus/Limitations'
import MaxHeightMenus from '../components/material/Menus/MaxHeightMenus'
import MenuListCompositions from '../components/material/Menus/MenuListCompositions'
import SelectedMenus from '../components/material/Menus/SelectedMenus'
import SimpleMenus from '../components/material/Menus/SimpleMenus'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component : SimpleMenus,
    title : 'Menus',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
};


 export const SimpleMenu = () => <SimpleMenus onClick={action('clicked')}></SimpleMenus>;

 export const SelectedMenu = () => <SelectedMenus onClick={action('clicked')}></SelectedMenus>
 export const CustomizedMenu = () => <CustomizedMenus onClick={action('clicked')}></CustomizedMenus>
 export const MaxHeightMenu = () => <MaxHeightMenus onClick={action('clicked')}></MaxHeightMenus>
 export const LimitationMenu = () => <Limitations onClick={action('clicked')}></Limitations>

 export const MenuListComposition = () => <MenuListCompositions onClick={action('clicked')}></MenuListCompositions>

 export const ChangeTransitionMenu = () => <ChangeTransitions onClick={action('clicked')}></ChangeTransitions>
 