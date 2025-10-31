document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active")
      this.classList.toggle("active")

      // Toggle menu icon
      const spans = this.querySelectorAll("span")
      if (this.classList.contains("active")) {
        spans[0].style.transform = "translateY(9px) rotate(45deg)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "translateY(-9px) rotate(-45deg)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const icon = themeToggle.querySelector("i")

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    body.classList.add("dark-theme")
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
      localStorage.setItem("theme", "dark")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
      localStorage.setItem("theme", "light")
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          mobileMenuToggle.classList.remove("active")
          const spans = mobileMenuToggle.querySelectorAll("span")
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      }
    })
  })

  // Add active class to nav links based on current page
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    }
  })
})

