import calculate, { add as yigindi, subtract as ayirma, multiply as kopayma, divide as bolinma } from './module.js';

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    document.getElementById('add').addEventListener('click', () => {
        result.textContent = `Result: ${yigindi(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('subtract').addEventListener('click', () => {
        result.textContent = `Result: ${ayirma(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('multiply').addEventListener('click', () => {
        result.textContent = `Result: ${kopayma(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('divide').addEventListener('click', () => {
        result.textContent = `Result: ${bolinma(Number(num1.value), Number(num2.value))}`;
    });
});
