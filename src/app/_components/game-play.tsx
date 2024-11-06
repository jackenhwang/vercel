'use client'

import cn from "classnames";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import Link from "next/link";
import { GameListItem } from "./game-list-item";
import { useEffect, useState } from "react";
import { GameListResize } from "./game-list-resize";
import { GameListItem0 } from "./game-list-item-0";

type Props = {
  post: Post;
  posts: Post[];
};

interface PlayerState {
  // spanCol:number;
  gridArea:string;
}

export function GamePlay({ post, posts }: Props) {
  const [playerState, setPlayerState] = useState<PlayerState>();

  // @media screen and (max-width: 360px) { .games_list{ grid-template-columns: repeat(3, calc((100% - 2rem) / 3)); } }
  // @media (min-width: 640px) { .games_list{ grid-template-columns: repeat(4, calc((100% - 3rem) / 4)); } }
  // @media (min-width: 768px) { .games_list{ grid-template-columns: repeat(5, calc((100% - 4rem) / 5)); } }
  // @media (min-width: 1024px) { .games_list{ grid-template-columns: repeat(6, calc((100% - 5rem) / 6)); } }
  // @media (min-width: 1280px) { .games_list{ grid-template-columns: repeat(7, calc((100% - 6rem) / 7)); } }
  // @media (min-width: 1400px) { .games_list{ grid-template-columns: repeat(8, calc((100% - 7rem) / 8)); } }
  // @media (min-width: 1536px) { .games_list{ grid-template-columns: repeat(9, calc((100% - 8rem) / 9)); } }
  // 修改分辨率的函数回调
  function handleResize() {
    let w_width = window.innerWidth;
    let w_height = window.innerHeight;
    console.log(`game-play.handleResize(), windowSize:${window.innerWidth},${window.innerHeight}`);
    let arrInfos = [
      {screnW:360, cols:3, gridArea:'2 / 1 / span 3 /span 3'},
      {screnW:640, cols:4, gridArea:'2 / 1 / span 3 /span 4'},
      {screnW:768, cols:5, gridArea:'1 / 2 / span 3 /span 4'},
      {screnW:1024, cols:6, gridArea:'1 / 2 / span 3 /span 5'},
      {screnW:1280, cols:7, gridArea:'1 / 2 / span 3 /span 5'},
      {screnW:1400, cols:8, gridArea:'1 / 2 / span 3 /span 5'},
      {screnW:1536, cols:9, gridArea:'1 / 3 / span 3 /span 5'},
    ]
    let info = arrInfos[0];
    for (let i = arrInfos.length-1; i >= 0; i--) {
      if(window.innerWidth >= arrInfos[i].screnW ){
        info = arrInfos[i];
        break;
      }
    }
    console.log(`screenW:${info.screnW}`);
    console.log(`info.gridArea:${info.gridArea}`);
    setPlayerState({
      gridArea: info.gridArea
    })
  }

  useEffect(() => {
      // 给全局绑定一个修改分辨率的操作, 当窗口发生变化的时候就修改分辨率
      handleResize();
      window.addEventListener('resize',handleResize)
  }, [])

  return (
    <section>
      <GameListResize />
      <ul className="mb-32 games_list">
        <li className="contents">
          <GameListItem0 />
        </li>
      {posts.map((post1, index, arr) => (
      post.slug == post1.slug ? (
        <li className={cn(``)} style={{gridArea:playerState?.gridArea}}>
          <div className="bg-orange-300 h-full">Hello World{playerState?.gridArea}</div>
        </li>
      ) : (
        <li className=''>
          <GameListItem key={post.slug} title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} slug={post.slug} excerpt={post.excerpt} stars={index < 3 ? 5 : 3} /> 
        </li>
      )
      ))}
      </ul>
    </section>
  );
}
