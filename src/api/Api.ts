import axios from "axios";
import { OnePost } from "./types";

// Do try/catch in store methods
class Api {

  private url: string;
  
  private POST_PATH = "posts";

  private COMMENT_PATH = "comments";

  public constructor() {
    this.url = this.getUrl();
  }

  public async getPosts(page: number, limit: number): Promise<OnePost[]> {
    const params = { page, limit };
    const requestUrl = `${this.url}/${this.POST_PATH}`;
    const { data } = await axios.get<OnePost[]>(requestUrl, { params });

    return data;
  }

  public async getOnePostById(postId: number): Promise<OnePost> {
    const requestUrl = `${this.url}/${this.POST_PATH}/${postId}`;
    const { data } = await axios.get<OnePost>(requestUrl);

    return data;
  }

  public async createPost(post: any): Promise<OnePost> {
    const requestUrl = `${this.url}/${this.POST_PATH}`;
    const { data } = await axios.post<OnePost>(requestUrl, post);

    return data;
  }

  public async createComment(comment: any): Promise<Comment> {
    const requestUrl = `${this.url}/${this.COMMENT_PATH}`;
    const { data } = await axios.post<Comment>(requestUrl, comment);

    return data;
  }

  private getUrl(): string {
    const url = process.env.REACT_APP_URL;

    if (!url) throw new Error("Api url is not provided");

    return url;
  }
}

const api = new Api();

export default api;