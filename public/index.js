// const { default: axios } = require("axios");
// 
// const axios = require("axios");
getCatFact = () => {
  axios.get('https://cat-fact.herokuapp.com/facts')
    .then(response => {
      const fact = document.getElementById('cat-fun-facts');
      const catFact = Math.floor((Math.random() * response.data.length));
      fact.innerHTML = response.data[catFact].text;
      console.log(response.data[catFact].text);
      // console.log(response.data);
      // console.log(catFact);
    }).catch(error => {
      console.log(error);
    });
}

getAdvise = () => {
  const advise = document.getElementById('advise');
  axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      advise.innerHTML = response.data.slip.advice;
      console.log(response.data.slip.advice);
    }).catch(error => {
      console.log(error);
    });
}
getRandomCat = () => {
  axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      document.getElementById("imgClickAndChange").src = response.data[0].url;
      console.log(response.data[0].url);
    }).catch(error => {
      console.log(error);
    });
}
// getCatFact();
// getAdvise();