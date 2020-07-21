import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleTLists from '../components/material/TransferLists/SimpleTLists'
import EnhancedTLists from '../components/material/TransferLists/EnhancedTLists'


export default {
    component : SimpleTLists,
    title : 'Transfer Lists',
    excludeStories: /.*Data$/,
};


 export const SimpleTransferList = () => <SimpleTLists onClick={action('clicked')}></SimpleTLists>;

 export const EnhancedTransferList = () => <EnhancedTLists onClick={action('clicked')}></EnhancedTLists>
 