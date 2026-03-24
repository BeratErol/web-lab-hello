// src/utils/projectHelpers.ts
import type {
  Project, Category, SortField, SortOrder
} from "../types/project";

// 1. Arama filtresi: Başlık, açıklama veya teknolojilerde arama yapar [cite: 1040-1056]
export function filterBySearch(
  projects: Project[],
  query: string
): Project[] {
  if (!query.trim()) return projects;
  const lower = query.toLowerCase();
  return projects.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.tech.some(t => t.toLowerCase().includes(lower))
  );
}

// 2. Kategori filtresi: "all" değilse seçili kategoriye göre süzer [cite: 1070-1081]
export function filterByCategory(
  projects: Project[],
  category: Category | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter(p => p.category === category);
}

// 3. Sıralama: Yıla veya başlığa göre artan/azalan sıralar [cite: 1087-1115]
export function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title, "tr");
  });
  
  return order === "desc" ? sorted.reverse() : sorted;
}

// 4. Hepsini birleştir: Tüm filtreleri sırayla uygular [cite: 1128-1141]
export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
} 