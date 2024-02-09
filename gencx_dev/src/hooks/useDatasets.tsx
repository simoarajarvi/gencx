import datasets from "../dummy_data/datasets";

export interface Dataset_impl {
  id: number;
  name: string;
  type: string;
}

const useDatasets = () => ({ data: datasets, isLoading: false, error: null })

export default useDatasets;