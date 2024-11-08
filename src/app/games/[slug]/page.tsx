import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGames, getAllPosts, getGameBySlug, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { GamePlayer } from "@/app/_components/game-player";
import { GameListItem0 } from "@/app/_components/game-list-item-0";
import classNames from "classnames";
import { GameListItem } from "@/app/_components/game-list-item";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function Game(props: Params) {
  const params = await props.params;
  const gameInfo = getGameBySlug(params.slug);

  const games = getAllGames();

  if (!gameInfo) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <section>
          <ul className="mb-32 game-grid game-grid-cols">
            <li className="contents">
              <GameListItem0 />
            </li>
          {games.map((e, index, arr) => (
            gameInfo.slug == e.slug ? (
            <li className='game-player-area' style={{/*gridArea:playerState?.gridArea*/}}>
              <div className="bg-orange-300 w-full h-full min-h-96">
                <GamePlayer gameInfo={gameInfo}/>
              </div>
            </li>
          ) : (
            <li className='game-grid-item'>
              <GameListItem key={e.slug} gameInfo={e} /> 
            </li>
          )
          ))}
          </ul>
        </section>
      </Container>
    </main>
  );

}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const game = getGameBySlug(params.slug);

  if (!game) {
    return notFound();
  }

  const title = `${game.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [game.thumb_1],
    },
  };
}

export async function generateStaticParams() {
  const games = getAllGames();

  return games.map((e) => ({
    slug: e.slug,
  }));
}
