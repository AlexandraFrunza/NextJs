import Link from "next/link";

export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  link: string;
  comment_count: number;
}

const PostCard = ({ id, title, body }: BlogPost) => {
  return (
    <article className="shadow-lg p-8 rounded-md flex flex-center flex-col gap-3 ">
      <Link href={`/blog/${id}`} className="text-center font-semibold">
        {title}
      </Link>
      <p>{body}</p>
    </article>
  );
};

export default PostCard;
