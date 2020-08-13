import { GET_MATCHES } from "./matchesTypes";

export const getMatches = (numOfMatchesToGet = 5) => {
  return {
    type: GET_MATCHES,
    payload: numOfMatchesToGet,
  };
};
