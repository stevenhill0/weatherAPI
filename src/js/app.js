const weatherData = async () => {
  const api =
    'https://api.openweathermap.org/data/2.5/weather?id=3369157&units=metric&appid=e89e58f5284023098199c84d0c8e007f';
  const capeTown = await fetch(api);
  const data = await capeTown.json();

  const {
    name,
    main: { temp },
    weather: [{ description }],
  } = data;

  const cityName = document.getElementById('name');
  cityName.innerHTML = `Name: ${name}`;

  const temperature = document.getElementById('temperature');
  temperature.innerHTML = `Temperature: ${temp}`;

  const weatherDescript = document.getElementById('weatherDescription');
  weatherDescript.innerHTML = `Weather Description: ${description}`;

  // console.log(data);
};

weatherData();
