document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")
  const formError = document.getElementById("form-error")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const formDataObj = {}
      formData.forEach((value, key) => {
        formDataObj[key] = value
      })

      // Simulate form submission
      const submitButton = this.querySelector(".btn-submit")
      submitButton.disabled = true
      submitButton.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>'

      // Simulate API call with timeout
      setTimeout(() => {
        // Success scenario (in a real app, this would be the API response)
        const success = true

        if (success) {
          // Show success message
          formSuccess.style.display = "block"
          formError.style.display = "none"
          contactForm.reset()
        } else {
          // Show error message
          formSuccess.style.display = "none"
          formError.style.display = "block"
        }

        // Reset button
        submitButton.disabled = false
        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>'

        // Hide messages after 5 seconds
        setTimeout(() => {
          formSuccess.style.display = "none"
          formError.style.display = "none"
        }, 5000)
      }, 2000)
    })
  }
})

