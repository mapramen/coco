import React from 'react';
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import HeaderContainer from './HeaderContainer';
import BodyContainer from './BodyContainer';

export default function App() {
  return (
    <Provider theme={teamsTheme} >
      <HeaderContainer />
      <BodyContainer />
    </Provider>
  );
};
