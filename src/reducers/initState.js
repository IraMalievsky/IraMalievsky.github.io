const initState = {
    categoryFilter: 'Fashion',
    articles: [
      {
        id: '1',
        title: 'Elections of USA 2020',
        author: 'Jacob Yang',
        category: 'Politics',
        content: 'Dont belive what people say about Electronics, it is back now and powerfull than ever!...',
        url: '',
        isFromSearch: false
      },
      {
        id: '2',
        title: 'The right way to wear hats',
        author: 'Melisa Rendel',
        category: 'Fashion',
        content: 'how would you wear a hat? with a dress? a coat? all answer are correct!....',
        image: '',
        url: '',
        isFromSearch: false
      },
      {
        id: '3',
        title: 'Not the only way to wear a skirt !',
        author: 'Barbare Jackson',
        category: 'Fashion',
        content: 'some text over here lalalal over here too..',
        image: '',
        url: '',
        isFromSearch: false
      },
      {
        id: '4',
        title: 'A week in Paris',
        author: 'Michael Fin',
        category: 'Fashion',
        content: 'BLah Blah BLh sdfghj and some mor eblah blah....',
        image: '',
        url: '',
        isFromSearch: false
      },
      {
        id: '5',
        title: 'USA army',
        author: 'Allan Shin',
        category: 'Politics',
        content: 'Contrary to popular belief, Lorem Ipsum is not simple...',
        image: '',
        url: '',
        isFromSearch: false
      },    {
        id: '6',
        title: 'President Trump is back!',
        author: 'Dave Armson',
        category: 'Politics',
        content: 'Be ware of THE TRUMP! ladies and gentelmans here he comes..',
        image: '',
        url: '',
        isFromSearch: false

      },
      {
        id: '7',
        title: 'Oh hail the heels (:',
        author: 'Ira Malievsky',
        category: 'Fashion',
        content: 'OMG ! Im not getting out of my house without heels, like come on!...',
        image: '',
        url: '',
        isFromSearch: false
      }
    ],
    searchResults: {
        loading: '',
        receivedArt: [],
        error: ''
    }    
  };
export default initState;  