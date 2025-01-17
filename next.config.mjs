/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    deviceSizes: [768, 1280, 1440, 1920],
  },
  rewrites() {
    const baseApi = process.env.DIRECTUS_API?.replace(/\/$/, ""); // Rimuove lo slash finale, se presente
    if (!baseApi) {
      throw new Error("DIRECTUS_API non definito. Verifica il file .env");
    }

    return ["assets"].map((source) => {
      const sourcePath = `/${source}/:path*`; // Definizione del percorso sorgente
      return {
        source: sourcePath,
        destination: `${baseApi}${sourcePath}`, // Concatena correttamente l'URL
      };
    });
  },
};

export default nextConfig;
