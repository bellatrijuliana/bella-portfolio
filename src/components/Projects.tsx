import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, FileText, Bot } from "lucide-react"; 
import { ImageWithFallback } from "@/components/figma/ImageWithFallback"; 

export function Projects() {
  const projects = [
    {
      title: "End-to-End Testing for Ad Distribution Platform",
      description: "Ensured quality for a dynamic ad-tech platform for a Japanese client, handling frequent specification changes through a continuous and adaptive testing strategy.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop", 
      category: "Quality Assurance",
      technologies: ["Eksploratory Testing", "Regression Testing", "End-to-End Testing", "API Testing","Agile"],
      features: [
        "Implemented a dynamic testing strategy for UI/UX, frontend, and backend.",
        "Designed and executed comprehensive regression testing suites to prevent new bugs.",
        "Validated functionalities across interconnected system branches."
      ],
      liveUrl: null, // You can add URL later: "https://example.com"
      hasExternalLink: true,
    },
    {
      title: "Full-Spectrum Documentation for Multiple Platforms",
      description: "Designed, wrote, and managed a wide range of technical documents for various projects, catering to diverse audiences from developers to IT beginners in two languages.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Technical Writing",
      technologies: ["API Documentation", "User Guides", "Knowledge Base", "GenAI Prompting", "Notion", "Wiki", "Google Workspaces"],
      features: [
        "Created complete API documentation with endpoints, parameters, and examples.",
        "Wrote user-friendly guides and tutorials for end-users and beginners.",
        "Managed multilingual documentation using a GenAI-assisted workflow for translation."
      ],
      liveUrl: null, // You can add URL later: "https://example.com"
      hasExternalLink: true,
    },
    {
      title: "Multi-Faceted QA for a FinTech Ed-Tech Platform",
      description: "Conducted comprehensive QA for a trading education app, covering functional, automation, and performance aspects.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Quality Assurance",
      technologies: ["Performance Testing", "Manual Testing", "Test Case Development", "Market Analysis"],
      features: [
        "Developed realistic test cases based on market conditions and user behavior.",
        "Performed extensive manual testing for complex trading simulation workflows.",
        "Conducted performance and load testing to identify critical system bottlenecks."
      ],
      liveUrl: null, // You can add URL later: "https://example.com"
      hasExternalLink: true,
    },
    {
      title: "Data Integrity Testing for a School Management System",
      description: "Ensured data consistency and reliability across a multi-module school management system, tackling challenges of data inconsistency between admin and client portals.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      category: "Quality Assurance",
      technologies: ["Data Validation", "Manual Testing", "Frontend & Backend Testing"],
      features: [
        "Performed rigorous data integrity testing to resolve data inconsistencies between portals.",
        "Validated complex workflows for each features across interconnected system branches.",
        "Executed repetitive, detail-oriented testing to ensure all data points were accurate."
      ],
      liveUrl: null, // You can add URL later: "https://example.com"
      hasExternalLink: true,
    },
  ];

  const handleExternalLink = (url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    // If no URL, do nothing (no alert or notification)
  };

  return (
    <section id= "projects" className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900 mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            A showcase of quality assurance and technical writing projects that demonstrate expertise in dynamic testing, 
            full-spectrum documentation, and process improvement.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.category === "Technical Writing" ? FileText : Bot;
            
            return (
              <Card key={index} className="border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Badge & External Link */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                    
                    {/* External Link Icon */}
                    {project.hasExternalLink && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="h-8 w-8 p-0 bg-white/90 hover:bg-white shadow-md transition-all duration-200 hover:scale-105"
                        onClick={() => handleExternalLink(project.liveUrl)}
                        title={project.liveUrl ? "View Project" : "External link"}
                      >
                        <ExternalLink className="h-4 w-4 text-gray-700" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-justify text-xl text-gray-900 dark:text-white flex items-start gap-3">
                      <IconComponent className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{project.title}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 text-justify">{project.description}</p>

                    {/* Features */}
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 text-justify">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects Section */}
        <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">And Many More...</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond these featured projects, my experience includes ensuring quality for complex payroll systems, 
            enterprise-level translation software, and innovative language-learning platforms.
          </p>
        </div>
      </div>
    </section>
  );
}