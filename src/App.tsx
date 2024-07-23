import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'



function App() {

  return (
   <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
   }} templateColumns={{
    base: '1fr',
    lg: '200px 1fr'
   }} >
    <GridItem area="nav" >
      <NavBar />
    </GridItem>
    <Show above='lg'>
    <GridItem area="aside" paddingX={5} >
      <GenreList />
    </GridItem>
    </Show>
    <GridItem area="main">
      <GameHeading />
      <HStack spacing={5} paddingX={10} marginTop={5} >
        <PlatformSelector />
        <SortSelector />
      </HStack>
      <GameGrid  />
    </GridItem>
   </Grid>
  )
}

export default App
