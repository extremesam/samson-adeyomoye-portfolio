export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary to-accent flex items-center justify-center text-center text-white px-4 pt-24"
    >
      <div className="max-w-3xl animate-fade-in">
        <img
          src="https://www.dropbox.com/scl/fi/q6judxxgaplpcodpmpldg/Profilepic.jpg?rlkey=odp8g79u5q43pga2oc7chwv48&st=vxy3ke1y&raw=1"
          alt="Samson Adeyomoye"
          className="w-40 h-40 rounded-full object-cover mx-auto mb-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">Samson Adeyomoye</h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-slide-up [animation-delay:200ms]">
          GIS Analyst | Geospatial Developer | Remote Sensing Enthusiast
        </p>
        <p className="text-base md:text-lg mb-8 opacity-85 leading-relaxed animate-slide-up [animation-delay:400ms]">
          I design and develop geospatial tools that transform complex data into meaningful insights. Passionate about
          blending <strong>GIS, Remote Sensing, and AI</strong> for smarter decision-making and efficient workflows.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up [animation-delay:600ms]">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Let's Connect
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transform hover:-translate-y-1 transition-all duration-200"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  )
}
