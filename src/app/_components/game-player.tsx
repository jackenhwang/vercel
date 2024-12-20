'use client'

import cn from "classnames";
import { GameInfo, Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import Link from "next/link";
import { GameListItem } from "./game-list-item";
import { useEffect, useState } from "react";
import { GameListItem0 } from "./game-list-item-0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPlay } from "@fortawesome/free-solid-svg-icons";

type Props = {
  gameInfo: GameInfo;
};

export function GamePlayer({ gameInfo }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(800);
  const [iframeHeight, setIframeHeight] = useState(600);

  function onPlayClick(e: any) {
    console.log('onPlayClick');
    e.preventDefault();
    setIsPlaying(true);
    setIsFullScreen(isPortrait ? true : false);
  }
  function onExitFullScreenClick(e: any) {
    console.log('onExitFullScreenClick');
    e.preventDefault();
    setIsFullScreen(false);
    setIsPlaying(false);
  }

  // 修改分辨率的函数回调
  function handleResize() {
    console.log(`game-play.handleResize(), windowSize:${window.innerWidth},${window.innerHeight}`);

    setIsPortrait(window.innerWidth < window.innerHeight)

    let designWidth = parseFloat(gameInfo.width);
    let designHeight = parseFloat(gameInfo.height);
    let iframeContainer = document.getElementById("iframe-container");
    if (iframeContainer) {
      var iframeClientHeight = iframeContainer.clientHeight;
      if (designWidth < designHeight) {
        let iWidth = iframeClientHeight * designWidth / designHeight;
        console.log(`iframe.clientHeight:${iframeClientHeight}, designWidth:${designWidth}, designHeight:${designHeight}, iframeWidth:${iWidth}`);
        setIframeWidth(iWidth);
      }
    }

  }

  useEffect(() => {
    // 给全局绑定一个修改分辨率的操作, 当窗口发生变化的时候就修改分辨率
    handleResize();
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="h-full w-full flex flex-col top-0 left-0 z-50" style={{ position: isFullScreen ? "fixed" : "relative" }}>
      <div className="w-full h-full flex-1 bg-white">
        <div id="iframe-container" className="h-full w-full relative overflow-hidden">
          <Image className="player-bg-img" src={gameInfo.thumb_1} width={300} height={300} alt="" />
          <div id="group-btn-play" className="w-full h-full flex flex-col justify-center items-center absolute z-10" style={{ display: isPlaying ? "none" : "flex" }}>
            <Link onClick={onPlayClick} className="" href={''}>
              <div className="player-btn-bg-circle flex justify-center items-center font-icon">
                <FontAwesomeIcon className="pl-2" icon={faPlay} size="3x" />
              </div>
              <div className="text-2xl font-semibold text-white hover-scale ">Play now</div>
            </Link>
          </div>
          <div id="loading" className="loading z-30" style={{ display: isPlaying ? "block" : "none" }}>Loading...</div>
          <iframe id="player-iframe" className={cn("w-full h-full absolute-center z-30 game-player-shadow")} width={gameInfo.width} height={gameInfo.height} src={isPlaying ? gameInfo.url : ""} allowFullScreen
            style={{ display: isPlaying ? "block" : "none", width: !isFullScreen && parseFloat(gameInfo.width) < parseFloat(gameInfo.height) ? `${iframeWidth}px` : "100%" }} />
          <div id="group-btn-exit" className="absolute left-0 top-4 z-40" style={{ display: isFullScreen ? "block" : "none" }}>
            <Link onClick={onExitFullScreenClick} className="hover-scale" href={""}>
              <Image src={"/img/site-logo.png"} width={50} height={50} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div id="player-banner" className="h-14 bg-white flex items-center">
        <div className="flex items-center pl-1 gap-1">
          <Image className="max-w-full max-h-full rounded" src={gameInfo.thumb_1} width={50} height={50} alt=""></Image>
          <h1 className="font-semibold text-xl" >{gameInfo.title}</h1>
        </div>
      </div>
    </div>
  );
}
