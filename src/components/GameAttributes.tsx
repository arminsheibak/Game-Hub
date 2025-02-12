import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../entities/Game"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props {
  game: Game
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid as='dl' columns={2}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(p => <Text>{p.platform.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map(g => <Text key={g.id} >{g.name}</Text>)}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map(p => <Text>{p.name}</Text>)}
      </DefinitionItem>
    </SimpleGrid>
  )
}

export default GameAttributes