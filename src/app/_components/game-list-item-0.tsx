import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons' // solid风格
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // （可选）品牌图标

{/* <FontAwesomeIcon icon={faFaceSmile} /> 
  */}

export function GameListItem0(){
  return (
    <div className="p-1 flex justify-center items-center flex-col z-50 sticky top-4 ">
      <div className=" bg-slate-100 rounded-xl game-grid-item-shadow" style={{paddingBottom:'100%', height: '0px', width:"100%", position:"relative"}}>
        <div className="w-full h-full absolute top-0">
          <div className="flex h-1/2 justify-center items-center border-b-2 border-gray-200">
            <Link href={`/`} className="font-icon flex justify-center items-center">
              <Image className='' src='/img/site-logo.png' alt={`Home`} width={50} height={50} /> 
            </Link>
          </div>
          <div className="flex h-1/2 justify-center items-center "> 
            <Link href={`/`} className="font-icon flex justify-center items-center border-r-2 border-gray-200 flex-1">
              <FontAwesomeIcon icon={faHome} size="lg"/>
            </Link>
            <Link href={`/`} className="font-icon flex justify-center items-center flex-1">
              <FontAwesomeIcon icon={faSearch} size="lg"/>
              {/* <Image className='' src='/img/site-logo.png' alt={`Home`} width={50} height={50} />  */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
