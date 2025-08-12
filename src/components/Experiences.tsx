import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Quality Assurance Specialist",
      company: "PT. Satu Nol Tujuh",
      location: "Bandung, West Java, Indonesia · Remote",
      period: "Nov 2023 - Present",
      type: "Full-time",
      description: "Leading QA initiatives and delivering full-spectrum technical documentation, from internal test cases to public-facing user guides, ensuring clarity across all platforms.",
      achievements: [
        "Designed and developed comprehensive test plans, including strategies, scope, and resource allocation.",
        "Executed dynamic testing methodologies based on project needs, including manual, automated, and performance testing.",
        "Managed and wrote full-spectrum documentation, including API references, user manuals, and detailed case documents for various software modules.",
        "Proactively identified opportunities for QA process improvement and proposed solutions to enhance product quality."
      ],
      technologies: ["Dynamic Testing", "Manual & Automated Testing", "Performance Testing", "Test Planning", "Technical Documentation", "Agile"]
    },
    {
      id: 2,
      title: "Project Management Team",
      company: "PT. Stechoq Robotika Indonesia",
      location: "Sleman, Yogyakarta, Indonesia · Remote",
      period: "Nov 2022 - Jan 2023",
      type: "Apprenticeship",
      description: "Collaborated with cross-functional teams in product planning, while overseeing development and testing to ensure the quality of DCS software.",
      achievements: [
        "Ensured the quality of DCS Production Warehouse and Delivery software by supervising the entire development-to-testing stage.",
        "Created complete business documentation and presented periodic reports to management and stakeholders.",
        "Conducted product planning, cost budget planning, and developed business model canvases for software projects.",
        "Collaborated with development teams to ensure projects met deadlines and objectives."
      ],
      technologies: ["DCS", "Project Management", "Technical Writing", "Business Model Canvas"]
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      year: "2022",
      credentialId: "7b7b1045-6e9f-4b71-8bff-4526b828cdf2",
      credentialUrl: "https://www.credly.com/badges/7b7b1045-6e9f-4b71-8bff-4526b828cdf2/linked_in_profile",
      type: "Training"
    },
    {
      name: "Microsoft Certified: Dynamics 365 Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "328b9765-cf96-4e8b-9fd8-f5fd29a766c1",
      credentialUrl: "https://www.credly.com/badges/328b9765-cf96-4e8b-9fd8-f5fd29a766c1?source=linked_in_profile",
      type: "Certification"
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "cbfe98e6-8539-43a2-bc0a-23d53626bc4b",
      credentialUrl: "https://www.credly.com/badges/cbfe98e6-8539-43a2-bc0a-23d53626bc4b?source=linked_in_profile",
      type: "Certification"
    },
    {
      name: "Microsoft Certified: Power Platform Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "5c20fbf7-695e-40c9-a343-cf9c4e88255a",
      credentialUrl: "https://www.credly.com/badges/5c20fbf7-695e-40c9-a343-cf9c4e88255a?source=linked_in_profile",
      type: "Certification"
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2022",
      credentialId: "188ed187-d7b0-43f4-96a8-3d5f89654390",
      credentialUrl: "https://www.credly.com/badges/188ed187-d7b0-43f4-96a8-3d5f89654390?source=linked_in_profile",
      type: "Certification"
    },
    {
      name: "Cisco CyberOps Associate",
      issuer: "Cisco",
      year: "2022",
      credentialId: "e3fe1b72-eb68-44ce-a3a2-bd91ecba8b26",
      credentialUrl: "https://www.credly.com/badges/e3fe1b72-eb68-44ce-a3a2-bd91ecba8b26?source=linked_in_profile",
      type: "Training"
    }
  ];

  return (
    <section id="experience" className="bg-white">
      <div className="container max-w-6xl mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=""
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900 mb-4">
              Professional Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-0">
              My professional journey in quality assurance and technical documentation, 
              from apprenticeship experiences to current full-time specialist roles.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-left">{exp.title}</h3>
                        <p className="text-primary font-medium text-lg text-left">{exp.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-justify">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex text-justify items-start space-x-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1.5 block w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-2 text-center text-primary">
              Certifications & Training
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional certifications and training programs completed to enhance technical expertise 
              in cloud computing, cybersecurity, and Microsoft technologies.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="items-center gap-2 mb-1 text-center">
                          <h4 className="font-bold text-sm">{cert.name}</h4>
                          <Badge variant="outline" className="text-xs px-1 py-0">
                            {cert.type}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                      </div>
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 flex-shrink-0" />
                      </a>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p>Year: {cert.year}</p>
                      <p className="truncate">Badge ID: {cert.credentialId}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}