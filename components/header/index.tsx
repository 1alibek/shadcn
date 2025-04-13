import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <a href="/" className="text-xl font-semibold">
          <span className="text-blue-400">/</span> shadcn/ui
        </a>
        <nav className="flex space-x-6">
          <a href="/docs" className="hover:text-gray-300">Docs</a>
          <a href="/components" className="hover:text-gray-300">Components</a>
          <a href="/blocks" className="hover:text-gray-300">Blocks</a>
          <a href="/charts" className="hover:text-gray-300">Charts</a>
          <a href="/themes" className="hover:text-gray-300">Themes</a>
          <a href="/colors" className="hover:text-gray-300">Colors</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search documentation..."
            className="bg-gray-800 text-white placeholder-gray-400 rounded-md p-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2 text-gray-400">🔍</span>
        </div>
        <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer">
          <span className="text-gray-400 hover:text-gray-300">🌐</span>
        </a>
        <button className="text-gray-400 hover:text-gray-300">
          <span>🌙</span>
        </button>
      </div>
    </header>
  );
};

export default Header;