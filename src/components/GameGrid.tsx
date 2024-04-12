import { Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

const requestAllGames = async () => {
  const controller = new AbortController();
  const request = apiClient.get("/games").then((response) => {
    const games: Game[] = response.data;
    console.log(games);
  });
  return { request, cancel: () => controller.abort() };
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
      <GridItem w="100%" h="10" bg="blue.500" key={games.id} />
    </Grid>
  );
};

export default GameGrid;
