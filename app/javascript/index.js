window.addEventListener('load', () => {
  const targetElement = document.querySelectorAll(".animationTarget");
  document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .4
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  })
});

window.addEventListener('load' , ()=> {
  document.getElementById('button1').addEventListener('click', ()=> {
    var content1 = document.getElementById('content1');
    var content_position = content1.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

window.addEventListener('load' , ()=> {
  document.getElementById('button2').addEventListener('click', ()=> {
    var content2 = document.getElementById('content2');
    var content_position = content2.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

window.addEventListener('load' , ()=> {
  document.getElementById('button3').addEventListener('click', ()=> {
    var content3 = document.getElementById('content3');
    var content_position = content3.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

window.addEventListener('load' , ()=> {
  document.getElementById('button4').addEventListener('click', ()=> {
    var content1 = document.getElementById('content1');
    var content_position = content1.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

window.addEventListener('load' , ()=> {
  document.getElementById('button5').addEventListener('click', ()=> {
    var content2 = document.getElementById('content2');
    var content_position = content2.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

window.addEventListener('load' , ()=> {
  document.getElementById('button6').addEventListener('click', ()=> {
    var content3 = document.getElementById('content3');
    var content_position = content3.getBoundingClientRect();
    window.scrollTo( 0, content_position.top);
  });
});

  window.addEventListener('load' ,()=> {
    var checkbox = document.getElementById("input");
    document.getElementById("button4").addEventListener('click',()=> {
      checkbox.checked = false;
    });
  });

  window.addEventListener('load' ,()=> {
    var checkbox = document.getElementById("input");
    document.getElementById("button5").addEventListener('click',()=> {
      checkbox.checked = false;
    });
  });

  window.addEventListener('load' ,()=> {
    var checkbox = document.getElementById("input");
    document.getElementById("button6").addEventListener('click',()=> {
      checkbox.checked = false;
    });
  });