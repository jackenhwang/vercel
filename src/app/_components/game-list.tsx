'use client'

import cn from "classnames";
import { GameInfo, Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import Link from "next/link";
import { GameListItem } from "./game-list-item";
import { useEffect } from "react";
import { GameListItem0 } from "./game-list-item-0";

type Props = {
  games: GameInfo[];
};

export function GameList({ games }: Props) {
  let games1 = games.slice(0);
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"> More Stories </h2> */}
      {/* <GameListResize /> */}
      <ul className="mb-32 game-grid game-grid-cols">
        <li className="contents">
          <GameListItem0/>
        </li>
        {games1.map((e, index, arr) => (
          <li className={cn(`${index< 3?'grid-item-span-2':''}`)}>
           <GameListItem gameInfo={e} />
          </li>
        ))}
      </ul>
    </section>
  );
}
