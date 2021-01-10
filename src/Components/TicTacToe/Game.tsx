import { Flex } from '@fluentui/react-northstar';
import React from 'react';
import Board from './Board';
import EventLog from './EventLog';
import Information from './Information';

export default function Game() {
  return (
    <Flex hAlign="center">
      {/* <Information /> */}
      <Board />
      {/* <EventLog /> */}
    </Flex>
  );
};
