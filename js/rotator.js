var banner = [
  ["destination1.com", "img/1.jpg"],
  ["destination2.com", "img/2.jpg"],
  ["destination3.com", "img/3.jpg"],
  ["destination4.com", "img/4.jpg"]
  ];
  if (window.matchMedia("(min-width: 1024px)").matches) {
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  }
  shuffle(banner);
  document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+'" class="container-img" alt="Banner Ad" /></a>';