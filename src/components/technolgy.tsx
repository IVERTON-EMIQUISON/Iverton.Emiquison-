import { Code } from "lucide-react";

interface Technology {
    name: string;
    icon: string;
}

export default function TechnologiesSection() {
    const technologies: Technology[] = [
  // Frontend
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },

  // Backend
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },

  // Ferramentas
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="flex items-center gap-3 mb-12">
                    <Code className="w-8 h-8 text-indigo-400" />
                    <h2 className="text-4xl font-bold">Tecnologias</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 
              hover:border-indigo-500 transition-all duration-300 ease-out 
              hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 group"
                        >
                            <div className="text-center space-y-3">

                                {/* Ícone inteligente */}
                                <div className="flex justify-center items-center h-16">
                                    {tech.icon.startsWith("http") ? (
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.name === "GitHub" ? "invert" : ""
                                                }`}
                                        />
                                    ) : (
                                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                            {tech.icon}
                                        </span>
                                    )}
                                </div>

                                {/* Nome */}
                                <p className="text-sm font-semibold text-slate-300">
                                    {tech.name}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}