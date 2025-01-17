"use client";

import React, { useEffect, useState } from "react";
import WebsiteSettings from "@/lib/websiteSetting.mjs";

const Header = () => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const settings = await getWebsiteSettings();
      if (settings && settings.logo) {
        setLogo(settings.logo); // Imposta il logo dallo stato
      }
    };

    fetchLogo();
  }, []);

  return (
    <header className="header">
      <div className="logo">
        {logo ? (
          <img src={logo} alt="Logo" /> // Usa l'URL del logo recuperato
        ) : (
          <p>Logo non disponibile</p> // Messaggio nel caso in cui non ci sia un logo
        )}
      </div>
      <nav className="nav">
        <ul>{/* Le tue voci di menu */}</ul>
      </nav>
    </header>
  );
};

export default Header;
