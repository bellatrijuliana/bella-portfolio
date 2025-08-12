import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bug, 
  FileText, 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  TestTube, 
  BookOpen,
  Users,
  MessageSquare,
  Clock,
  Target,
  Monitor
} from "lucide-react";

export function Skills() {
  const technicalSkills = [
    {
      category: "Quality Assurance",
      icon: <Bug className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Manual Testing", level: 95 },
        { name: "Automated Testing", level: 80 },
        { name: "API Testing", level: 85 },
        { name: "Performance Testing", level: 75 },
        { name: "Security Testing", level: 70 }
      ]
    },
    {
      category: "Technical Writing",
      icon: <FileText className="h-6 w-6 text-primary" />,
      skills: [
        { name: "User Documentation", level: 95 },
        { name: "API Documentation", level: 90 },
        { name: "Technical Specifications", level: 85 },
        { name: "Process Documentation", level: 90 },
        { name: "Training Materials", level: 80 }
      ]
    },
    {
      category: "Web Development",
      icon: <Monitor className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Golang", level: 70 }
      ]
    },
    {
      category: "Testing Tools",
      icon: <TestTube className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Selenium", level: 80 },
        { name: "Postman", level: 90 },
        { name: "JIRA", level: 95 },
        { name: "TestRail", level: 85 },
        { name: "Cypress", level: 75 }
      ]
    },
    {
      category: "Documentation Tools",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Confluence", level: 90 },
        { name: "GitBook", level: 85 },
        { name: "Notion", level: 95 },
        { name: "Markdown", level: 90 },
        { name: "Figma", level: 80 }
      ]
    }
  ];

  const platforms = [
    { name: "Web Testing", icon: <Globe className="h-5 w-5" /> },
    { name: "Mobile Testing", icon: <Smartphone className="h-5 w-5" /> },
    { name: "API Testing", icon: <Database className="h-5 w-5" /> },
    { name: "Database Testing", icon: <Code2 className="h-5 w-5" /> }
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="h-5 w-5 text-primary" /> },
    { name: "Team Collaboration", icon: <Users className="h-5 w-5 text-primary" /> },
    { name: "Time Management", icon: <Clock className="h-5 w-5 text-primary" /> },
    { name: "Problem Solving", icon: <Target className="h-5 w-5 text-primary" /> }
  ];

  return (
    <section id="skills" className="py-8">
      <div className="bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6"
        >
          <div className="text-center mb-4 py-6">
            <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-0">
              A comprehensive skill set covering quality assurance, technical writing, 
              web development, and various testing and documentation tools.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {technicalSkills.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    {category.icon}
                    <h3 className="text-lg font-bold">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-normal">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testing Platforms */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              Testing Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 border-primary/20 text-primary bg-white">
                  <div className="flex items-center space-x-2">
                    {platform.icon}
                    <span>{platform.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 border-primary/20 text-primary bg-white mb-10">
                  <div className="flex items-center space-x-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}