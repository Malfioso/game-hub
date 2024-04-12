import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Box minH="10vh">
        <Grid
          templateAreas={{
            base: `"nav"
                  "main"`,
            lg: `"nav nav" "aside main"`, //1024px
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" bg="gold">
              aside
            </GridItem>
          </Show>
          <GridItem area="main" bg="dodgerblue">
            main
          </GridItem>
        </Grid>
      </Box>
      <GameGrid />
    </>
  );
}

export default App;
