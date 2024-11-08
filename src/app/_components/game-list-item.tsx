
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Image from "next/image";
import cn from "classnames";
import { GameInfo } from "@/interfaces/post";

type Props = {
  gameInfo: GameInfo;
};

export function GameListItem({gameInfo}: Props) {
  return (
    <Link href={`/games/${gameInfo.slug}`} className="hover:underline game-grid-item-a">
    <div className="thumb">
      <Image src={gameInfo.thumb_1} alt={`Cover Image for ${gameInfo.title}`} className={cn("shadow-sm w-full", { "hover:shadow-lg transition-shadow duration-200": gameInfo.slug, })} width={300} height={300} /> 
    </div>
    <div className="list-info">
      <div className="list-title">{gameInfo.title}</div>
    </div>
    <div className={cn("none", (gameInfo.upvote > 3)?'gameicon':'')}></div>
  </Link>

    // <div>
    //   <div className="mb-5">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    //   <h3 className="text-3xl mb-3 leading-snug">
    //     <Link href={`/posts/${slug}`} className="hover:underline">
    //       {title}
    //     </Link>
    //   </h3>
    //   <div className="text-lg mb-4">
    //     <DateFormatter dateString={date} />
    //   </div>
    //   <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    //   <Avatar name={author.name} picture={author.picture} />
    // </div>
  );
}
