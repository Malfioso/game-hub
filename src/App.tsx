import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box bg="black" minH="100vh">
      <Grid
        templateAreas={{
          base: `"nav"
                  "main"`,
          lg:`"nav nav" "aside main"` //1024px  
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
  );
}

export default App;
