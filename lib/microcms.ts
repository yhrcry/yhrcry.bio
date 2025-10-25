import { createClient } from "microcms-ts-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getBio = async () => {
  try {
    const data = await client.get({ endpoint: "bio" });

    if ("contents" in data) {
      return data.contents[0];
    }

    return data;
  } catch (error) {
    console.error("Error fetching bio:", error);
    return null;
  }
};
