var el = document.querySelector(".cta1");
console.log(el);
el.addEventListener("click", open);

function open() {
  var morphing = anime({
    targets: ".polymorph",
    points: [
      { value: "300,150 0,150 0,0 67.3,0 100.4,100.4" },
      { value: "  300,150 0,150 0,0 0,0 100.4,100.4" }
    ],
    easing: "easeOutQuad",
    duration: 2000,
    loop: false
  });
 
  anime({
    targets: ".blip",
    opacity: 1,
    translateY: 150
  });
   anime({
      targets: ".cta1",
      opacity: 0
      
  });
  
  var promise = morphing.finished.then(() => {
    var el2 = document.querySelector("#cta2");
    var el3 = document.querySelector(".blip");
    el3.style.zIndex = 100;
    el2.onclick = function(){
     
      var morphing = anime({
        targets: ".polymorph",
        points: [
          { value: "300,150 0,150 0,0 67.3,0 100.4,100.4" },
          { value: "  300,150 0,150 0,0 67.3,0 300,0" }
        ],
        easing: "easeOutQuad",
        duration: 2000,
        loop: false
      });
      anime({
      targets: ".blip",
      opacity: 0,
      translateY: -150
  });
      anime({
      targets: ".cta1",
      opacity: 1,
        delay: 2000
      
  });
      
    
   
      
    };
  });
  // end of promise
}
// end of open;

// PARTICLES CODE
// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});