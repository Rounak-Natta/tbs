import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT - LOGO */}
      <div className="nav-logo">
        <Image
          src="/bsblogo.png"
          alt="Bandhan School Logo"
          width={120}
          height={50}
          priority
        />
      </div>

      {/* MIDDLE - MENU */}
      <ul className="nav-menu">
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Infrastructure</Link></li>
        <li><Link href="#">Academic</Link></li>
        <li><Link href="#">Gallery</Link></li>
        <li><Link href="#">News Update</Link></li>
        <li><Link href="#">Career</Link></li>
      </ul>

      {/* RIGHT - BUTTON GROUP */}
      <div className="nav-buttons">
        <Link href="#" className="btn admission">Admission</Link>
        <Link href="#" className="btn contact">Contact Us</Link>
      </div>

    </nav>
  );
}