import { connect } from '@massalabs/massa-web3';

async function updateCounterValue() {
    const provider = await connect();
    const contract = provider.getContract('main', 'AU1Acv1WqZY1qKqsiqAWUYvzXneXu5Fsdc3RvNuAPY3SPiCu7dkL');

    const counterValue = await contract.call('triggerValue', []);
    document.getElementById('counterValue').textContent = counterValue;
}

async function incrementCounter() {
    const provider = await connect();
    const contract = provider.getContract('main', 'npm install @massalabs/massa-as-sdk @massalabs/massa-web3');

    await contract.call('increment', [1]);
    updateCounterValue();
}

window.addEventListener('load', () => {
    updateCounterValue();
    document.getElementById('incrementButton').addEventListener('click', incrementCounter);
});