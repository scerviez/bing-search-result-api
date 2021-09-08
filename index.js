const axios = require('axios')
const cheerio = require('cheerio')

const AXIOS_OPTIONS = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  },
};

 function search(query) {
  return axios
    .get(
      `https://www.bing.com/images/search?q=${query}`,
      AXIOS_OPTIONS
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)

      const url = []
      
     $(".imgpt > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
        result[i] = {
          link: 'https://bing.com'+url[i]
        };
      }
      return(result);
    });
}

module.exports = { search }
