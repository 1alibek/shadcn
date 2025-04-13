"use client"; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    'Avatar',
    'Badge',
    'Breadcrumb',
    'Button',
    'Calendar',
    'Card',
    'Carousel',
    'Chart',
    'Checkbox',
    'Collapsible',
    'Combobox',
    'Command',
    'Context Menu',
    'Data Table',
    'Date Picker',
    'Dialog',
    'Drawer',
    'Dropdown Menu',
  ];

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item}
            href={item === 'Carousel' || item === 'Checkbox' ? `/${item.toLowerCase()}` : '#'}
            className={`px-2 py-1 rounded-md block cursor-pointer ${
              pathname === `/${item.toLowerCase()}` && (item === 'Carousel' || item === 'Checkbox')
                ? 'bg-gray-700'
                : 'hover:bg-gray-700'
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;