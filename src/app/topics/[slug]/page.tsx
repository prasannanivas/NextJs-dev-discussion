import { fetchPostByTopicSlug } from "@/app/db/queries/posts";
import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}

export default TopicShowPage;
