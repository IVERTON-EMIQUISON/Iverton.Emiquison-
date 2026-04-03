import React, { useState } from 'react'
import { Github, Linkedin, Mail, Download, Code, Briefcase, User, ExternalLink, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import Technologies from './components/technolgy'

// Tipos
interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
}

interface Technology {
  name: string
  icon: string
  color: string
}

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Dados do Portfólio
  const portfolio = {
    name: "Iverton Emiquison",
    role: "Desenvolvedor de Software",
    location: "Brasil",
    email: "ivertonbessa@gmail.com",
    github: "https://github.com/IVERTON-EMIQUISON",
    linkedin: "https://www.linkedin.com/in/iverton-emiquison-9a5441231/",
    photo: "./img/iverton.png",

    about: `Sou Bacharel em Tecnologia da Informação e atualmente curso Engenharia de Software pela UFERSA. 
    Tenho forte interesse por programação e desenvolvimento web, buscando aplicar na prática os conhecimentos adquiridos. Estou sempre em busca de novos desafios que contribuam para minha evolução profissional e me permitam desenvolver soluções que gerem impacto positivo.`
  }

  const projects: Project[] = [
    {
      title: "Tecnologia Educacional",
      description: "Simulador educacional voltado para o ensino de Ciências e Física usando JavaScript, HTML e Django.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "HTML/CSS", "Django", "Python"],
      link: "https://exemplo.com",
      github: "https://github.com/usuario/projeto"
    },
    {
      title: "Poritos Pet Shop",
      description: "Aplicação web completa em JavaScript e Django para administração de pet shops com gestão de clientes e serviços.",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop",
      technologies: ["Django", "JavaScript", "PostgreSQL", "Bootstrap"],
      link: "https://exemplo.com"
    },
    {
      title: "Taskflow",
      description: "Gerenciador de tarefas moderno desenvolvido com Django e JavaScript, com recursos de organização e produtividade.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      technologies: ["Django", "JavaScript", "SQLite", "REST API"],
      github: "https://github.com/usuario/taskflow"
    },
    {
      title: "Sistema de Caixa para Supermercado",
      description: "Sistema completo de ponto de venda para supermercados usando Django e JavaScript.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop",
      technologies: ["Django", "JavaScript", "MySQL", "Bootstrap"],
      link: "https://exemplo.com"
    },
    {
      title: "Machine Learning Projects",
      description: "Diversos projetos com análise de dados e modelos preditivos utilizando Python e bibliotecas de ML.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      github: "https://github.com/usuario/ml-projects"
    },
    {
      title: "Landing Page Apeperia",
      description: "Landing page profissional para empresa fictícia usando HTML/CSS e JavaScript moderno.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://exemplo.com"
    }
  ]

  const [menuOpen, setMenuOpen] = useState(false);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Iverton
          </h1>

          {/* Desktop */}
          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          {/* Mobile botão */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 flex flex-col items-center justify-center py-4 space-y-4 text-center">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Disponível para projetos
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Olá, eu sou
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {portfolio.name}
              </span>
            </h1>

            <p className="text-2xl text-slate-300 font-light">
              {portfolio.role}
            </p>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Atuo com desenvolvimento web, criando soluções digitais eficientes e experiências modernas centradas no usuário.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contato"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Entre em Contato
              </a>

              <a
                href='./curriculo.pdf'
                download="curriculo-iverton.pdf"
                className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out border border-slate-700 hover:border-indigo-500 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-out hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-out hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolio.email}`}
                className="w-12 h-12 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-out hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>


          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <img
                src={portfolio.photo}
                alt={portfolio.name}
                className="relative w-100 h-100 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl font-bold">Sobre Mim</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed">
              {portfolio.about}
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <Technologies />

      {/* Projetos - Carrossel */}
      <section id="projetos" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-indigo-400" />
            <h2 className="text-4xl font-bold">Meus Projetos</h2>
          </div>

          {/* Carrossel */}
          <div className="relative">
            {/* Projeto Principal */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <div className="grid md:grid-cols-2">
                {/* Imagem */}
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img
                    src={projects[currentProjectIndex].image}
                    alt={projects[currentProjectIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                {/* Conteúdo */}
                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">
                      {projects[currentProjectIndex].title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed">
                      {projects[currentProjectIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {projects[currentProjectIndex].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    {projects[currentProjectIndex].link && (
                      <a
                        href={projects[currentProjectIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </a>
                    )}
                    {projects[currentProjectIndex].github && (
                      <a
                        href={projects[currentProjectIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-out"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de Navegação */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-indigo-600 p-4 rounded-full transition-all duration-300 ease-out hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-indigo-600 p-4 rounded-full transition-all duration-300 ease-out hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ease-out ${index === currentProjectIndex
                    ? 'w-8 bg-indigo-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails dos Projetos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ease-out hover:scale-105 ${index === currentProjectIndex
                  ? 'border-indigo-500 ring-2 ring-indigo-500/50'
                  : 'border-slate-700 hover:border-indigo-400'
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <p className="absolute bottom-2 left-2 text-xs font-semibold text-white">
                  {project.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Entre em <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Contato
            </span></h2>
          <p className="text-xl text-slate-300 mb-8">
            Vamos trabalhar juntos para criar soluções inovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${portfolio.email}`}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {portfolio.email}
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out border border-slate-700 hover:border-indigo-500 flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2024 {portfolio.name}. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Desenvolvido com React, TypeScript e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
