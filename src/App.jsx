import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import ProjectModal from './components/ProjectModal';
import Process from './components/Process';
import Accreditation from './components/Accreditation';
import Tools from './components/Tools';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projectsData } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenProjectModal = (projectOrId) => {
    if (typeof projectOrId === 'string') {
      const found = projectsData.find(p => p.id === projectOrId);
      if (found) setSelectedProject(found);
    } else {
      setSelectedProject(projectOrId);
    }
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-secondary selection:text-on-secondary flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* Mobile Slide-Out Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Main Page Canvas */}
      <main className="flex-grow">
        <Hero onSelectProject={handleOpenProjectModal} />
        <MarqueeTicker />
        <About />
        <Services />
        <SelectedWork onOpenModal={handleOpenProjectModal} />
        <Process />
        <Accreditation />
        <Tools />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
}
