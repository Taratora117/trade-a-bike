import React from 'react';

import './Page.css';


const Page = ({children}) => {

  return (
    <div>
      <header></header>

      <div>
        {children}
      </div>

      <footer></footer>

    </div>
  );
};

export default Page;
