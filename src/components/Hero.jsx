import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        
        <img src={logo} alt='sumz_logo' className='w-28 object-contain animate__animated animate__backInLeft' />

        <button
          type='button'
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=hRQqJtgYz_Q", "_blank")
          }
          className='tutorial_btn animate__animated animate__backInRight'
        >
          API Tutorial
        </button>
      </nav>

      <h1 className='head_text animate__animated animate__backInUp'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;