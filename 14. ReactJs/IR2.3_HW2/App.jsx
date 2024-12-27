// 1. Given an array of objects, write a React component to display the total word count of content of blog posts on "Food".

// const blogPosts = [

//     { id: 1, title: "Blog Post 1", content: "Content 1", category: "Technology"},

//     { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

//     { id: 3, title: "Blog Post 3", content: "Content 3", category: "Technology"},

//     { id: 4, title: "Blog Post 4", content: "New content of food called Content 4", category: "Food"},

//   ];


// 2. Given an array of objects, write a React component to display the total price of laptops.

//  const laptops = [

//     { id: 1, brand: "Dell", price: 8999.99 },

//     { id: 2, brand: "HP", price: 7999.99 },

//     { id: 3, brand: "MacBook", price: 12999.99 },

//   ];



// 3. Given an array of objects, write a React component to display the average rating of "cafes".

// const cafes = [

//     { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },

//     { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },

//     { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },

//     { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },

//   ];



// 4. Given an array of objects, write a React component to display the total number of pages of all books.

// const books = [

//     { id: 1, title: "Book 1", pages: 300 },

//     { id: 2, title: "Book 2", pages: 250 },

//     { id: 3, title: "Book 3", pages: 400 },

//   ];



// 5. Given an array of objects, write a React component to display the total likes on Morning tweets and total likes on Evening tweets separately.

//   const tweets = [

//     { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },

//     { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },

//     { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },

// { id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },

//   ];



// 6. Given an array of objects, write a React component to display the total number of listeners of "verified" podcasts.

// const podcasts = [

//     { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },

//     { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },

//     { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },

//   ];


// Expected Output:

// Total Word Count of Blog Posts on "Food"
// 9

// Total Price of Laptops
// 29999.97

// Average Rating of Cafes
// 4.50

// Total Pages of All Books
// 950

// Total Likes
// Morning Tweets: 50

// Evening Tweets: 30

// Total Listeners of Verified Podcasts
// 12000

import "./App.css";

const FoodBlogWordCount = ({ blogPosts }) => {
  const totalWordCount = blogPosts
    .filter((post) => post.category === "Food") // Filter posts in "Food" category
    .reduce((acc, curr) => acc + curr.content.split(" ").length, 0); // Count words

  return (
    <div>
      <h2>Total Word Count of Blog Posts on "Food"</h2>
      <p>{totalWordCount}</p>
    </div>
  );
};

const LaptopTotalPrice = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of Laptops</h2>
      <p>{totalPrice.toFixed(2)}</p>
    </div>
  );
};

const CafeAverageRating = ({ cafes }) => {
  const cafeRatings = cafes.filter((cafe) => cafe.type === "cafe");
  const averageRating =
    cafeRatings.reduce((acc, curr) => acc + curr.rating, 0) /
    cafeRatings.length;

  return (
    <div>
      <h2>Average Rating of Cafes</h2>
      <p>{averageRating.toFixed(2)}</p>
    </div>
  );
};

const TotalBookPages = ({ books }) => {
  const totalPages = books.reduce((acc, curr) => acc + curr.pages, 0);

  return (
    <div>
      <h2>Total Pages of All Books</h2>
      <p>{totalPages}</p>
    </div>
  );
};

const TweetLikes = ({ tweets }) => {
  const morningLikes = tweets
    .filter((tweet) => tweet.schedule === "Morning tweet")
    .reduce((acc, curr) => acc + curr.likes, 0);

  const eveningLikes = tweets
    .filter((tweet) => tweet.schedule === "Evening tweet")
    .reduce((acc, curr) => acc + curr.likes, 0);

  return (
    <div>
      <h2>Total Likes</h2>
      <p>Morning Tweets: {morningLikes}</p>
      <p>Evening Tweets: {eveningLikes}</p>
    </div>
  );
};

const VerifiedPodcastListeners = ({ podcasts }) => {
  const totalListeners = podcasts
    .filter((podcast) => podcast.type === "verified")
    .reduce((acc, curr) => acc + curr.listeners, 0);

  return (
    <div>
      <h2>Total Listeners of Verified Podcasts</h2>
      <p>{totalListeners}</p>
    </div>
  );
};

export default function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },

    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

    {
      id: 3,
      title: "Blog Post 3",
      content: "Content 3",
      category: "Technology",
    },

    {
      id: 4,
      title: "Blog Post 4",
      content: "New content of food called Content 4",
      category: "Food",
    },
  ];

  const laptops = [
    { id: 1, brand: "Dell", price: 8999.99 },

    { id: 2, brand: "HP", price: 7999.99 },

    { id: 3, brand: "MacBook", price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },

    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },

    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },

    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },
  ];

  const books = [
    { id: 1, title: "Book 1", pages: 300 },

    { id: 2, title: "Book 2", pages: 250 },

    { id: 3, title: "Book 3", pages: 400 },
  ];

  const tweets = [
    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },

    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },

    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },

    { id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },

    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },

    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },
  ];

  return (
    <div>
      <main>
        <FoodBlogWordCount blogPosts={blogPosts} />
        <hr />
        <LaptopTotalPrice laptops={laptops} />
        <hr />
        <CafeAverageRating cafes={cafes} />
        <hr />
        <TotalBookPages books={books} />
        <hr />
        <TweetLikes tweets={tweets} />
        <hr />
        <VerifiedPodcastListeners podcasts={podcasts} />
      </main>
    </div>
  );
}
