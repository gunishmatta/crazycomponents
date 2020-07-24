import React from 'react'
import {action} from '@storybook/addon-actions';
import InsetDividers from '../components/material/Dividers/InsetDividers'
import ListDividers from '../components/material/Dividers/ListDividers'
import MiddleDividers from '../components/material/Dividers/MiddleDividers'
import SubheaderDividers from '../components/material/Dividers/SubheaderDividers'


export default {
    component : InsetDividers,
    title : 'Dividers',
    excludeStories: /.*Data$/,
};


 export const InsetDivider = () => <InsetDividers onClick={action('clicked')}></InsetDividers>;

 export const ListDivider = () => <ListDividers onClick={action('clicked')}></ListDividers>
 export const MiddleDivider = () => <MiddleDividers onClick={action('clicked')}></MiddleDividers>
 export const SubheaderDivider = () => <SubheaderDividers onClick={action('clicked')}></SubheaderDividers>
 