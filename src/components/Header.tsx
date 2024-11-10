// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>           
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;