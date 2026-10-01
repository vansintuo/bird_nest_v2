import { Outlet, useLocation } from "react-router"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Root() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const scrollToHash = () =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })

      if (document.getElementById(id)) {
        scrollToHash()
        return
      }

      // The target section may still be mounting, so retry once.
      const timer = window.setTimeout(scrollToHash, 60)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div style={{ minHeight: "100%", overflowX: "hidden" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
