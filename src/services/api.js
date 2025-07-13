const API_KEY = "b61db00489af630f29fe710ace7f8aa2";
const BASE_URI = "https://api.openweathermap.org/data/2.5";

export const searchCities = async (query) => {
  const response = await fetch(
    `${BASE_URI}/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();
  return data;
};
