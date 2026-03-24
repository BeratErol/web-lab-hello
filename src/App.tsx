import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- 1. DURUM (STATE) TANIMLARI ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- 2. VERİ ÇEKME (FETCH) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- 3. TÜRETİLMİŞ VERİ (Filtreleme ve Sıralama) ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 md:p-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Yazılım Projelerim
        </h1>

        {/* HATA DURUMU */}
        {error && (
          <Alert variant="error" title="Sistemsel Hata">
            {error}
          </Alert>
        )}

        {/* FİLTRELEME VE ARAMA PANELİ */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm">
          <div className="w-full md:w-1/3">
            <Input
              id="search"
              placeholder="Proje veya teknoloji ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "primary" : "ghost"}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "Tümü" : cat.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as SortField)}
              className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="year">Yıla Göre</option>
              <option value="title">Başlığa Göre</option>
            </select>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortOrder(prev => (prev === "asc" ? "desc" : "asc"))}
            >
              {sortOrder === "asc" ? "↑ A-Z" : "↓ Z-A"}
            </Button>
          </div>
        </div>

        {/* YÜKLENİYOR DURUMU */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* PROJE LİSTESİ */}
        {!loading && (
          <>
            {filtered.length === 0 ? (
              <p className="text-center text-gray-500 py-20">Eşleşen proje bulunamadı.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((project) => (
                  <Card
                    key={project.id}
                    variant="elevated"
                    title={project.title}
                    image={project.image}
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-[10px] px-2 py-0.5 rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400 border-t pt-3 dark:border-gray-800">
                      <span>{project.year}</span>
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            {/* SONUÇ SAYISI */}
            <p className="text-sm text-gray-500 mt-8 text-center italic">
              {projects.length} projeden {filtered.length} tanesi gösteriliyor.
            </p>
          </>
        )}
      </div>
    </div>
  );
} 