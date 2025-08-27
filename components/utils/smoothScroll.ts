export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Account for different header heights on mobile vs desktop
    const isMobile = window.innerWidth < 640
    const headerHeight = isMobile ? 100 : 80 // Mobile header can be taller due to mobile menu
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
