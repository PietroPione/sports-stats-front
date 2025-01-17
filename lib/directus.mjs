const CACHE_SECONDS = process.env.CACHE_SECONDS || 60;

async function parseResponse(resp) {
  let data = await resp.text();
  try {
    data = data && JSON.parse(data);
  } catch (err) {}
  if (!resp.ok) {
    throw {
      status: resp.status,
      message: data?.message || "Errore sconosciuto",
      details: data,
    };
  }
  return resp.status === 204 ? {} : data;
}

const directus = {
  async call(url, options = {}) {
    options.credentials = "include";
    options.headers = {
      "Content-Type": "application/json",
      next: { revalidate: +CACHE_SECONDS },
      ...options.headers,
    };

    if (!options.skipAuthorization) {
      options.headers.Authorization = `Bearer ${process.env.DIRECTUS_TOKEN}`;
    }

    if (options.cache !== undefined) {
      options.headers.next = { revalidate: options.cache };
    }

    if (options.body) {
      if (options?.headers?.["Content-Type"] === "multipart/form-data") {
        delete options.headers["Content-Type"];
        const formData = new FormData();
        for (const key in options.body) {
          if (Array.isArray(options.body[key])) {
            for (const arrFile of options.body[key]) {
              formData.append(key, arrFile);
            }
          } else {
            formData.append(key, options.body[key]);
          }
        }
        options.body = formData;
      } else {
        options.body = JSON.stringify(options.body);
      }
    }

    // Costruzione dell'URL completo
    const baseUrl = process.env.DIRECTUS_API || "";
    const fullUrl = `${baseUrl.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;

    if (process.env.DEBUG_DIRECTUS) {
      console.log("Directus Call:", { url: fullUrl, options });
    }

    return parseResponse(await fetch(fullUrl, options));
  },

  async put(url, body, options = {}) {
    return directus.call(url, { method: "PUT", body, ...options });
  },

  async post(url, body, options = {}) {
    return directus.call(url, { method: "POST", body, ...options });
  },

  async get(url, options = {}) {
    return directus.call(url, { method: "GET", ...options });
  },

  async delete(url, options = {}) {
    return directus.call(url, { method: "DELETE", ...options });
  },

  async patch(url, body, options = {}) {
    return directus.call(url, { method: "PATCH", body, ...options });
  },

  // Aggiungi un metodo per ottenere un singolo item
  async getOne(id, options = {}) {
    return directus.get(`items/results/${id}`, options);
  },

  // Aggiungi un metodo per eliminare un singolo item
  async deleteOne(id, options = {}) {
    return directus.delete(`items/results/${id}`, options);
  },
};

export default directus;
