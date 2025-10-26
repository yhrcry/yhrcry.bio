import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export const getBio = async () => {
  try {
    const data = await client.getObject({
      endpoint: "bio",
    });
    return data;
  } catch (error) {
    console.error("microCMS fetch error:", error);
    throw new Error("Failed to fetch bio data from microCMS");
  }
};
