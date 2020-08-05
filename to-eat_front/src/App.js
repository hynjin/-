import React from "react";
import styled from "styled-components";

import Map from "./components/Map/Map.component";
import Filter from "./components/Filter/Filter";

function App() {
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
