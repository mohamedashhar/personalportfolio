"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Building } from "lucide-react"
import { useRef } from "react"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["Python", "C", "Node.js", "API Development"],
    "Tools & Technologies": ["Git", "GitHub", "Web Development", "AI Integration"],
    Specializations: ["Full Stack Development", "Event Planning Systems", "Trading Platforms"],
  }

  const projects = [
    {
      title: "Event Planner Web Application",
      description:
        "A comprehensive platform for planning and organizing events such as weddings and parties with AI-driven recommendations.",
      tech: ["JavaScript", "Python", "AI Integration", "Web Development"],
      features: [
        "AI-driven recommendations for catering and photography services",
        "Image generation for venue previews based on user input",
        "Service provider registration system",
        "Real-time communication features",
      ],
      github: "https://github.com/mohamedashhar/event-planner",
      image: "/modern-event-planning-dashboard-with-ai-recommenda.jpg",
    },
    {
      title: "TradeHive Quiz Platform",
      description:
        "An educational platform designed for traders to assess and improve their trading knowledge through interactive quizzes.",
      tech: ["JavaScript", "Python", "Quiz System", "Educational Platform"],
      features: [
        "Tailored quiz content for trading fundamentals",
        "Progress tracking and analytics",
        "Interactive learning modules",
        "Performance assessment tools",
      ],
      github: "https://github.com/mohamedashhar/TradeHive",
      image: "/trading-quiz-platform-dashboard-with-charts-and-pr.jpg",
    },
  ]

  const experience = [
    {
      company: "Edu-versity",
      role: "Full Stack Web Development Intern",
      period: "July 2024 – August 2024",
      highlights: [
        "Participated in project-based learning led by industry experts",
        "Gained hands-on experience in web development and data analysis",
        "Collaborated on real-world projects using modern development practices",
        "Enhanced skills in both frontend and backend technologies",
      ],
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="text-xl font-bold text-glow" whileHover={{ scale: 1.05 }}>
            MA
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Mohamed Ashhar</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Full Stack Developer & Computer Science Student
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Passionate about creating innovative web solutions with AI integration. Currently pursuing B.Tech in
              Computer Science with a focus on modern development practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="glow-hover">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="glow-hover bg-transparent">
              <Github className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://linkedin.com/in/mohamed-ashhar-44396427b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-hover p-2 rounded-full"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://github.com/mohamedashhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-hover p-2 rounded-full"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:mohamedashhar11@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors glow-hover p-2 rounded-full"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-card/50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Highly motivated computer science undergraduate with a strong foundation in software development. Proven
              ability to learn quickly, communicate effectively, and solve problems creatively.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">APJ Abdul Kalam Technological University</p>
                  <p className="text-sm text-muted-foreground">Current CGPA: 7.72/10 • Expected 2026</p>
                  <p className="text-sm text-primary">Minor in Robotics and Automation</p>
                </div>
                <div>
                  <h4 className="font-semibold">Higher Secondary (Class 12)</h4>
                  <p className="text-muted-foreground">IUHSS Parappur, Malappuram, Kerala</p>
                </div>
                <div>
                  <h4 className="font-semibold">High School (Class 10)</h4>
                  <p className="text-muted-foreground">International Indian School, Dammam, Saudi Arabia</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Malappuram, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:mohamedashhar11@gmail.com" className="hover:text-primary transition-colors">
                    mohamedashhar11@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91-9037980221</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  <a
                    href="https://linkedin.com/in/mohamed-ashhar-44396427b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-primary" />
                  <a
                    href="https://github.com/mohamedashhar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div key={category} variants={fadeInUp}>
                <Card className="h-full glow-hover">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-card/50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Some of my recent work and contributions</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-12">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <Card className="overflow-hidden glow-hover">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button asChild className="glow-hover">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Experience</h2>
            <p className="text-xl text-muted-foreground">My professional journey and internships</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="max-w-4xl mx-auto">
            {experience.map((exp) => (
              <motion.div key={exp.company} variants={fadeInUp}>
                <Card className="glow-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-card/50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-glow">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.a
                href="mailto:mohamedashhar11@gmail.com"
                className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">Email</span>
                <span className="text-sm text-muted-foreground">mohamedashhar11@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/mohamed-ashhar-44396427b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">LinkedIn</span>
                <span className="text-sm text-muted-foreground">Connect with me</span>
              </motion.a>

              <motion.a
                href="https://github.com/mohamedashhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary transition-colors glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-8 w-8 text-primary mb-2" />
                <span className="font-medium">GitHub</span>
                <span className="text-sm text-muted-foreground">View my code</span>
              </motion.a>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="glow-hover">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Mohamed Ashhar. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  )
}
