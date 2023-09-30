const bitcoin = require('bitcoin-core');

const client = new bitcoin({
    network: 'testnet', // Usar la red de testnet
    username: 'mario', // Nombre de usuario RPC
    password: 'Abc123', // Contraseña RPC
    host: 'localhost', // Host del nodo Bitcoin Core
    port: 18332, // Puerto RPC del nodo Bitcoin Core (por defecto 18332 para testnet)
});

// Ejemplo de llamada RPC para obtener información del bloque más reciente
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
  
  // Llama a la función para obtener direcciones y saldos
  getAddressesAndBalances();


// Llama a la función para generar una nueva dirección de recepción
// generateNewReceivingAddress();

// getBalance('*', 'tb1qshzjyrsj7l6w49khqwvc50uqzvydzl0e4wcxf7');