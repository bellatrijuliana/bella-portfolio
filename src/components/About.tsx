import { Card, CardContent } from "@/components/ui/card";
import { Code, FileText, Bug, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Software Engineering Passion",
      description: "Deeply passionate about creating robust, scalable software solutions and staying current with industry trends."
    },
    {
      icon: Bug,
      title: "Quality Assurance Expert",
      description: "Specialized in ensuring software quality through comprehensive testing strategies and automation."
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Expert in translating complex technical concepts into clear, accessible documentation for diverse audiences."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Strong advocate for cross-functional collaboration and effective communication in development teams."
    }
  ];

  return (
    <section id="about" className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900 mb-4">About Me</h2>
          <p className="text-1xl text-gray-600 max-w-3xl mx-auto">
            I'm a software professional with a deep passion for engineering excellence. 
            Currently working in quality assurance and technical writing, I bring a unique 
            perspective that combines technical expertise with clear communication.
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Journey */}
          <div className="space-y-4">
            <h3 className="text-2xl text-gray-900 font-semibold">My Journey in Tech</h3>
            <div className="space-y-2 text-justify text-gray-600">
              <p>
                My journey in technology began with a fascination for how software works behind the scenes. 
                This curiosity led me to pursue a career in software engineering, where I discovered my passion 
                for ensuring quality and communicating complex technical concepts.
              </p>
              <p>
                Currently working as a Software Quality Assurance professional and Technical Writer, I've had 
                the opportunity to work on diverse projects, from web applications to enterprise software systems. 
                My role has taught me the importance of meticulous attention to detail and the value of clear documentation.
              </p>
              <p>
                I'm continuously learning and staying updated with the latest technologies and methodologies 
                in software development, always looking for ways to improve processes and deliver better results.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-lg text-gray-900 mb-6 font-semibold">What Drives Me</h4>
              <div className="space-y-4 text-justify">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Creating software that makes a real difference in people's lives</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Ensuring every piece of software meets the highest quality standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Making complex technical concepts accessible to everyone</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Continuous learning and professional development</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}