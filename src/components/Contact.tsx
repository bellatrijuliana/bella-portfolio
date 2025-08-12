import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  FileText,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bellatrij@gmail.com",
      href: "mailto:bellatrij@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+6285187880144",
      href: "tel:+6285187880144",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bandung, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bellatrijuliana",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bellatrijuliana/",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:bellatrij@gmail.com",
      color: "hover:text-primary",
    },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "QA Consultation",
      description: "Expert advice on testing strategies, automation frameworks, and quality processes.",
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Professional documentation for APIs, user guides, and technical specifications.",
    },
    {
      icon: Calendar,
      title: "Training & Workshops",
      description: "Custom training sessions on testing best practices and documentation standards.",
    },
    {
      icon: ShieldCheck,
      title: "Quick Response Guarantee",
      description: "I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out directly.",
    },
  ];

  const interests = [
    "Software Quality Assurance positions",
    "Technical Writing projects",
    "Test Automation consulting",
    "Documentation strategy",
    "Process improvement initiatives",
  ];

  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold  text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-0">
            Looking for a quality assurance expert or technical writer? I'm always interested in discussing new
            opportunities and projects. Let's connect and explore how we can work together.
          </p>
        </div>

        {/* Equal columns with flex */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Information & Social Links */}
          <div className="flex flex-col h-full space-y-8">
            
            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-white flex-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 font-semibold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 h-full">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 text-left">{info.label}</p>
                      <p className="text-gray-900">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 font-semibold">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 flex-1">
              <h3 className="text-lg text-gray-900 mb-4 font-semibold">Let's Collaborate</h3>
              <p className="text-gray-600 mb-4">I'm particularly interested in:</p>
              <ul className="space-y-2">
                {interests.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column - Services Available & Contact Form */}
          <div className="flex flex-col h-full space-y-8">
            
            {/* Services Available */}
            <Card className="border-0 shadow-lg bg-white flex-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 font-semibold">Services Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 h-full">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-left">{service.title}</h4>
                      <p className="text-justify text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white flex-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 font-semibold">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
}