import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export async function getProfile() {
  return await client.get({ endpoint: "bio" });
}

export async function getBlogs() {
  return await client.get({ endpoint: "blogs" });
}

export async function getBlogBySlug(slug: string) {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId: slug,
  });
}
