import { buttonVariants } from "@/components/ui/button";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/IMG_4450.png"; // <-- Pastikan path gambar ini benar
import { cn } from "@/lib/utils"; 

export function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center bg-secondary dark:bg-gray-900 pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Teks */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="font-semibold text-primary uppercase tracking-wider">Software Professional</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Bella Tri Juliana
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-gray-300 leading-tight">
              Quality Assurance & <span className="text-gray-700">Technical Writer</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Passionate about software engineering, specializing in quality assurance and full-spectrum technical documentation to bridge the gap between complex technical concepts and clear, actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-white hover:bg-primary/90")}>
                Get In Touch
              </a>
<a
  href="/Bella-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
>
  <Download className="w-4 h-4 mr-2" />
  Download CV
</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col text-center justify-between">
                <p className="text-4xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Professional Experience</p>
              </div> 
              
              {/* Item 2 */}
              <div className="flex flex-col text-center justify-between">
                <p className="text-1.8xl font-bold text-primary">Dynamic and Continuous Testing</p>
                <p className="text-sm text-muted-foreground mt-2">Enterprise Level System</p>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col text-center justify-between">
                <p className="text-1.8xl font-bold text-primary">Full-Spectrum Documentation</p>
                <p className="text-sm text-muted-foreground mt-2">For Developers and End-User</p>
              </div>
            </div>
          </div>

          {/* Kolom Gambar */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/10 -rotate-12"></div>
              <div className="absolute inset-0 rounded-full bg-primary/20 rotate-12"></div>
              <img
                src={profilePhoto}
                alt="Bella Tri Juliana"
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-900 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
