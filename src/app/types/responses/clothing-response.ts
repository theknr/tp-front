type ClothingAPIResponse = {
  name: string;
  payload: ClothingResponse[];
};

type ClothingResponse = {
  id: string;
  date: string;
  clothe: string;
};

export default ClothingAPIResponse;
