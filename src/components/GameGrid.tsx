import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text> {error.message} </Text>;

  const fetchedGamesConut = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  ) || 0;

  return (
    <>
      <InfiniteScroll dataLength={fetchedGamesConut} hasMore={!!hasNextPage} next={()=> fetchNextPage()} loader={<Spinner />}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          padding={10}
        >
          {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
