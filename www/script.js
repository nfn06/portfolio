function toggleProject(project) {
    const allProjects = document.querySelectorAll('.project');
    
    allProjects.forEach(p => {
      if (p !== project) {
        p.classList.remove('expanded');
      }
    });
  
    // Toggle the 'expanded' class on the clicked project
    project.classList.toggle('expanded');
  }
  