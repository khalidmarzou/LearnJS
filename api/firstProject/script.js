// Function to get element by ID
function getElementById(id) {
  return document.getElementById(id);
}

// Select elements from the DOM
let ipv4Title = document.querySelector("header > #address > h3:first-of-type");
let adressDIV = getElementById("address");
let dateTimeDIV = getElementById("dateTime");

// Fetch client's IP address
let ipAdd = fetch("https://api.bigdatacloud.net/data/client-ip")
  .then((ipv4) => ipv4.json())
  .then((ip) => {
    // Update IPv4 title with fetched IP address
    ipv4Title.innerHTML += " " + ip.ipString;

    // Fetch location details based on IP address
    fetch(`http://ip-api.com/json/${ip.ipString}`)
      .then((location) => location.json())
      .then((location) => {
        // Create and append country element
        let country = document.createElement("h3");
        country.innerHTML = '<i class="bi bi-geo-alt"></i> ' + location.country;
        adressDIV.append(country);
        return location;
      })
      .then((location) => {
        // Create and append city element
        let city = document.createElement("h3");
        city.innerHTML = '<i class="bi bi-geo-fill"></i> ' + location.city;
        adressDIV.append(city);
      })
      .catch((error) => {
        alert("Error in fetching location details.",error);
      });
  })
  .catch((error) => {
    alert("Error in fetching IP address.",error);
  });

// Create element to display date
let dateHtml = document.createElement("h3");

// Function to update date and time
function updateTime() {
  let timeHtml = getElementById("timeHtml");
  let dateTime = new Date();
  let dateTimeString = dateTime.toString();
  let date = dateTimeString.slice(0, 15);
  dateHtml.innerText = date;
  dateHtml.style.textAlign = "center";
  dateTimeDIV.insertBefore(dateHtml, timeHtml);
  let hours = dateTime.getHours();
  let min = dateTime.getMinutes();
  let seconds = dateTime.getSeconds();

  if (seconds < 10) {
    timeHtml.children[2].innerText = "0" + seconds;
  } else {
    timeHtml.children[2].innerText = seconds;
  }
  if (min < 10) {
    timeHtml.children[1].innerText = "0" + min;
  } else {
    timeHtml.children[1].innerText = min;
  }
  if (hours < 10) {
    timeHtml.children[0].innerText = "0" + hours;
  } else {
    timeHtml.children[0].innerText = hours;
  }
}

// Update date and time every 100 milliseconds
setInterval(updateTime, 100);

// Fetch news articles and create cards to display them
let main = document.getElementsByTagName("main")[0];
fetch(
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9bae2c787edd435bba8f1dee5b77c22d"
)
  .then((Response) => Response.json())
  .then((data) => data.articles)
  .then((articles) => {
    articles.forEach((element) => {
      let article = document.createElement("article");
      let cardTitle = document.createElement("h5");
      let cardText = document.createElement("p");
      let cardImg = document.createElement("img");
      let cardLink = document.createElement("a");
      let cardBody = document.createElement("div");
      article.classList.add("card");
      article.style.width = "23%";
      cardImg.classList.add("card-img-top");
      if (element.urlToImage === null) {
        cardImg.setAttribute(
          "src",
          "360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
        );
      } else {
        cardImg.setAttribute("src", element.urlToImage);
      }
      cardImg.style.height = "40%";
      cardBody.classList.add("card-body");
      cardTitle.innerText = element.title;
      cardTitle.classList.add("card-title");
      cardText.classList.add("card-text");
      cardText.innerText = element.content;
      cardLink.innerText = "See more";
      cardLink.classList.add("link");
      cardLink.setAttribute("href", element.url);
      cardBody.append(cardTitle);
      cardBody.append(cardText);
      cardBody.append(cardLink);
      article.append(cardImg);
      article.append(cardBody);
      main.append(article);
    });
  }).catch((error) => {
    alert("Error in fetching articles.",error);
  });
