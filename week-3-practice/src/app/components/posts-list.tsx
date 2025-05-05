"use client";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../queryFcn/getData";
import Post, { BlogPost } from "./post-card";
import Loading from "./loading";

const PostsList = () => {
  const { data, isLoading, isError } = useQuery<BlogPost[]>({
    queryKey: ["posts"], //key for identifying this query in cache
    queryFn: () => getData("posts"),
  });
  return (
    <div className="m-8 ">
      <h1 className="text-center font-extrabold text-2xl mb-8">
        Beeceptor Dummy Blog
      </h1>
      {isLoading && <Loading />}
      {isError && (
        <div className="h-screen flex items-center justify-center text-red-600">
          Error while fetching, please try again!
        </div>
      )}
      <div className="flex flex-col gap-4">
        {data &&
          data.length > 0 &&
          data.map((blogPost) => {
            return <Post {...blogPost} key={blogPost.id} />;
          })}
      </div>
    </div>
  );
};

export default PostsList;
