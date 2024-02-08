export interface OnePost {
  id: number;
  username: string;
  heading: string;
  text: string;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  username: string;
  text: string;
  createdAt: string;
}
