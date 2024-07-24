import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({children}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit)
    return (<Text marginBottom={10} >{children}</Text>)

  const summary = (expanded) ?  children : children.substring(0, limit) + '...'

  return (
  <Text marginBottom={10}>
    {summary}
    <Button onClick={() => setExpanded(!expanded)} size='xs' marginLeft={1} fontWeight="bold" colorScheme="yellow" >{(expanded) ? 'Show Less' : 'Read More'}</Button>
  </Text>
)

}

export default ExpandableText