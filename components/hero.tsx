import { MapPin, Globe, Satellite } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 geo-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <img
            src="https://www.dropbox.com/scl/fi/q6judxxgaplpcodpmpldg/Profilepic.jpg?rlkey=odp8g79u5q43pga2oc7chwv48&st=vxy3ke1y&raw=1"
            alt="Samson Adeyomoye"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute -bottom-2 -right-2 bg-background p-3 rounded-full shadow-xl border border-border">
            <Globe className="w-6 h-6 text-primary animate-spin-slow" />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 animate-fade-in">
            <Satellite className="w-4 h-4" />
            <span>World Class GIS Analyst</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 animate-slide-up">
            Samson Adeyomoye
          </h1>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-xl md:text-2xl font-light text-muted-foreground animate-slide-up [animation-delay:200ms]">
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> GIS Analyst</span>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> Geospatial Developer</span>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <span className="flex items-center gap-2"><Satellite className="w-5 h-5 text-primary" /> Remote Sensing</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 animate-slide-up [animation-delay:400ms]">
            Crafting intelligent geospatial solutions through data analysis,
            satellite imagery processing, and cutting-edge AI integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:600ms]">
            <a
              href="#contact"
              className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transform hover:-translate-y-1 transition-all duration-300"
            >
              Start a Project
            </a>
            <a
              href="#experience"
              className="px-10 py-4 glass text-foreground font-bold rounded-full hover:bg-foreground/5 transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Experience
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
