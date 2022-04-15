var Body = {
    setColor: function (color) {
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        $('body').css('backgroundColor', color);
    },
};

var Links = {
    setColor: function (color) {
        $('a').css('color', color);
    },
};

function nightDayHandler(self) {
    if (self.value === "night") {
        Body.setBackgroundColor("black");
        Body.setColor("white");
        self.value = "day";
        Links.setColor("powderblue");
    } else {
        Body.setBackgroundColor("white");
        Body.setColor("black");
        self.value = "night";
        Links.setColor("blue");
    }
}

window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-P394L308F2');

        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://web-4mzxftt5mm.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();     
            
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
       (function(){
       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
       s1.async=true;
       s1.src='https://embed.tawk.to/624facb3c72df874911df9f6/1g03jl7e1';
       s1.charset='UTF-8';
       s1.setAttribute('crossorigin','*');
       s0.parentNode.insertBefore(s1,s0);
        })();

        