const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZΓΔΘΛΞΠΣΦΧΩαΨβγδεζηθικλμνξπρςστυφχψω0123456789';

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
        const text = words.charAt(Math.floor(Math.random() * words.length));
        context.fillText(text, i*siz, matrix[i]*siz);

        if(matrix[i]*siz > canvas.height && Math.random() > 0.975){
            matrix[i] = 0;
        }
        matrix[i]++;
    }
};

setInterval(draw, 30);