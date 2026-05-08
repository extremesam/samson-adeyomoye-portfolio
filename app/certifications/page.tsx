"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certifications = [
    {
      id: "python-freecodecamp",
      title: "Python Developer Certification",
      issuer: "freeCodeCamp",
      date: "2026",
      image:
        "https://www.dropbox.com/scl/fi/2wpm5ggsjgi2omo3pfzmn/Python-Developer-Certification.jpg?rlkey=ydibomwzwitiyip39sv9oz3ec&st=usv08qzj&raw=1",
      type: "certificate",
    },
    {
      id: "javascript-freecodecamp",
      title: "Javascript Developer Certification",
      issuer: "freeCodeCamp",
      date: "2026",
      image:
        "https://www.dropbox.com/scl/fi/oatn9fapdoz9m9fan18b8/Javascript-Developer-Certification.jpg?rlkey=p1amq2pu36ooa1liqweq5bxqv&st=wh44bgbz&raw=1",
      type: "certificate",
    },
    {
      id: "powerbi-microsoft",
      title: "Power BI Data Modelling",
      issuer: "Microsoft",
      date: "2026",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://www.dropbox.com/scl/fi/u6h50w1zcf5rnqpkkrrhe/Power-BI-Data-Modelling-Basics-Tutorial-Course.pdf?rlkey=by0eor32y6twomffeo6gokvfg&st=91deir0y&dl=0",
      type: "pdf",
    },
    {
      id: "webdesign-freecodecamp",
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2026",
      image:
        "https://www.dropbox.com/scl/fi/qcgyskzj8m9946axu20a2/Responsive-Web-Design.jpg?rlkey=hc2ksue276ixm15kvlwd54vp6&st=ogwzkfyf&raw=1",
      type: "certificate",
    },
    {
      id: "gis-climate-esri",
      title: "GIS for Climate Action",
      issuer: "ESRI",
      date: "2026",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://www.dropbox.com/scl/fi/22gamk90ppone88qmtbdp/GIS-for-Climate-Action_Certificate_03262026.pdf?rlkey=3i1u90xbh7wikvqat5qs6acwp&st=z9n5zju5&dl=0",
      type: "pdf",
    },
    {
      id: "spatial-data-esri",
      title: "Spatial Data Science",
      issuer: "ESRI",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://www.dropbox.com/scl/fi/sh8h10jt1uk2dc8w9w0t0/Spatial-Data-Science_-The-New-Frontier-in-Analytics_Certificate_10032024.pdf?rlkey=a6u2tjzxqwhcg6n1nr8xl3bcm&st=3y0s0zec&dl=0",
      type: "pdf",
    },
    {
      id: "esri-aws",
      title: "Introduction to Esri on AWS",
      issuer: "ESRI",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://www.dropbox.com/scl/fi/oqkl3v6q3d4f01v3mdruh/Introduction-to-Esri-on-AWS.pdf?rlkey=3t1n3u7v0t8q6wmp92odek2tm&st=c0ptursd&dl=0",
      type: "pdf",
    },
    {
      id: "gsdc-celh",
      title: "GSDC Continuing Education Learning Hours",
      issuer: "GSDC",
      date: "2024",
      image:
        "https://www.dropbox.com/scl/fi/ajtflyawo3gn2whkzym49/GCELH-GSDC-Continuing-Education-Learning-Hours-..jpg?rlkey=zjw5py2gqvqy7304arkykcot1&st=i0uedwrj&raw=1",
      type: "certificate",
    },

    {
      id: "gsdc-ai",
      title: "GSDC AI Implementation Series",
      issuer: "GSDC",
      date: "2024",
      image:
        "https://www.dropbox.com/scl/fi/zere0spj1fs53a94hmbjc/GSDC-AI-Implementation-Series.jpg?rlkey=u0jkfpxdizsszgmhph229tgf1&st=llmnyqw7&raw=1",
      type: "certificate",
    },
    {
      id: "gsdc-general",
      title: "AI Leadership Mastery",
      issuer: "GSDC",
      date: "2024",
      image:
        "https://www.dropbox.com/scl/fi/doi3t0i4dliq1n3zqyyw2/GSDC-Certificate.jpg?rlkey=p1983x9izzjvb2vm3q2wz1vnh&st=8v28k9an&raw=1",
      type: "certificate",
    },
    {
      id: "pyqgis",
      title: "Automated GIS Workflows with PyQGIS",
      issuer: "Mindluster",
      date: "2024",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://www.dropbox.com/scl/fi/v9jqpb8jewnb17bjwd843/Mindluster_Certificate.pdf?rlkey=v8jl62vgis7a8vayj1cyt8otq&st=g9i8btmx&dl=0",
      type: "pdf",
    },
    {
      id: "google-digital",
      title: "Google Digital Skills",
      issuer: "Google",
      date: "2022",
      image: "/placeholder.svg?height=400&width=600",
      type: "certificate",
    },
    {
      id: "geospatial-r",
      title: "Manipulating and Mapping Geospatial Data in R",
      issuer: "Atlan Labs",
      date: "2020",
      image: "/placeholder.svg?height=400&width=600",
      type: "certificate",
    },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full geo-grid opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight">Accreditations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Continuous learning and professional validation in the ever-evolving landscape of geospatial technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col"
                onClick={() => setSelectedCert(cert.id)}
              >
                <div className="relative h-64 overflow-hidden bg-foreground/5">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {cert.type === "certificate" ? (
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary/5 to-primary/10">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:rotate-6 transition-transform duration-500">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">PDF Verification</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-medium">Issued by {cert.issuer}</p>

                  <div className="mt-auto">
                    {cert.type === "pdf" && cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        VIEW DOCUMENT <span>→</span>
                      </a>
                    ) : (
                      <span className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">Digital Certificate</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCert && (() => {
          const cert = certifications.find((c) => c.id === selectedCert)
          const isPdf = cert?.type === "pdf"
          const pdfUrl = cert?.link?.replace("dl=0", "raw=1")
          
          return (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div 
                className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-card rounded-lg p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{cert?.title}</h3>
                    <p className="text-sm text-muted-foreground">Issued by: {cert?.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPdf && cert?.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition"
                      >
                        Download PDF
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 bg-muted rounded-full hover:bg-muted/80 transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                {isPdf && pdfUrl ? (
                  <iframe
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                    className="w-full h-[70vh] rounded border border-border"
                    title={cert?.title}
                  />
                ) : (
                  <img
                    src={cert?.image || "/placeholder.svg"}
                    alt="Certificate"
                    className="w-full h-auto rounded"
                  />
                )}
              </div>
            </div>
          )
        })()}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
