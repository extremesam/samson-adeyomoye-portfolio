export default function Contact() {
  const contactLinks = [
    { label: "Email", href: "mailto:extremeadeyomoye@gmail.com", icon: "📧" },
    { label: "LinkedIn", href: "https://linkedin.com/in/samson-adeyomoye", icon: "💼" },
    { label: "Twitter", href: "https://x.com/PFG_Samson", icon: "🐦" },
    { label: "GitHub", href: "https://github.com/", icon: "💻" },
    { label: "Phone", href: "tel:+2348107281262", icon: "📞" },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
          <span>Available for collaborations</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Let's map out something great together</h2>

        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether it's a complex spatial analysis project or an innovative geospatial SaaS application,
          I'm ready to bring your vision to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-foreground/5">
          <p className="text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Based in Ode-Remo, Ogun State, Nigeria • Available Globally
          </p>
        </div>
      </div>
    </section>
  )
}
