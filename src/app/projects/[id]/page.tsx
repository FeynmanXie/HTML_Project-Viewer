import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// 动态导入客户端组件
const ProjectViewer = dynamic(() => import('@/components/ProjectViewer'), { ssr: false });

// 生成静态路径参数
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    return notFound();
  }

  // 获取iframe嵌入代码的URL
  const getEmbedUrl = () => {
    // 从项目URL中提取基本路径
    const baseUrl = project.url.split('/').slice(0, -1).join('/');
    return `${baseUrl}/embed.html`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          href="/projects" 
          className="text-blue-500 hover:text-blue-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          返回项目列表
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
            <a 
              href={getEmbedUrl()} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md border border-gray-300 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              获取嵌入代码
            </a>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span className="mr-4">作者: {project.author}</span>
            <span>创建时间: {project.createdAt}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto">
        <ProjectViewer 
          projectUrl={project.url} 
          title={project.title} 
        />
      </div>
    </div>
  );
} 