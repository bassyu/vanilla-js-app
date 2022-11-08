const BASE_URL =
  'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev';

export const request = async (id = '') => {
  const fullURL = `${BASE_URL}/${id}`;

  try {
    const response = await fetch(fullURL);
    if (!response.ok) {
      throw new Error();
    }

    const nodes = await response.json();
    return nodes;
  } catch (e) {
    console.log(e);
  }
};
