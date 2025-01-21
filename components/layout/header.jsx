import Image from "next/image";
import Link from "next/link";
import SportStatsLogo from "@/src/assets/images/SportStatsLogo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">
          <Image
            src={SportStatsLogo}
            alt="Sport Stats Logo"
            className="h-48 w-48"
          />
        </Link>
      </div>
    </header>
  );
}
