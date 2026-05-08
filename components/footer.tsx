export default function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-[10px]">SA</div>
            SAMSON ADEYOMOYE
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">GIS Analyst & Geospatial Developer</p>
        </div>

        <p className="text-xs font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()} Samson Adeyomoye. Built with precision and spatial awareness.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            Legal
          </a>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
            Metadata
          </a>
          <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
            <span>6.9856° N</span>
            <span>3.7083° E</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
