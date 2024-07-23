import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId =  useGameQueryStore( s => s.gameQuery.genreId)
  const setGenreId =  useGameQueryStore( s => s.setGenreId)

  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && null}
      <Heading marginBottom={4} fontSize='2xl' >Genres</Heading>
      {isLoading && <Spinner />}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)
                }
              />
              <Button whiteSpace="normal" textAlign="left"
                fontWeight={
                  genre.id === selectedGenreId ? "bolder" : "normal"
                }
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
