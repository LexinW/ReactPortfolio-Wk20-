import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact', displayName: 'Contact Me' },
  ];
  // Added an array for each page so I don't have to repeat the code for each page. This makes it look WAY cleaner.
  return (
    <header className="bg-dark py-4">
      <div className="container-fluid d-flex justify-content-between align-items-center px-2">
        <div>
          <h1 className="text-white px-5 display-4">Lexin</h1>
        </div>
        {/* //NavTabs part of the header */}
        <ul className="nav nav-tabs m-2 display-6">
          {navItems.map(item => (
            <li className="nav-item" key={item.href}>
              <a
                href={item.href}
                onClick={() => handlePageChange(item.name)}
                className={currentPage === item.name ? 'nav-link active' : 'nav-link'}
              >
                {item.displayName || item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
