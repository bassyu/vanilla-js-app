const BASE_URL = 'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev';

export const getNodes = async (id) => {
  const fullURL = `${BASE_URL}/${id}`;
  const response = await fetch(fullURL);
  if (response.ok) {
    const nodes = await response.json();
    return nodes;
  } else {
    throw new Error();
  }
};
