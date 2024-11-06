import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { GamePlay } from "@/app/_components/game-play";

type Params = Promise<{ slug: string }>
export default async function Post({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const posts = getAllPosts();
  let posts1 = posts.slice(0);
  posts.forEach(e => { posts1.push(e); });
  posts.forEach(e => { posts1.push(e); });
  posts.forEach(e => { posts1.push(e); });

  if (!post) {
    return notFound();
  }


  return (
    <main>
      <Container>
        <GamePlay post={post} posts={posts} />
      </Container>
    </main>
  );


  // return (
  //   <main>
  //     <Alert preview={post.preview} />
  //     <Container>
  //       <Header />
  //       <article className="mb-32">
  //         <PostHeader
  //           title={post.title}
  //           coverImage={post.coverImage}
  //           date={post.date}
  //           author={post.author}
  //         />
  //         <PostBody content={content} />
  //       </article>
  //     </Container>
  //   </main>
  // );
}

// type Params = {
//   params: {
//     slug: string;
//   };
// };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
