import { useRef } from "react"

const ScrollExample = () => {
  const sectionRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button onClick={scrollToSection}>Go to section</button>

      <div style={{ height: "1000px" }}></div>

      <div ref={sectionRef}>
        Target Section
      </div>
    </>
  )
}

export default ScrollExample
