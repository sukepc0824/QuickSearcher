const engine = {
    google: {
        name: "Google",
        icon: 'img/google.svg',
        suggestAPI: 'https://www.google.com/complete/search?client=firefox&q=',
        searchLink: 'https://www.google.com/search?q=',
        startPage: 'https://www.google.com'
    },
    youtube: {
        name: "Youtube",
        icon: 'img/youtube.svg',
        suggestAPI: 'http://clients1.google.com/complete/search?hl=en&ds=yt&client=firefox&q=',
        searchLink: 'https://www.youtube.com/results?search_query=',
        startPage: 'https://www.youtube.com/'
    },
    wikipedia: {
        name: "Wikipedia",
        icon: 'img/wikipedia.svg',
        suggestAPI: 'https://ja.wikipedia.org/w/api.php?action=opensearch&format=json&search=',
        searchLink: 'https://ja.wikipedia.org/w/index.php?search=',
        startPage: 'https://ja.wikipedia.org'
    },
    twitter: {
        name: "Twitter",
        icon: 'img/twitter.svg',
        suggestAPI: undefined,
        searchLink: 'https://twitter.com/search?q=',
        startPage: 'https://twitter.com/home'
    }
}