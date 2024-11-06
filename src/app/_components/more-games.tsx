'use client'

import cn from "classnames";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import Link from "next/link";
import { GameListItem } from "./game-list-item";
import { useEffect } from "react";
import { GameListResize } from "./game-list-resize";
import { GameListItem0 } from "./game-list-item-0";

type Props = {
  posts: Post[];
};

export function MoreGames({ posts }: Props) {
  let posts1 = posts.slice(0);
  posts.forEach(e => { posts1.push(e); });
  posts.forEach(e => { posts1.push(e); });
  posts.forEach(e => { posts1.push(e); });
  return (
    <section>
      {/* <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"> More Stories </h2> */}
      <GameListResize />
      <ul className="mb-32 games_list">
        <li className="contents">
          <GameListItem0/>
        </li>
        {posts1.map((post, index, arr) => (
          <li className={cn(`${index< 3?'grid_item_span_2':''}`)}>
           <GameListItem
             key={post.slug}
             title={post.title}
             coverImage={post.coverImage}
             date={post.date}
             author={post.author}
             slug={post.slug}
             excerpt={post.excerpt}
             stars={index < 3 ? 5 : 3}
           />
          </li>
        ))}
      </ul>
    </section>
  );
}
