import { useState } from 'react';
import projects from '../data/projectsData';

export function useVisibleProjects(initialCount = 9, step = 9) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const isAllVisible = visibleCount >= projects.length;
  const visibleProjects = projects.slice(0, visibleCount);

  const handleToggleProjects = () => {
    if (isAllVisible) {
      setVisibleCount(initialCount);
    } else {
      setVisibleCount(prev => Math.min(prev + step, projects.length));
    }
  };

  return {
    visibleProjects,
    isAllVisible,
    handleToggleProjects,
  };
}
