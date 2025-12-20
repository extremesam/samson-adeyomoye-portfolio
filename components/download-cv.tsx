"use client"

import { useState } from "react"
import { Download } from "lucide-react"

export function DownloadCV() {
  const [isLoading, setIsLoading] = useState(false)

  const downloadPDF = async () => {
    setIsLoading(true)
    try {
      // Dynamic import to reduce bundle size
      const { jsPDF } = await import("jspdf")
      const html2canvas = (await import("html2canvas")).default

      const element = document.getElementById("cv-content") || document.body
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      const pdf = new jsPDF("p", "mm", "a4")

      let heightLeft = imgHeight
      let position = 0

      const imgData = canvas.toDataURL("image/png")
      const pageHeight = 297 // A4 height in mm

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
        position -= pageHeight
        if (heightLeft > 0) {
          pdf.addPage()
        }
      }

      pdf.save("Samson-Adeyomoye-CV.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate PDF. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={downloadPDF}
      disabled={isLoading}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors duration-200 disabled:opacity-50"
      aria-label="Download CV as PDF"
    >
      <Download className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">{isLoading ? "Generating..." : "CV"}</span>
    </button>
  )
}
