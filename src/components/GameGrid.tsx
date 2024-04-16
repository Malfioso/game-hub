import { Grid, GridItem } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  
  const { games, error } = useGames();
  
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {games.map((game) => (
            <GridItem key={game.id} w="100%" h="10" bg="blue.500">
              {game.name}
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default GameGrid;
