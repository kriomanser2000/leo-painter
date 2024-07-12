import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => 
{
  return (
    <div>
      <h1>Леонардо да Вінчі</h1>
      <nav>
        <ul>
          <li><Link to="/biography">Біографія</Link></li>
          <li><Link to="/most-famous-painting">Найвідоміша картина</Link></li>
          <li><Link to="/paintings-collection">Зібрання картин</Link></li>
        </ul>
      </nav>
    </div>
  );
};
export default Home;