import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: '项目列表 | Projects Viewer',
  description: '浏览HTML游戏和应用项目',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">项目列表</h1>
        <p className="text-gray-600">浏览HTML游戏和应用，体验全屏互动</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
} 