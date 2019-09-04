import React from 'react';    
import { Tab, Tabs } from 'native-base';

const TabsController = ({tabs}) => (
  <Tabs tabBarPosition={'top'}>
      {tabs.map(({heading, Page}) => <Tab key={heading} heading={heading}><Page /></Tab>)}
  </Tabs>
);

export default TabsController;