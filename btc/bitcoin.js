const bitcoin = require('bitcoin-core');

const client = new bitcoin({
    network: 'testnet', // Usar la red de testnet
    username: 'mario', // Nombre de usuario RPC
    password: 'Abc123', // Contraseña RPC
    host: 'localhost', // Host del nodo Bitcoin Core
    port: 18332, // Puerto RPC del nodo Bitcoin Core (por defecto 18332 para testnet)
    wallet: 'morralla',
});

// // Ejemplo de llamada RPC para obtener información del bloque más reciente
// client.getBlockchainInfo().then((info) => {
//     console.log(info);
// }).catch((error) => {
//     console.error(error);
// });

// Ejemplo: Obtener el saldo de una dirección
async function getBalance(address) {
    try {
        const balance = await client.getBalance(address);
        console.log(`Saldo de ${address}: ${balance} BTC`);
    } catch (error) {
        console.error('Error al obtener el saldo:', error);
    }
}

// Función para generar una nueva dirección de recepción
async function generateNewReceivingAddress() {
    try {
        const newAddress = await client.getNewAddress();
        console.log('Nueva dirección de recepción generada:', newAddress);
        return newAddress;
    } catch (error) {
        console.error('Error al generar la nueva dirección de recepción:', error);
        throw error;
    }
}

// Función para obtener direcciones y saldos
async function getAddressesAndBalances() {
    try {
        const addresses = await client.listReceivedByAddress(0, true); // Listar direcciones
        console.log('Direcciones y saldos:');
        addresses.forEach((addressInfo) => {
            const address = addressInfo.address;
            const balance = addressInfo.amount;
            console.log(`Dirección: ${address}, Saldo: ${balance} BTC`);
        });
    } catch (error) {
        console.error('Error al obtener las direcciones y saldos:', error);
    }
}

// Función para obtener las últimas transacciones
async function getRecentTransactions() {
    try {
        const transactions = await client.listTransactions('*', 10); // Obtener las últimas 10 transacciones
        console.log('Últimas transacciones:');
        transactions.forEach((transaction) => {
            console.log(`ID de Transacción: ${transaction.txid}`);
            console.log(`Confirmaciones: ${transaction.confirmations}`);
            console.log(`Categoría: ${transaction.category}`);
            console.log(`Cantidad: ${transaction.amount} BTC`);
            console.log('----------------------------------------');
        });
    } catch (error) {
        console.error('Error al obtener las últimas transacciones:', error);
    }
}

// Ejemplo: Enviar una transacción
async function sendTransaction(toAddress, amount) {
    try {
      const result = await client.sendToAddress(toAddress, amount);
      console.log('Transacción enviada. ID de transacción:', result);
    } catch (error) {
      console.error('Error al enviar la transacción:', error);
    }
  }

// Llama a la función para obtener las últimas transacciones
getRecentTransactions();

// Llama a la función para obtener direcciones y saldos
getAddressesAndBalances();

// Llama a la función para generar una nueva dirección de recepción
// generateNewReceivingAddress();

// getBalance('*', 'tb1qshzjyrsj7l6w49khqwvc50uqzvydzl0e4wcxf7');

// sendTransaction('tb1qarqnpeuq5e6j98wtsacam3fsed2d7wnxr3uey4', 0.0001);