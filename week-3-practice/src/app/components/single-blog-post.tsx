"use client";

import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "./post-card";
import { getData } from "@/app/queryFcn/getData";
import Loading from "./loading";

const SingleBlogPost = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery<BlogPost>({
    queryKey: ["blog-post"],
    queryFn: () => getData(`/posts/${id}`),
  });

  return (
    <>
      {isLoading && <Loading />}
      {data && (
        <div>
          <h1 className="font-extrabold text-center m-8">{data?.title}</h1>
          <p>{data?.body}</p>
          <div>Comments:{data?.comment_count}</div>
          <div>User id:{data?.userId}</div>
        </div>
      )}
    </>
  );
};

export default SingleBlogPost;
