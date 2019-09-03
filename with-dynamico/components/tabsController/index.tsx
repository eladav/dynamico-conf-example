import React from 'react';    
import { Tab, Tabs } from 'native-base';

const TabsController = ({tabs}: any) => (
  <Tabs tabBarPosition={'top'}>
      {tabs.map(({heading, Page}: any) => <Tab key={heading} heading={heading}><Page /></Tab>)}
  </Tabs>
);

export default TabsController;