import { useEffect, useState } from "react";

export function ScrollProgress(){
  const [p,setP]=useState(0);
  useEffect(()=>{
    const on=()=>{
      const h=document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setP(scrolled);
    };
    window.addEventListener("scroll", on, {passive:true});
    return ()=> window.removeEventListener("scroll", on);
  },[]);
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full">
      <div className="h-full bg-slate-900 transition-all duration-150" style={{width:`${p}%`}} />
    </div>
  )
}
