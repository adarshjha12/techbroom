import { contentRegistry } from "./registry";

export function getContent(slug: string) {
  return contentRegistry[slug] ?? null;
}

export function getAllContent() {
  return Object.values(contentRegistry);
}