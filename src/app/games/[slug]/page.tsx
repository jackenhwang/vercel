import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGameBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

export default async function Game() {
  // const post = getGameBySlug(params.slug);
  const post = getGameBySlug("popstar");

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
        <Alert preview={post.preview} />
        <Container>
            <Header/>
        </Container>
        <div className="flex-container mx-1">
            <article className={`main`}>
                <p>菜鸟教程 - 学的不仅是技术，更是梦想！菜鸟教程(www.runoob.com)提供了最全的编程技术基础教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程。</p>
            </article>
            <aside className="aside aside1">边栏 1</aside>
            <aside className="aside aside2">边栏 2</aside>
        </div>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata(): Metadata {
  // const post = getGameBySlug(params.slug);
  const post = getGameBySlug("popstar");

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
