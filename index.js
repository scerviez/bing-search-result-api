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
      `https://www.bing.com/search?q=${query}`
    )
    .then(function ({ data }) {
      let $ = cheerio.load(data)

      const title = []
      const links = []

      $(".b_algo > h2").each((i, el) => {
        title[i] = $(el).text();
      });
      $(".b_algo > h2 > a").each((i, el) => {
        links[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < links.length; i++) {
        result[i] = {
          title: title[i],
          link: links[i],
        };
      }
      return result
      })
    }

module.exports = { search }
