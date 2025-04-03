import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: "1",
    comment: "Very good!",
    date: "2025-03-25T21:00:00.456Z",
    rating: 4,
    user: {
      name: "Masha",
      avatarUrl: "/img/eva.jpg",
      isPro: true
    }
  },
  {
    id: "2",
    comment: "Cool!",
    date: "2025-02-15T12:34:56.789Z",
    rating: 5,
    user: {
      name: "Melissa",
      avatarUrl: "/img/eva.jpg",
      isPro: false
    }
  }
];

export { reviews };