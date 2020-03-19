url="https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=0"
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });