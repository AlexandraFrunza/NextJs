export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  link: string;
  comment_count: number;
}

const Post = ({ title, body, link, comment_count, userId }: BlogPost) => {
  return (
    <div className="shadow-lg">
      <div>{title}</div>
      <p>{body}</p>
      <div>{link}</div>
      <div>{comment_count}</div>
      <div>{userId}</div>
    </div>
  );
};

export default Post;
