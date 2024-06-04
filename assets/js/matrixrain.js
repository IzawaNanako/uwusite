const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZΓΔΘΛΞΠΣΦΩαΨβγδεζηθικλμνξπρςστυφχψω0123456789';

const siz = 16;
const col = canvas.width/siz;
const matrix = [];

for( let x = 0; x < col; x++ ) {
    matrix[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = siz + 'px monospace';

    for(let i = 0; i < matrix.length; i++)
    {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        context.fillText(text, i*siz, matrix[i]*siz);

        if(matrix[i]*siz > canvas.height && Math.random() > 0.975){
            matrix[i] = 0;
        }
        matrix[i]++;
    }
};

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
    gradientColor = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradientColor.addColorStop(0, "red");
    gradientColor.addColorStop(0.2, "yellow");
    gradientColor.addColorStop(0.4, "green");
    gradientColor.addColorStop(0.6, "cyan");
    gradientColor.addColorStop(0.8, "blue");
    gradientColor.addColorStop(0, "magenta");
  });
  
  window.addEventListener("dblclick", () => {
    defaultColor === singleColor
      ? (defaultColor = gradientColor)
      : (defaultColor = singleColor);
  });
  
  var lastTouchEnd = 0;
  window.addEventListener("touchend", () => {
    var now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      defaultColor === singleColor
        ? (defaultColor = gradientColor)
        : (defaultColor = singleColor);
    }
    lastTouchEnd = now;
  });

setInterval(draw, 30);