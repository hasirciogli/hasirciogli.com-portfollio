"use client"

import { Github, Instagram, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SocialLink from "@/components/SocialLink";
import { setLanguagePreference } from "@/lib/language-utils";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogFooter from "@/components/blog/BlogFooter";

import { motion } from "framer-motion";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <BlogNavbar />
      <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero Section */}
      <section className="px-4 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight z-10"
          >
            <h1>
              Mustafa Hasırcıoğlu
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400 z-10"
          >
            <p>
              Software Developer & Designer
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-zinc-400 z-40"
          >
            <p>
              I create and manage innovative projects to learn, apply, and grow as a professional,
              aiming to build and manage a large-scale company in the future.
            </p>
          </motion.div>

          {/* New biography links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex gap-4 text-sm z-40 flex-wrap"
          >
            <Link
              href="/mustafa-hasircioglu-kimdir"
              className="text-zinc-400 hover:text-white transition-colors flex items-center"
            >
              <span className="border-b border-dotted border-zinc-600">
                Mustafa Hasırcıoğlu Kimdir?
              </span>
              <span className="ml-1 text-zinc-500"></span>
            </Link>
            <span className="text-zinc-600">•</span>
            <Link
              href="/who-is-mustafa-hasircioglu"
              className="text-zinc-400 hover:text-white transition-colors flex items-center"
            >
              <span className="border-b border-dotted border-zinc-600">
                Who is Mustafa Hasırcıoğlu?
              </span>
              <span className="ml-1 text-zinc-500"></span>
            </Link>
            <span className="text-zinc-600">•</span>
            <Link
              href="/blogs/developer-philosophy/tr"
              onClick={() => setLanguagePreference('tr')}
              className="text-zinc-400 hover:text-white transition-colors flex items-center"
            >
              <span className="border-b border-dotted border-zinc-600">
                Geliştirici Felsefem
              </span>
              <span className="ml-1 text-zinc-500">💭</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 z-10 flex-wrap"
          >
            <SocialLink href="https://www.linkedin.com/in/hasircioglu/" icon={<LinkedinIcon />} label="LinkedIn" />
            <SocialLink href="https://github.com/hasirciogli" icon={<Github />} label="GitHub" />
            <SocialLink href="mailto:mhasirciogli@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="https://instagram.com/mr.hasircioglu" icon={<Instagram />} label="Instagram" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden text-4xl md:text-6xl font-bold tracking-tight absolute top-0 right-0 z-0"
          >
            <Image alt="Mustafa Hasırcıoğlu" src={"/mustafa-hasircioglu.webp"} width={1080} height={1080}
              style={{
                WebkitMaskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
                maskImage: 'linear-gradient(to left, red 50%, transparent 100%)',
              }}
              className="aspect-square h-24 w-24 lg:h-60 lg:w-60 duration-300 rounded-full overflow-hidden" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="deweloper.cloud"
              description="Cloud development platform"
              link="https://deweloper.cloud"
            />
            <ProjectCard
              title="hsrcpay.com"
              description="Payment processing solution"
              link="https://hsrcpay.com"
            />
            <ProjectCard
              title="anonimsor.com"
              description="Anonymous Q&A platform"
              link="https://anonimsor.com"
            />
            <ProjectCard
              title="Fightland"
              description="Gaming platform"
              link="https://fightland.vercel.app"
            />
            <ProjectCard
              title="ficksa.com"
              description="E-commerce solution"
              link="https://ficksa.com"
            />
            {/* <ProjectCard
              title="trinkmoney.com"
              description="Financial services platform"
              link="https://trinkmoney.com"
            /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Programming Languages */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>C++</SkillBadge>
                <SkillBadge>C#</SkillBadge>
                <SkillBadge>Go</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>JavaScript</SkillBadge>
                <SkillBadge>PHP</SkillBadge>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Redux</SkillBadge>
                <SkillBadge>HTML</SkillBadge>
                <SkillBadge>CSS</SkillBadge>
              </div>
            </div>

            {/* Backend Development */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Node.js</SkillBadge>
                <SkillBadge>Laravel</SkillBadge>
              </div>
            </div>

            {/* Databases */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Databases</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>MySQL</SkillBadge>
                <SkillBadge>MongoDB</SkillBadge>
                <SkillBadge>PostgreSQL</SkillBadge>
                <SkillBadge>Redis</SkillBadge>
              </div>
            </div>

            {/* DevOps & Containerization */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">DevOps & Containerization</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Docker</SkillBadge>
                <SkillBadge>Kubernetes</SkillBadge>
                <SkillBadge>CI/CD</SkillBadge>
                <SkillBadge>Jenkins</SkillBadge>
                <SkillBadge>Terraform</SkillBadge>
                <SkillBadge>Vault</SkillBadge>
              </div>
            </div>

            {/* Messaging & Queues */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Messaging & Queues</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>RabbitMQ</SkillBadge>
                <SkillBadge>MQTT</SkillBadge>
                <SkillBadge>Kafka</SkillBadge>
              </div>
            </div>

            {/* Cloud Services */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Cloud Services</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>AWS</SkillBadge>
                <SkillBadge>Google Cloud</SkillBadge>
                <SkillBadge>Hetzner</SkillBadge>
                <SkillBadge>Linode</SkillBadge>
                <SkillBadge>OVH</SkillBadge>
              </div>
            </div>

            {/* Authentication & Authorization */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Authentication & Authorization</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Auth0</SkillBadge>
                <SkillBadge>JWT</SkillBadge>
                <SkillBadge>Clerk</SkillBadge>
                <SkillBadge>Kinde</SkillBadge>
              </div>
            </div>

            {/* Payment Systems */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Payment Systems</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Stripe</SkillBadge>
                <SkillBadge>Square</SkillBadge>
                <SkillBadge>PayPal</SkillBadge>
                <SkillBadge>Payoneer</SkillBadge>
              </div>
            </div>

            {/* Tools & Concepts */}
            <div className="flex flex-col">
              <h3 className="font-semibold mb-3 text-lg">Tools & Concepts</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge>Git</SkillBadge>
                <SkillBadge>Docker Compose</SkillBadge>
                <SkillBadge>Algorithms</SkillBadge>
                <SkillBadge>Data Structures</SkillBadge>
                <SkillBadge>Design Patterns</SkillBadge>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="px-4 py-16 bg-[#1F1F1F]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4"
          >
            <h2>Support Me</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-zinc-400 mb-8"
          >
            <p>
              If you enjoy my work or find it helpful, consider supporting me through a donation.
              Your support helps me continue creating new projects and developing my skills.
            </p>
          </motion.div>

          {/* Donation Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://buymeacoffee.com/hasirciogli" // PayPal link or donation link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange-600 text-white rounded-full text-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              Donate with Buy Me a Coffee
            </a>
          </motion.div>
        </div>
      </section>


      </main>
      <div className="mt-0">
        <BlogFooter />
      </div>
    </>
  );
}
