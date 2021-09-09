# bing-result-search

Node js package to looking for Something on Bing.com

# Installation

```
npm install bing-search-result-api
```

# Example

```
const bing = require('bing-search-result-api')

bing.search('indonesia').then(res => console.log(res))
```

# Example Response
```
[
  {
    title: 'Indonesia - Wikipedia',
    link: 'https://en.wikipedia.org/wiki/Indonesia'
  },
  {
    title: 'Indonesia - Wikipedia bahasa Indonesia, ensiklopedia bebas',
    link: 'https://id.wikipedia.org/wiki/Indonesia'
  },
  {
    title: 'Laman Resmi Republik Indonesia • Portal Informasi Indonesia',
    link: 'https://indonesia.go.id/'
  },
  {
    title: 'Indonesia | Facts, People, and Points of Interest | Britannica',
    link: 'https://www.britannica.com/place/Indonesia'
  },
  {
    title: 'Berita - BBC News Indonesia',
    link: 'https://www.bbc.com/indonesia'
  },
  {
    title: '25 reasons why you should never travel to Indonesia',
    link: 'https://indonesia.tripcanvas.co/travel-to-indonesia/'
  },
  {
    title: 'Latest Indonesia News - ANTARA News',
    link: 'https://en.antaranews.com/'
  },
  {
    title: 'Sign in - AIM Indonesia | Ministri Of Transportation',
    link: 'https://aimindonesia.dephub.go.id/signin.php'
  },
  { title: 'Google', link: 'http://www.google.co.id/' },
  {
    title: 'Situs Resmi Lenovo® Indonesia | Laptop, Tablet, Desktop, Pusat …',
    link: 'https://www.lenovo.com/id/in'
  }
]
```

Thank You For Using This Api. If Have Bug Just Pull Request/Issue

Have Fun To Use!

# License
MIT
