import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "./hooks/useGames";


const GameGrid = () => {
  
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();

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
