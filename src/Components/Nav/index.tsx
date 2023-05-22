import React from 'react';
import GitHubLogo from '../../github-mark-white.svg';
const Nav: React.FC = () => {
  return (
    <nav className="sticky flex justify-between top-0 bg-gray-900 z-30 text-white py-4 px-8">
      <h1 className="flex text-4xl font-bold">
        <span className="App-logo pr-2">🤖</span>
        Stackerz
      </h1>
      <div className="ml-auto">
        <a
          href="https://github.com/msizar/zapps-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <img className="w-10" src={GitHubLogo} alt="GitHub Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
