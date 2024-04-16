import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}


const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          console.log("Request was canceled");
        } else {
          setError(error.message);
        }
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
        {Array.isArray(games) && games.length > 0 ? (
          games.map((game) => (
            <GridItem key={game.id} w="100%" h="10" bg="blue.500">
              {game.name}
            </GridItem>
          ))
        ) : (
          <div>No games found.</div>
        )}
      </Grid>
    </>
  );
};

export default GameGrid;
