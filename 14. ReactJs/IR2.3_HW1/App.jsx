// 1. Given an array of objects, write a React component to display the total price of smartphones.

// const smartphones = [

//     { id: 1, brand: "Samsung", price: 799.99 },

//     { id: 2, brand: "iPhone", price: 999.99 },

//     { id: 3, brand: "Google Pixel", price: 899.99 },

//   ];



// 2. Given an array of objects, write a React component to display the average rating of hotels.

//  const hotels = [

//     { id: 1, name: "Luxury Hotel", rating: 4.8 },

//     { id: 2, name: "Budget Inn", rating: 3.5 },

//     { id: 3, name: "Resort Paradise", rating: 4.2 },

//   ];



// 3. Given an array of objects, write a React component to display the total number of podcast listeners.

// const podcasts = [

//     { id: 1, title: "Tech Talk", listeners: 5000 },

//     { id: 2, title: "Science Insights", listeners: 3000 },

//     { id: 3, title: "Comedy Hour", listeners: 7000 },

//   ];



// 4. Given an array of objects, write a React component to display the total retweets of all the tweets.

// const tweets = [

//     { id: 1, content: "Tweet 1", retweets: 20 },

//     { id: 2, content: "Tweet 2", retweets: 15 },

//     { id: 3, content: "Tweet 3", retweets: 30 },

//   ];



// 5. Given an array of objects, write a React component to display the total content word count of all articles.

//   const articles = [

//     { id: 1, title: "Article 1", content: "Content 1" },

//     { id: 2, title: "Article 2", content: "Content 2" },

//     { id: 3, title: "Article 3", content: "Content 3" },

//   ];



// 6. Given an array of objects, write a React component to display the total number of likes of "User1".

// const posts = [

//     { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },

//     { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },

//     { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },

//   ];

import './App.css'

const Smartphones = ({smartphones}) => {
  const totalPrice = smartphones.reduce((acc, curr) => acc + curr.price,0)
  return (
    <div>
      <h2>Total Price of Smartphones</h2>
      <p>{totalPrice}</p>
    </div>
  )
    
}

const Hotels = ({hotels}) =>{
  const totalRating = hotels.reduce((acc, curr) => acc + curr.rating,0)
  const averageRating = totalRating / hotels.length
  return(
    <div>
      <h2>Average Rating of Hotels</h2>
      <p>{averageRating.toFixed(2)}</p>
    </div>
  )
}

const Podcasts = ({podcasts}) =>{
  const totalPodcast = podcasts.reduce((acc, curr) => acc + curr.listeners,0)
  return(
    <div>
    <h2>Total Number of Podcasts Listeners</h2>
    <p>{totalPodcast}</p> 
  </div>
  )
}

const Tweets = ({tweets}) => {
  const totalTweets = tweets.reduce((acc, curr) =>
    acc + curr.retweets
  )
  
  return(
    <div>
      <h2>Total retweets of all the tweets.</h2>
      <p>{totalTweets}</p>
    </div>
  )
}

const Articles = ({articles}) => {
  const TotalWordCount = articles.reduce((acc, curr) => {
    const wordCount = curr.content.split(' ').length;
    return acc + wordCount
  },0)
  
  return(
    <div>
      <h2>Total Word Count</h2>
      <p>{TotalWordCount}</p>
    </div>
  )
}

const TotalLikesByUser = ({ posts, user }) => {
  const totalLikes = posts
    .filter((post) => post.user === user) // Filter posts by user
    .reduce((total, post) => total + post.likes, 0); // Sum up likes

  return <h2>Total Likes by {user}: {totalLikes}</h2>;
};


export default function App(){

  const smartphones = [

    { id: 1, brand: "Samsung", price: 799.99 },

    { id: 2, brand: "iPhone", price: 999.99 },

    { id: 3, brand: "Google Pixel", price: 899.99 },

  ];
 
  const hotels = [

    { id: 1, name: "Luxury Hotel", rating: 4.8 },

    { id: 2, name: "Budget Inn", rating: 3.5 },

    { id: 3, name: "Resort Paradise", rating: 4.2 },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", listeners: 5000 },

    { id: 2, title: "Science Insights", listeners: 3000 },

    { id: 3, title: "Comedy Hour", listeners: 7000 },

  ];

  const tweets = [

    { id: 1, content: "Tweet 1", retweets: 20 },

    { id: 2, content: "Tweet 2", retweets: 15 },

    { id: 3, content: "Tweet 3", retweets: 30 },

  ];

  const articles = [

    { id: 1, title: "Article 1", content: "Content 1" },

    { id: 2, title: "Article 2", content: "Content 2" },

    { id: 3, title: "Article 3", content: "Content 3" },

  ];



  const posts = [

    { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },

    { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },

    { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },

  ];


  
    return(
      <div>
        <main>
            <Smartphones smartphones={smartphones} />
            <hr />
            <Hotels hotels={hotels} />
            <hr />
            <Podcasts podcasts={podcasts} />
            <hr />
            <Tweets tweets={tweets} />
            <hr />
            <Articles articles={articles} />
            <hr />
            <TotalLikesByUser posts={posts} />
        </main>
        </div>
    )
}

