import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Map from "./components/Map/Map.component";
import Filter from "./components/Filter/Filter.component";

function App() {
  // const [selected, setSelected] = useState("");

  // const changeSelected = useCallback(
  //   // will use this when list of stores are hovered, and point which one is hovered on map.
  //   e => {
  //     setSelected(e.target.value);
  //   },
  //   [setSelected]
  // );

  return (
    <div className="App">
      <AppContent>
        <Map />
        <Filter />
      </AppContent>
    </div>
  );
}

const AppContent = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
