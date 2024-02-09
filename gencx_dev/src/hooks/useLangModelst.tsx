import llm_models from "../dummy_data/llm_models";

export interface LLM_impl {
  id: number;
  name: string;
  type: string;
}

const useLangModels = () => ({ data: llm_models, isLoading: false, error: null })

export default useLangModels;