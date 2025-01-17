import directus from "@/lib/directus.mjs"; // Assicurati che il client directus sia configurato correttamente

const getWebsiteSettings = async () => {
  try {
    const { data } = await directus.get("items/website_settings");
    return data[0]; // Poiché di solito c'è un solo set di impostazioni
  } catch (error) {
    console.error("Errore nel recupero delle impostazioni del sito:", error);
    return null;
  }
};
