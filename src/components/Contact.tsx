import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Copy } from 'lucide-react';

const Contact = () => {
  const email = "nethminavihanga275@gmail.com";
  const phone = "+94 70 166 8976";
  const phoneDial = "+94701668976";

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vihanga-fernando-590522255' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/VihaFernando' },
  ];

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-[#050505] overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Header (Unchanged) */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            Let's start a <span className="font-serif italic text-blue-400">conversation</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mt-4 text-base md:text-lg font-light max-w-lg"
          >
            Interested in collaborating or have a project idea? I'm always open to discussing new opportunities.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* 1. Email Card (Wide) */}
          <motion.a
            href={`mailto:${email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            // Changed: p-6 (mobile) -> md:p-8, min-h-[200px] instead of fixed h-64
            className="col-span-1 md:col-span-2 group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[200px] md:h-auto"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>

            {/* Changed: Smaller icon box on mobile */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-neutral-400 font-medium mb-2 text-sm md:text-base">Drop me a line</h3>
              {/* Changed: Text size adjusts from lg -> 3xl, added break-all for long emails */}
              <span className="text-lg sm:text-xl md:text-3xl font-semibold text-white tracking-tight group-hover:text-blue-200 transition-colors break-all">
                {email}
              </span>
            </div>
          </motion.a>

          {/* 2. Phone Card & Location Stack */}
          <div className="col-span-1 flex flex-col gap-4 md:gap-6">

            {/* Phone Card */}
            <motion.a
              href={`tel:${phoneDial}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              // Changed: p-5 (mobile) -> md:p-6
              className="flex-1 group p-5 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-neutral-400 text-xs md:text-sm font-medium mb-1">Call me</h3>
                {/* Changed: Text size base -> lg */}
                <span className="text-base md:text-lg font-semibold text-white">{phone}</span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              // Changed: p-5 (mobile) -> md:p-6
              className="flex-1 p-5 md:p-6 rounded-3xl border border-white/10 bg-white/[0.02] flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-neutral-400 text-xs md:text-sm font-medium">Based in</h3>
                {/* Changed: Text size base -> lg */}
                <span className="text-base md:text-lg font-semibold text-white">Colombo, Sri Lanka</span>
              </div>
            </motion.div>
          </div>

          {/* 3. Socials Bar (Bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 md:col-span-3 mt-4"
          >
            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-center md:justify-between gap-4">
              <span className="text-xs md:text-sm text-neutral-500 hidden md:block">© 2025 Vihanga Fernando. All rights reserved.</span>

              <div className="flex gap-2 flex-wrap justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Changed: px-3 py-1.5 (mobile) -> md:px-4 md:py-2
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-xs md:text-sm font-medium text-neutral-300 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-3 h-3 md:w-4 md:h-4" />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;