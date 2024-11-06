type APIAuthResponse = {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
};

export default APIAuthResponse;
