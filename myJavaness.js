addCSS('https://vbourassa.github.io/styles.css')
addCSS('https://vbourassa.github.io/awesome.css')

// Include CSS file
function addCSS(filename){
 var head = document.getElementsByTagName('head')[0];

 var style = document.createElement('link');
 style.href = filename;
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
}