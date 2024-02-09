import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "bottom"`,
        lg: `"nav nav" "aside main" "bottom bottom"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" bg="blue">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="orange">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
      <GridItem area="bottom" bg="grey">
        Bottom
      </GridItem>
    </Grid>
  );
}

export default App;
