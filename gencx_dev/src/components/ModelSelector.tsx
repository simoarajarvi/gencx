import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs"; // npm ii react-icons@4.7.1
import { LLM_impl } from "../hooks/useLangModelst";
import useLangModels from "../hooks/useLangModelst";

interface Props { 
  onSelectLLM: (llm_impl: LLM_impl) => void;
  selectedLLM: LLM_impl | null;
}

const ModelSelector = ({ onSelectLLM, selectedLLM }: Props) => {
const { data, error } = useLangModels();

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedLLM?.name || 'Select LLM'}
      </MenuButton>
      <MenuList>
        {data.map(llm_impl => <MenuItem onClick={() => onSelectLLM(llm_impl)} key={llm_impl.id}>{llm_impl.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default ModelSelector;