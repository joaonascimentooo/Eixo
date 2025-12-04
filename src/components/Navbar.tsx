'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<'enter' | 'start' | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = ``;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/routines', label: 'Rotinas' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/community', label: 'Comunidade' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl" style={{ backgroundColor: 'oklch(58% 0.16 190 / 0.95)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'linear-gradient(135deg, oklch(70% 0.22 190), oklch(60% 0.25 190))' }}>
              <Zap className="h-6 w-6 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, oklch(70% 0.22 190 / 0.3), transparent)' }}></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black" style={{ backgroundImage: 'linear-gradient(to right, oklch(98% 0.02 190), oklch(70% 0.22 190))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Eixo
              </span>
              <span className="text-xs font-bold opacity-90" style={{ color: 'oklch(95% 0.02 190)' }}>
                Parte de rotinas
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold rounded-lg transition-all relative group"
                style={{ color: 'oklch(95% 0.02 190)' }}
              >
                {item.label}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full rounded-full transition-all" style={{ background: 'linear-gradient(to right, oklch(70% 0.22 190), oklch(60% 0.25 190))' }}></div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button 
              onMouseEnter={() => setHoveredButton('enter')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all"
              style={{
                color: hoveredButton === 'enter' ? 'white' : 'oklch(70% 0.22 190)',
                background: hoveredButton === 'enter'
                  ? 'linear-gradient(135deg, oklch(70% 0.22 190), oklch(62% 0.24 190))'
                  : 'oklch(70% 0.22 190 / 0.15)',
                boxShadow: hoveredButton === 'enter' ? '0 8px 24px oklch(70% 0.22 190 / 0.3)' : 'none'
              }}
            >
              Entrar
            </button>
            <button 
              onMouseEnter={() => setHoveredButton('start')}
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all"
              style={{
                color: 'white',
                background: 'linear-gradient(135deg, oklch(70% 0.22 190), oklch(62% 0.24 190))',
                boxShadow: hoveredButton === 'start' 
                  ? '0 12px 32px oklch(70% 0.22 190 / 0.4)'
                  : '0 8px 24px oklch(70% 0.22 190 / 0.3)',
                opacity: hoveredButton === 'enter' ? 0.5 : 1
              }}
            >
              Começar Grátis
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors"
            style={{ color: 'oklch(25% 0.05 190)', backgroundColor: 'oklch(70% 0.22 190 / 0.1)' }}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-3 border-t" style={{ borderColor: 'oklch(48% 0.18 190 / 0.3)' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg font-medium transition-all text-sm"
                style={{ color: 'oklch(25% 0.05 190)', backgroundColor: 'oklch(70% 0.22 190 / 0.08)' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t" style={{ borderColor: 'oklch(48% 0.18 190 / 0.3)' }}>
              <button className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg transition-all" style={{ color: 'oklch(70% 0.22 190)', backgroundColor: 'oklch(70% 0.22 190 / 0.15)' }}>
                Entrar
              </button>
              <button className="flex-1 px-4 py-3 text-sm font-semibold text-white rounded-lg transition-all" style={{ background: 'linear-gradient(135deg, oklch(70% 0.22 190), oklch(62% 0.24 190))' }}>
                Começar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
