// src/app/lib/slugify.ts
export function slugify(text: string) {
  if (!text) return "";
  return String(text)
    .normalize("NFKD") // normaliza acentos
    .replace(/[\u0300-\u036f]/g, "") // remove diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove caracteres inválidos
    .replace(/\s+/g, "-") // espaços para hífen
    .replace(/-+/g, "-"); // vários hífens -> 1
}
