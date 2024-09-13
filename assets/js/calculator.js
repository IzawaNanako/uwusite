//TODO still need more functions.
//TODO actually make pi event.
$('.input').on('keyup', function(e) {
    if (e.key === '(') {
        $(this).val($(this).val() + ')');
    }
});

$('.question').submit(function(e) {
    e.preventDefault();
    let expression = $('.input').val();
    expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
    expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
    expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
    if (expression === '42') {
        $('.answer').text('The answer to life, the universe, and everything.');
    }
    else if (expression === 'The answer to life, the universe, and everything.') {
        $('.answer').text(42);
    }
    else if (expression === 'π') {
        startPiEvent();
    }
    else {
        try {
            const result = math.evaluate(expression);
            $('.answer').text(result);
        }
        catch (error) {
            $('.answer').text('Error');
            console.error(error);
        }
    }
})

function startPiEvent() {
    $('.question').hide();
    $('.equal-operator').hide();
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.close();
        }
    })

    let warningCountdown = 300;

    timeBeforeDeath();

    function timeBeforeDeath() {
        if (warningCountdown > 0) {
            $('.answer').text('You got ' + warningCountdown/100 + ' more seconds to escape!');
            setTimeout(function() {
                timeBeforeDeath();
            }, 10);
        }
        else {
            $('.answer').css('font-size', '12px').css('top', '0').css('left', '0');
            calculatePi(1);
        }
        warningCountdown--;
    }

    function calculatePi(n) {
        $('.answer').text('Hello World!');
    }
}