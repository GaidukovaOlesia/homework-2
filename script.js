let useFirstNumber = +prompt("Enter first number",'2');
let useSecondNumber = +prompt("Enter second number", '2');
let useMinus = useFirstNumber - useSecondNumber;
let useMultiply = useFirstNumber * useSecondNumber;
let useDivide = useFirstNumber / useSecondNumber;
let usePlus = useFirstNumber + useSecondNumber;
alert(`
${useFirstNumber} - ${useSecondNumber} = ${useMinus}
${useFirstNumber} * ${useSecondNumber} = ${useMultiply}
${useFirstNumber} / ${useSecondNumber} = ${useDivide}
${useFirstNumber} + ${useSecondNumber} = ${usePlus}
`);