import cn from "classnames";
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import Link from "next/link";
import { GameListItem } from "./game-list-item";
import { useEffect } from "react";

type Props = {
  posts: Post[];
};

export function GameListResize() {
    // 修改分辨率的函数回调
    function handleResize() {
      let w_width = window.innerWidth;
      let w_height = window.innerHeight;
      console.log(`handleResize(), windowSize:${window.innerWidth},${window.innerHeight}`);
      
  }


  useEffect(() => {
      // 给全局绑定一个修改分辨率的操作, 当窗口发生变化的时候就修改分辨率
      handleResize();
      window.addEventListener('resize',handleResize)
  }, [])

  return (
    <ul className="mb-32 w-full h-full none">
    </ul>
  );
}
