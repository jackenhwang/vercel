import Image from "next/image";
import Link from "next/link";

export function GameListItem0(){
  return (
    <div className="flex justify-center items-center flex-col rounded-xl z-50 sticky top-4 bg-slate-100 games_list_item_shadow">
      <div className="w-1/2 flex justify-center items-center">
          <Image className="" src='/img/site-logo.png' alt={`Home`} width={80} height={80} /> 
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link href={`/`} className="hover:underline flex">
          <Image className='' src='/img/site-logo.png' alt={`Home`} width={50} height={50} /> 
        </Link>
        <Link href={`/`} className="hover:underline">
          <Image className='' src='/img/site-logo.png' alt={`Home`} width={50} height={50} /> 
        </Link>
      </div>
    </div>
  );
};
