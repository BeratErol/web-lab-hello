import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_URL);
    
    // HTTP durumunu kontrol et 
    if (!response.ok) {
      throw new Error(`Projeler yüklenemedi: ${response.status}`);
    }
    
    // JSON'a dönüştür ve tipi doğrula 
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    // Hatayı logla ve yukarı fırlat 
    console.error("Veri çekme hatası:", error);
    throw error;
  }
} 