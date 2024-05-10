import React from 'react';
function Button({
    value="button",
    className,
    onClick,
}) {
    return ( <>
    <input type="button" value={ value} className={`${className} bg-amber-400 hover:bg-amber-500 text-orange-100 font-mono font-bold md:px-5 md:py-3 md:text-xl px-2 py-2 rounded-md `} onClick={onClick} />
           </>  );
}

export default Button;