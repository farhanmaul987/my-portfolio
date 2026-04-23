import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "farhanmaul987@gmail.com",
    href: "mailto:farhanmaul987@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/farhanmaul987",
    href: "https://www.linkedin.com/in/farhanmaul987",
    description: "Let's connect professionally",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/farhanmaul987",
    href: "https://github.com/farhanmaul987",
    description: "See what I'm building",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-16"
        >
          {/* CTA Block */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12 border-b border-border">
            <div className="flex flex-col gap-4 max-w-xl">
              <motion.span variants={fadeUp} className="section-label">
                Contact
              </motion.span>
              <motion.h2 variants={fadeUp} className="section-heading text-4xl lg:text-5xl">
                Let's build something
                <br />
                <span className="text-primary">useful.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted leading-relaxed">
                Whether it's a collaboration, a job opportunity, or just a
                technical discussion — feel free to reach out. I read every
                message.
              </motion.p>
            </div>

            <motion.div variants={fadeUp}>
              <Button size="lg" asChild className="group">
                <a href="mailto:farhanmaul987@gmail.com">
                  Send an email
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Contact cards */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {contactLinks.map(({ icon: Icon, label, value, href, description }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-subtle uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-text group-hover:text-primary transition-colors">
                    {value}
                  </p>
                  <p className="text-xs text-subtle mt-0.5">{description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
