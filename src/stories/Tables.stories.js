import React from 'react'
import {action} from '@storybook/addon-actions';
import SimpleTables from '../components/material/Tables/SimpleTables'
import SpanningTables from '../components/material/Tables/SpanningTables'
import CustomActionPaginationTables from '../components/material/Tables/CustomActionPaginationTables'
import CustomizedTables from '../components/material/Tables/CustomizedTables'
import DenseTables from '../components/material/Tables/DenseTables'
import SortingandSelectingTables from '../components/material/Tables/SortingandSelectingTables'

export default {
    component : SimpleTables,
    title : 'Tables',
    excludeStories: /.*Data$/,
};

 export const SimpleTable = () => <SimpleTables onClick={action('clicked')}></SimpleTables>;

 export const SpanningTable = () => <SpanningTables onClick={action('clicked')}></SpanningTables>

 export const SortingandSelectingTable = () => <SortingandSelectingTables onClick={action('clicked')}></SortingandSelectingTables>

 export const CustomActionPaginationTable = () => <CustomActionPaginationTables onClick={action('clicked')}></CustomActionPaginationTables>

 export const CustomizedTable = () => <CustomizedTables onClick={action('clicked')}></CustomizedTables>

 export const DenseTable = () => <DenseTables onClick={action('clicked')}></DenseTables>
 