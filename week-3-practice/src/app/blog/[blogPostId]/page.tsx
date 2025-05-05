import SingleBlogPost from "../../components/single-blog-post";

const Page = async ({ params }: { params: { blogPostId: string } }) => {
  const { blogPostId } = await params;

  return <SingleBlogPost id={blogPostId} />;
};

export default Page;
