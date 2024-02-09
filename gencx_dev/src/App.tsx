import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { LLM_impl } from "./hooks/useLangModelst";
import ModelSelector from "./components/ModelSelector";
import { Dataset_impl } from "./hooks/useDatasets";
import DatasetSelector from "./components/DatasetSelector";


export interface ConfigQuery { 
  
  llm_impl: LLM_impl | null;
  dataset_impl: Dataset_impl | null;
  
}

function App() {

  const [configQuery, setConfigQuery] = useState<ConfigQuery>({} as ConfigQuery);

  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <NavBar/>
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
  
  <ModelSelector selectedLLM={configQuery.llm_impl} onSelectLLM={(llm_impl) => setConfigQuery({ ...configQuery, llm_impl}) } />
  <DatasetSelector selectedDataset={configQuery.dataset_impl} onSelectDataset={(dataset_impl) => setConfigQuery({ ...configQuery, dataset_impl}) } />
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  );
}

export default App;
