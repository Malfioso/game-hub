import { Box, Grid, GridItem, Show } from "@chakra-ui/react";

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
        <GridItem area="nav" bg="coral">
          nav
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
