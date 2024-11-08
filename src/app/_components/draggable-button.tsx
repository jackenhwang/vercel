'use client';
import { useRef, useEffect } from 'react';
 
const DraggableButton = () => {
  const buttonRef:any = useRef(null);
 
  useEffect(() => {
    const handleMouseDown = (event:any) => {
      event.preventDefault();
      const offsetX = event.clientX - buttonRef.current.getBoundingClientRect().left;
      const offsetY = event.clientY - buttonRef.current.getBoundingClientRect().top;
 
      const handleMouseMove = (moveEvent:any) => {
        buttonRef.current.style.position = 'absolute';
        buttonRef.current.style.left = moveEvent.clientX - offsetX + 'px';
        buttonRef.current.style.top = moveEvent.clientY - offsetY + 'px';
      };
 
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
 
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
 
    buttonRef.current.addEventListener('mousedown', handleMouseDown);
 
    return () => {
      buttonRef.current.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
 
  return (
    <button className='bg-slate-300 rounded' ref={buttonRef}>拖动我</button>
  );
};
 
export default DraggableButton;