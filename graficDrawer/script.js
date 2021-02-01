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

const log = (base, x) => Math.log(x) / Math.log(base);
const {sin, cos, tan, PI} = Math;
const e = Math.E;

const line = (fromX, fromY, toX, toY) => {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
};

const drawGrid = () => {
    line(- countX / 2, 0, countX / 2, 0);
    line(0, - countY / 2, 0, countY / 2);
    for (let i = 1 - countX / 2, j = 1 - countX / 2; i < countX / 2; i++, j++) {
        line(i, -0.2, i, 0.2);
        if (j === 0) continue;
        ctx.fillText('1', i, 0.6);
        console.log('fillled');
    }
    for (let i = 1 - countY / 2, j = -1 + countY / 2; i < countY / 2; i++, j--) {
        line(-0.2, i, 0.2, i);
        if (j === 0) continue;
        ctx.fillText(j.toString(), 0.6, i);
    }
};

const draw = (formula) => {
    let x = - countX / 2;
    ctx.beginPath();
    ctx.moveTo(x, -1 * eval(formula));
    for (let x = 0.04 - countX / 2; x <= countX / 2; x+= 0.04) {
        ctx.lineTo(x, -1 * eval(formula));
    }
    ctx.stroke();
};

const getFormula = (str) => {
    let formula = str;
    formula = formula.replace(/\^/g, '**');
    if (formula.includes('ctg(')) {
        let cof = formula.slice(formula.indexOf('ctg(') + 4, formula.indexOf(')'));
        let newer = '(1 / tan(' + cof + '))';
    formula = formula.replace(/ctg\([^)]+\)/g, newer);
    }
    console.log(formula);
    return formula;
};

button.onclick = () => {
    let formula = getFormula(input.value);
    draw(formula);
};

clear.onclick = () => {
    ctx.clearRect(-16, -16, 32, 32);
    drawGrid();
};