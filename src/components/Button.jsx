import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-indigo-600  text-white font-sans py-2 px-6 rounded md:ml-4 hover:bg-indigo-400 duration-500 flex items-center space-x-2'>
      <ion-icon name={props.icon} ></ion-icon> {/* Use Tailwind CSS size class */}
      <span>{props.name}</span>
    </button>
  );
};

export default Button;
