import React from 'react';
import Nav from '../../Components/Nav';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />

      <div className="flex-grow p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus
          magna ac ex tristique faucibus. Phasellus auctor eu justo vel
          elementum. Integer non neque vitae augue hendrerit elementum. Integer
          malesuada, ligula a congue tristique, urna ipsum vestibulum odio, a
          ullamcorper dui elit id velit. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nulla
          facilisi. Maecenas euismod, neque at hendrerit fringilla, mi quam
          sagittis velit, ac sagittis lectus ex vel metus.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default HomePage;
