import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllGames, getAllPosts } from "@/lib/api";
import { GameList } from "./_components/game-list";

export default function Index() {
  // const allPosts = getAllPosts();
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const arrGames = getAllGames();

  return (
    <main>
      <Container>
        {/* <Intro /> */}
        <GameList games={arrGames} />
      </Container>
    </main>
  );
}
