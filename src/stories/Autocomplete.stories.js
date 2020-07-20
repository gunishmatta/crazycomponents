import React from 'react'
import {action} from '@storybook/addon-actions';
import Downshift from '../components/Downshift'
import ReactSelect from '../components/ReactSelect'

export default {
    component : Downshift,
    title : 'Autocomplete Downshift',
    excludeStories: /.*Data$/,
};


 export const AutocompleteDownshift = () => <Downshift onClick={action('clicked')}>Autocomplete</Downshift>;

 export const ReactSelect1 = () => <ReactSelect onClick={action('clicked')}></ReactSelect>