export default function Contact() {
  const contactLinks = [
    { label: "Email", href: "mailto:extremeadeyomoye@gmail.com", icon: "📧" },
    { label: "LinkedIn", href: "https://linkedin.com/in/samson-adeyomoye", icon: "💼" },
    { label: "Twitter", href: "https://x.com/PFG_Samson", icon: "🐦" },
    { label: "GitHub", href: "https://github.com/", icon: "💻" },
    { label: "Phone", href: "tel:+2348107281262", icon: "📞" },
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        Interested in collaborating, discussing GIS & Remote Sensing projects, or exploring new ideas? I'd love to hear
        from you — reach out through any of the platforms below.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-primary font-semibold hover:text-accent transition-colors"
          >
            {link.icon} {link.label}
          </a>
        ))}
      </div>
      <p className="text-muted-foreground">Ode-Remo, Ogun State, Nigeria</p>
    </section>
  )
}
