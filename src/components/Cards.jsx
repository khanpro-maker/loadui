import React from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import toast from 'react-hot-toast';
import { Toaster} from 'react-hot-toast';

const Cards = ({ children }) => {
    function getCode(){
        const div = document.createElement('div')
        const root = createRoot(div)
        flushSync(()=>{
            root.render(children)
        })
        const code = div.innerHTML
        navigator.clipboard.writeText(code)
        .then(()=>{
            console.log("copied!")
        })
        toast.success("Copied!")
        return code;
    }
 
  return (
  <>
    <Toaster/>
    <div className="w-60 h-72 bg-white hover:drop-shadow-2xl rounded-lg border border-gray-200 flex justify-center items-center
    cursor-pointer
    " onClick={getCode}>
      {children}
    </div>
  </>
  );
};

export default Cards;