const header = document.querySelector('#header')

const main = document.querySelector('#main')

const title = "Awesome Rotating Tin Can 3D Design"

const headerContent = `
       <nav class="flex items-center justify-between">
      <div class="w-20 relative left-5 sm:left-5 sm:w-32">
        <a href="/index.html">
          <img src="/images/logo.jpeg"
            class="cursor-pointer mt-4 rounded-full hover:scale-110 transition duration-150 ease-in-out" alt="Logo">
        </a>
      </div>
      <div class="flex justify-around w-48 sm:w-60 relative right-6 sm:right-12">
        <a href="#">
          <p class="cursor-pointer">About Us</p>
        </a>
        <a href="#">
          <p class="cursor-pointer">Contact</p>
        </a>
        <a href="#">
          <p class="cursor-pointer">More</p>
        </a>
      </div>
    </nav>
`

const mainContent = `<h1 class="text-center text-3xl sm:text-4xl mt-8 px-4" data-aos="fade-up">
     ${title}
    </h1>
    <div
      class="flex justify-center overflow-hidden items-center min-h-[70vh] mx-auto mt-10 rounded-[2rem] bg-gradient-to-br from-purple-800 to-blue-800 bg-cover bg-center border-4 max-w-[95%] sm:max-w-[90%] lg:max-w-[90%] px-4"
      data-aos="fade-up" data-aos-delay="200">

      <div
        class="flex flex-wrap justify-center items-center w-full gap-4 sm:gap-6 md:gap-8 min-h-[30vh] text-green-700 p-2 sm:p-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      </div>
    </div>`

const fantaCan = document.getElementById('fantaCan');

if (window.innerWidth >= 768) {
  // Desktop hover effect
  fantaCan.addEventListener('mouseenter', () => {
    gsap.to(fantaCan, {
      rotateY: 180,
      duration: 1.5,
      ease: "power2.inOut"
    });
  });
  
  fantaCan.addEventListener('mouseleave', () => {
    gsap.to(fantaCan, {
      rotateY: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });
  });
} else {
  // Mobile tap effect
  let rotated = false;
  fantaCan.addEventListener('click', () => {
    gsap.to(fantaCan, {
      rotateY: rotated ? 0 : 180,
      duration: 1.5,
      ease: "power2.inOut"
    });
    rotated = !rotated;
  });
}

// Optional: Continuous slow rotation when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.to(fantaCan, {
        rotateY: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
      });
    }
  });
}, { threshold: 0.1 });

observer.observe(fantaCan);

header.innerHTML = headerContent
main.innerHTML = mainContent