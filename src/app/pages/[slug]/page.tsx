import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPageBySlug, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { PostTitle } from "@/app/_components/post-title";

type Params = Promise<{ slug: string }>
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPageBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          {/* <PostTitle>{post.title}</PostTitle> */}
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

// type Params = {
//   params: {
//     slug: string;
//   };
// };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPageBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

// export async function generateStaticParams() {
  // const posts = getAllPosts();

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
// }
