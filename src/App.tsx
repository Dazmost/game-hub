import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // large devices are larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* what we put inside will be rendered on large screens and above */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
