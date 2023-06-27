const axios = require('axios');

async function test(title) {
  let returnArr = [];
  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: {
      query: title
    },
    headers: {
      'X-RapidAPI-Key': 'e149f8f771msh13670b981967600p15bfa1jsna7a96a2a1df7',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    // Check if response.data is an array
    if (Array.isArray(response.data)) {
      returnArr = response.data.map((item) => ([
        item.title,
        item.ingredients,
        item.servings,
        item.instructions
      ]));
    }

    return returnArr;
  } catch (error) {
    console.error(error);
  }
}


async function fetchData(title) {
  try {
    const result = await test(title);
    return result;
  } catch (error) {
    console.error(error); 
  }
}

export default function sendData (title){
  const response = fetchData(title);
  return response;
}