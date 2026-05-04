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
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Certifications</h1>
            <p className="text-lg text-muted-foreground">
              Professional certifications and training achievements in geospatial technology and data science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert(cert.id)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  {cert.type === "certificate" ? (
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-red-500/10 to-red-600/20">
                      <svg
                        className="w-16 h-16 text-red-500 mb-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13h1.3l.7 2.1.7-2.1h1.3l-1.3 3.5 1.4 3.5h-1.3l-.8-2.3-.8 2.3H8.5l1.4-3.5L8.5 13zm5.5 0h1.8c.9 0 1.7.7 1.7 1.5v3c0 .8-.8 1.5-1.7 1.5H14v-6zm1.2 1.2v3.6h.6c.3 0 .5-.2.5-.5v-2.6c0-.3-.2-.5-.5-.5h-.6z"/>
                      </svg>
                      <span className="text-sm font-medium text-muted-foreground">PDF Document</span>
                      <span className="text-xs text-muted-foreground/70 mt-1">Click to preview</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  {cert.type === "pdf" && cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download PDF
                    </a>
                  )}
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
