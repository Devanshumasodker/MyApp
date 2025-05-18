export interface CardItem {
  id: string;
  image: string;
  video: string;
  description: string;
}

export interface Section {
  id: string;
  cards: CardItem[];
}

export const sampleData: Section[] = [
  {
    id: "section-1",
    cards: [
      {
        id: "1-1",
        image: "https://picsum.photos/300/200?random=1",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "Card 1 from Section 1",
      },
      {
        id: "1-2",
        image: "https://picsum.photos/300/200?random=2",
        video: "https://www.w3schools.com/html/movie.mp4",
        description: "Card 2 from Section 1",
      },
      {
        id: "1-3",
        image: "https://picsum.photos/300/200?random=3",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "Card 3 from Section 1",
      },
    ],
  },
  {
    id: "section-2",
    cards: [
      {
        id: "2-1",
        image: "https://picsum.photos/300/200?random=4",
        video: "https://www.w3schools.com/html/movie.mp4",
        description: "Card 1 from Section 2",
      },
      {
        id: "2-2",
        image: "https://picsum.photos/300/200?random=5",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        description: "Card 2 from Section 2",
      },
    ],
  },
];
