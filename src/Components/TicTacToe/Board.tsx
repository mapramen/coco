import _ from "lodash";
import React from 'react';
import { useSelector } from "react-redux";
import { Box, Flex, Header } from "@fluentui/react-northstar";
import { RootState } from "../../Reducers/RootReducer";
import Tile from './Tile';
import GameStatusHeader from "./GameStatusHeader";
import { selectGameName } from "../../Selectors/GameSelector";

export default function Board() {
  const gameName = useSelector((state: RootState) => selectGameName(state));

  function renderRow(rowNumber: number) {
    var row = _.range(3 * rowNumber, 3 * rowNumber + 3)
      .map(tileNumber => <Tile tileNumber={tileNumber} />);

    return <Flex gap="gap.medium" padding="padding.medium" hAlign="center" key={rowNumber}>
      {row}
    </Flex>
  }

  var rows = _.range(0, 3).map(rowNumber => renderRow(rowNumber));

  return (
    <Box>
      <Header content={gameName} align="center" />
      <GameStatusHeader />
      <>
        {rows}
      </>
    </Box>
  );
}