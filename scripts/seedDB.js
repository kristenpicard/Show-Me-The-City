const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/showmethecity");

const reviewSeed = [
  { 
    location: "Columbus, Ohio",
    title: "Center of Science and Industry (COSI)",
    user: "Alexandra Morales",
    category: "Arts & Culture",
    image: "https://via.placeholder.com/150",
    synopsis:
        "A children's science museum",
    date: new Date(Date.now())
  },
  { 
    location: "Bowling Green, Ohio",
    title: "Uptown-Downtown",
    user: "Angelo Gibbs",
    category: "Bars",
    image: "https://via.placeholder.com/150",
    synopsis:
        "Casual dance club for ages 18 & up paired with a low-key sports pub with bar eats for ages 21 & up.",
    date: new Date(Date.now())
  },
  { 
    location: "Winston Salem, North Carolina",
    title: "Krankies",
    user: "Kristine Todd",
    category: "Coffee & Tea",
    image: "https://via.placeholder.com/150",
    synopsis:
        "Coffee company roasts & sells its own beans at this cafe with live entertainment at night.",
    date: new Date(Date.now())
  },
  { 
    location: "LA, California",
    title: "Hollywood Bowl",
    user: "Alvin Walsh",
    category: "Music",
    image: "https://via.placeholder.com/150",
    synopsis:
        "The Hollywood Bowl is an amphitheatre in the Hollywood Hills neighborhood of Los Angeles, California. It was named one of the 10 best live music venues in America by Rolling Stone magazine in 2018.",
    date: new Date(Date.now())
  },
  { 
    location: "Destin, Florida",
    title: "Destin Harbor Boardwalk",
    user: "Dallas Moss",
    category: "Landmarks",
    image: "https://via.placeholder.com/150",
    synopsis:
        "Bustling destination for bars, restaurants, souvenir shops, boating & tourist attractions.",
    date: new Date(Date.now())
  },
  { 
    location: "Fresno, California",
    title: "Butterfish",
    user: "Chris Thompson",
    category: "Restaurants",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Hip & airy counter-serve chain with thoughtfully sourced poke bowls using raw fish, chicken or beef.",
    date: new Date(Date.now())
  },
  { 
    location: "Bloomington, Minnesota",
    title: "Mall of America",
    user: "Miranda Jordan",
    category: "Shopping",
    image: "https://via.placeholder.com/150",
    synopsis:
      "The Mall of America is a shopping mall located in Bloomington, Minnesota",
    date: new Date(Date.now())
  },
  { 
    location: "Chester, West Virgina",
    title: "Hilltop Drive-in Theater",
    user: "Wm King",
    category: "Cinema",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Single screen outdoor drive-in theater located in Chester WV, showing first run features during fair weather months. Originally opened in 1950.",
    date: new Date(Date.now())
  },
  { 
    location: "Grand Rapids, Michigan",
    title: "Grand Rapids Art Museum",
    user: "Deborah Fox",
    category: "Art & Culture",
    image: "https://via.placeholder.com/150",
    synopsis:
      "The Grand Rapids Art Museum is an art museum located in Grand Rapids, Michigan with collections ranging from Renaissance to Modern Art and special collections on 19th and 20th-century European and American art. Its holdings include notable modern art works such as Richard Diebenkorn’s 1963 Ingleside.",
    date: new Date(Date.now())
  },
  { 
    location: "Nashville, Tennessee",
    title: "Flying Saucer Draught Emporium",
    user: "Michelle Wolfe",
    category: "Bars",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Chain taproom offering 200+ global beers & American pub fare in tavernlike surroundings.",
    date: new Date(Date.now())
  },
  { 
    location: "Columbus, Ohio",
    title: "Gateway Film Center",
    user: "Terry Kennedy",
    category: "Cinema",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Lively, modern space for a variety of movies & film-related events, plus an undersea-themed bar.",
    date: new Date(Date.now())
  },
  { 
    location: "Chicago, Illinois",
    title: "Sawada Coffee",
    user: "Brenda Neal",
    category: "Coffee & Tea",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Chill spot for creative & classic coffee drinks in cozy, rustic-chic digs with Ping-Pong.",
    date: new Date(Date.now())
  },
  { 
    location: "Morrison, Colorado",
    title: "Red Rocks Park and Amphitheatre",
    user: "Kenda Sims",
    category: "Music",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Red Rocks Amphitheatre is an open-air amphitheatre built into a rock structure in the western United States, near Morrison, Colorado, ten miles west of Denver.",
    date: new Date(Date.now())
  },
  { 
    location: "Seattle, Washington",
    title: "Space Needle",
    user: "Julio Morris",
    category: "Landmarks",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Seattle’s “must see” is now a “must do” following the Space Needle’s multimillion-dollar renovation. Glide onto The Loupe, the world’s first and only rotating glass floor, for never-before-seen views of the structure and the city. Lean into tilting glass walls on the open-air deck and float over Seattle on one of 24 angled Skyriser glass benches. Sip and sample the Pacific Northwest’s best while savoring the thrilling views. The future. Now open.",
    date: new Date(Date.now())
  },
  { 
    location: "Atlanta, Georgia",
    title: "Havana Sandwich Shop",
    user: "Brenda Neal",
    category: "Restaurants",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Roomy Cuban cafe with a small patio serving sandwiches & combo plates since 1976.",
    date: new Date(Date.now())
  },
  { 
    location: "Houston, Texas",
    title: "The Galleria",
    user: "Kendra Sims",
    category: "Shopping",
    image: "https://via.placeholder.com/150",
    synopsis:
      "Found in Houston's Uptown Park district, The Galleria is the biggest mall in Texas with more than 400 shops. Shoppers could easily spend a few days exploring this bright and busy mall with designer shops like Jimmy Choo and Louis Vuitton and department stores including Neiman Marcus and Macy's. Find unique items at boutique shops like David Yurman for jewelry and the local menswear designer M. Penner.",
    date: new Date(Date.now())
  }
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

