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
      id: "gsdc-85f82bcc",
      title: "GSDC Professional Certification",
      issuer: "GSDC",
      date: "2024",
      image:
        "https://www.dropbox.com/scl/fi/1qyraondnsx23u14edq96/85f82bcc.jpg?rlkey=sl4cs57a43qwhpbobu37w0hrp&st=a2jnvv2m&raw=1",
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
      title: "GSDC Certificate",
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
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="w-24 h-24 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
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

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-card rounded-lg p-4">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 p-2 bg-background rounded-full hover:bg-muted transition z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={certifications.find((c) => c.id === selectedCert)?.image || "/placeholder.svg"}
                alt="Certificate"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
