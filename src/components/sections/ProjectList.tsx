import { useState, useEffect, useMemo } from "react";
import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Card from "../ui/Card";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Hata oluştu");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // useMemo: Gereksiz render'larda filtrelemeyi tekrar hesaplamaz
  const filtered = useMemo(() => {
    return applyFilters(projects, search, category, sortField, sortOrder);
  }, [projects, search, category, sortField, sortOrder]);

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Projelerim</h2>
      
      {/* HATA MESAJI BURAYA GELECEK */}
    {error && (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-red-800">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-sm text-red-600 underline mt-2"
        >
          Tekrar Dene
        </button>
      </div>
    )}

      <ProjectFilter 
        search={search} onSearchChange={setSearch}
        category={category} onCategoryChange={setCategory}
        sortField={sortField} onSortFieldChange={setSortField}
        sortOrder={sortOrder} onSortOrderChange={setSortOrder}
        resultCount={filtered.length} totalCount={projects.length}
      />

      {loading && <div className="animate-spin h-8 w-8 border-b-2 border-blue-600 mx-auto" />}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <Card key={project.id} title={project.title} image={project.image}>
            <p className="text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map(t => (
                <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}