import { FileText } from "lucide-react"

const CV_URL = "https://docs.google.com/document/d/1orKmI9MIeqPo5h6PZTj2MXrDACFl1wbyzQtF6-diZI0/edit?usp=sharing"

export function DownloadCV() {
  return (
    <a
      href={CV_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors duration-200"
      aria-label="View CV"
    >
      <FileText className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">CV</span>
    </a>
  )
}
