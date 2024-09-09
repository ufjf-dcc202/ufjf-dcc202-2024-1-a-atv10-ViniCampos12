let maria = 2;
let joao = 1;


function deJoaoParaMaria()
{
    setMaria(getJoao());
    setJoao(0);
}

function deMariaParaJoao()
{
    setJoao(getMaria());
    setJoao(0);
}

function getMaria()
{
    return maria;
}

function getJoao()
{
    return joao;
}

function setMaria(valor)
{
    maria = valor;
}

function setJoao(valor)
{
    joao = valor;
}

