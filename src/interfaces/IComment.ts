export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  isMine?: boolean;
}
