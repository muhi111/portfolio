import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const worksData = [
  {
    title: 'Project 1',
    description: 'A web application built with React and Node.js',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'An iOS app developed using Swift',
    image: 'https://via.placeholder.com/300x200',
    tags: ['iOS', 'Swift', 'CoreData'],
    githubLink: 'https://github.com/yourusername/project2',
    liveLink: 'https://apps.apple.com/app/project2',
  },
  {
    title: 'Project 3',
    description: 'A machine learning model for image classification',
    image: 'https://via.placeholder.com/300x200',
    tags: ['Python', 'TensorFlow', 'Computer Vision'],
    githubLink: 'https://github.com/yourusername/project3',
    liveLink: null,
  },
  // Add more projects as needed
];

function WorkCard({ work }: { work: typeof worksData[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{work.title}</h3>
        <p className="text-gray-600 mb-4">{work.description}</p>
        <div className="flex flex-wrap mb-4">
          {work.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={work.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaGithub className="inline mr-2" />
            GitHub
          </a>
          {work.liveLink && (
            <a href={work.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <FaExternalLinkAlt className="inline mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Works() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Works - this page is preparing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksData.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;