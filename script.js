// Init particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 100, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#00ffcc"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5, "random": true},
    "size": {"value": 3, "random": true},
    "line_linked": {"enable": true, "distance": 150, "color": "#00ffcc", "opacity": 0.4, "width": 1},
    "move": {"enable": true, "speed": 2}
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "grab"},
      "onclick": {"enable": true, "mode": "push"}
    },
    "modes": {"grab": {"distance": 200, "line_linked": {"opacity": 0.6}}}
  },
  "retina_detect": true
});

// Init EmailJS
(function(){
  emailjs.init("4_AAsYqkjfmxumsrI"); // replace with your EmailJS user ID
})();

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_sijqaow", "template_sdyr5vh", {
    wear_type: document.getElementById("wear_type").value,
    size: document.getElementById("size").value,
    email: document.getElementById("email").value
  }).then(function(response) {
    alert("✅ Order sent successfully!");
  }, function(error) {
    alert("❌ Failed to send order. Please try again.");
    console.error(error);
  });
});
