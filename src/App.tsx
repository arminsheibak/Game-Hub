import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './components/hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './components/hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genreId?: number ;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  return (
   <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
   }} templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
   }} >
    <GridItem area="nav" >
      <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
    </GridItem>
    <Show above='lg'>
    <GridItem area="aside" paddingX={5} >
      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id })} selectedGenreId={gameQuery.genreId} />
    </GridItem>
    </Show>
    <GridItem area="main">
      <GameHeading gameQuery={gameQuery} />
      <HStack spacing={5} paddingX={10} marginTop={5} >
        <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery ,platformId: platform.id})} />
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
      </HStack>
      <GameGrid gameQuery={gameQuery}  />
    </GridItem>
   </Grid>
  )
}

export default App
