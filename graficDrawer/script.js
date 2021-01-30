const canvas = $('#can')[0];
let width = canvas.width, height = canvas.height;
const scale = 25;
const countX = Math.floor(width / scale), countY = Math.floor(height / scale);
const input = $('#input')[0];
const button = $('#btn')[0];
const clear = $('#clear')[0];
const ctx = canvas.getContext('2d');
ctx.translate(width / 2, height / 2);
ctx.scale(scale, scale);
ctx.lineWidth = 0.08;
ctx.fillStyle = 'grey';
ctx.font = "0.4px Arial";

const line = (fromX, fromY, toX, toY) => {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
};

const log = (base, x) => Math.log(x) / Math.log(base);

const drawGrid = () => {
    ctx.beginPath();
    line(- countX / 2, 0, countX / 2, 0);
    line(0, - countY / 2, 0, countY / 2);
    for (let i = 1 - countX / 2, j = -1 + countX / 2; i < countX / 2; i++, j++) {
        line(i, -0.2, i, 0.2);
        // if (j === 0) {
        //     console.log('j === 0');
        //     continue;
        // }
        ctx.fillText(j.toString(), i - 0.16, 0.6);
    }
    for (let i = 1 - countY / 2, j = -1 + countY / 2; i < countY / 2; i++, j--) {
        line(-0.2, i, 0.2, i);
        //if (j === 0) continue;
        ctx.fillText(j.toString(), 0.6, i + 0.16);
    }
};

const draw = (formula) => {
    let x = - countX / 2;
    ctx.beginPath();
    ctx.moveTo(x, -eval(formula));
    for (let x = 0.04 - countX / 2; x <= countX / 2; x+= 0.04) {
        ctx.lineTo(x, -eval(formula));
    }
    ctx.stroke();
};

button.onclick = () => {
    let formula = input.value;
    formula = formula.replace('^', '**');
    formula = formula.replace('PI', `${Math.PI}`);
    formula = formula.replace('e', `${Math.E}`);
    if (formula.includes('sin(')) {
        let cof = formula.slice(formula.indexOf('sin') + 4, formula.indexOf(')'));
        let newer = 'Math.sin(' + cof + ')';
        formula = formula.replace(/sin\(.+\)/, newer);
    }
    console.log(formula);
    draw(formula);
};

clear.onclick = () => {
    ctx.clearRect(-16, -16, 32, 32);
    drawGrid();
};

//sin(x) sin( x) sin(2 * x) sin(16*x)
// /sin\(\d*\s*\*\s*x\)/