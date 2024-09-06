const cars = [
  { name: "Ford Mustang GT", image: "img/vehicle__1_-removebg-preview.png", description: "The classic muscle car with modern technology." },
  { name: "Ford Mustang Mach-E", image: "img/vehicle-removebg-preview.png", description: "Electric SUV with Mustang DNA." },
  { name: "Ford Mustang Shelby GT500", image: "img/2025_Ford_Mustang_GT_California_Special_01-removebg-preview.png", description: "The most powerful street-legal Ford ever." }
];

let currentIndex = 0;

function updateCar(index) {
  const car = cars[index];
  gsap.to('.car-details', {
    opacity: 0, duration: 0.5, onComplete: () => {
      document.querySelector('h1').textContent = car.name;
      document.querySelector('.car-image').src = car.image;
      document.querySelector('.car-description').textContent = car.description;
      gsap.to('.car-details', { opacity: 1, duration: 0.5 });
    }
  });
  gsap.to('.background-text', {
    opacity: 0, duration: 0.5, onComplete: () => {
      document.querySelector('.background-text').textContent = car.name.toUpperCase();
      gsap.to('.background-text', { opacity: 0.1, duration: 0.5 });
    }
  });
}

function nextCar() {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar(currentIndex);
}

function prevCar() {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar(currentIndex);
}

document.querySelector('.arrow-right').addEventListener('click', nextCar);
document.querySelector('.arrow-left').addEventListener('click', prevCar);

// Automatic sliding
setInterval(nextCar, 5000);

// Animate social links
gsap.from('.social-link', {
  x: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

// Animate background text
gsap.from('.background-text', {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate car details
gsap.from('.car-details', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});