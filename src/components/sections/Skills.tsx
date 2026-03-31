const skills = ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Vite", "Git/GitHub"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Yeteneklerim</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm font-medium text-blue-600 dark:text-blue-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}