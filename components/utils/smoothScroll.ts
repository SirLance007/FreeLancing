export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80 // Approximate header height
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
