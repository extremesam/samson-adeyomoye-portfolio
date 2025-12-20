export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-8 px-4 border-t border-gray-800">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Samson Adeyomoye. All rights reserved.</p>
      <p className="text-xs text-gray-500 mt-2">Designed & Built with Next.js, Tailwind CSS & ❤️</p>
    </footer>
  )
}
