import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs"; // npm ii react-icons@4.7.1
import useDatasets, { Dataset_impl } from "../hooks/useDatasets";
import useLangModels from "../hooks/useLangModelst";

interface Props { 
  onSelectDataset: (dataset_impl: Dataset_impl) => void;
  selectedDataset: Dataset_impl | null;
}

const DatasetSelector = ({ onSelectDataset, selectedDataset }: Props) => {
const { data, error } = useDatasets();

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedDataset?.name || 'Select Dataset'}
      </MenuButton>
      <MenuList>
        {data.map(dataset_impl => <MenuItem onClick={() => onSelectDataset(dataset_impl)} key={dataset_impl.id}>{dataset_impl.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default DatasetSelector;