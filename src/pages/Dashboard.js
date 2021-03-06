import React from 'react'
import {PieChart} from 'react-minimal-pie-chart'

import Layout from '../ui/Layout'

const Dashboard = () => {
    return (
        <Layout>
            
            <PieChart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </Layout>
    )
}

export default Dashboard
