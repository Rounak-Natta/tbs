import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-logo">
        <Link href="/"><Image
          src="/bsblogo.png"
          alt="Bandhan School Logo"
          width={120}
          height={50}
          priority
        /></Link>
      </div>

      {/* MIDDLE - MENU */}
      <ul className="nav-menu">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/infrastructure">Infrastructure</Link></li>
        <li><Link href="#">Academic</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="#">News Update</Link></li>
        <li><Link href="#">Career</Link></li>
      </ul>

      {/* RIGHT - BUTTON GROUP */}
      <div className="nav-buttons">
        <Link href="#" className="btn admission">Admission</Link>
        <Link href="/contact" className="btn contact">Contact Us</Link>
      </div>

    </nav>
  );
}