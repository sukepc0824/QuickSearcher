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
        suggestAPI: 'https://clients1.google.com/complete/search?hl=en&ds=yt&client=firefox&q=',
        searchLink: 'https://www.youtube.com/results?search_query=',
        startPage: 'https://www.youtube.com'
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
    },
    amazon: {
        name:"Amazon",
        icon:'img/amazon.svg',
        suggestAPI: undefined,
        searchLink:'https://www.amazon.co.jp/s?k=',
        startPage:'https://amazon.co.jp'
    },
    yahoo: {
        name:"Yahoo!-JP",
        icon:'img/yahoo.svg',
        suggestAPI:'https://ff.search.yahoo.com/gossip?output=fxjson&command=',
        searchLink:'https://search.yahoo.co.jp/search?p=',
        startPage:'https://yahoo.co.jp'
    },
    facebook: {
        name:"facebook",
        icon:'img/facebook.svg',
        suggestAPI:undefined,
        searchLink:'https://facebook.com/search/?q=',
        startPage:'https://facebook.com'
    },
    bing: {
        name:"bing",
        icon:'img/bing.svg',
        suggestAPI:undefined,
        searchLink:'https://www.nicovideo.jp/search/',
        startPage:'https://nicovideo.jp'
    }
}
