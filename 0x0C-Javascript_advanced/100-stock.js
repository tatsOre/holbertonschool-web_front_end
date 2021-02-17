/**
 * Multiple callbacks
 */

const stock = {
  macbook: 2,
  iphone: 4
};

const processPayment = (itemName) => {
  stock[itemName] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
};

const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
};

const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);
  stock[itemName]
    ? callbackPayment(itemName)
    : callbackError(itemName);
};

const itemNotFound = (itemName) => {
  alert(`"${itemName}" not found. Payment is not being processed`);
};

function main () {
  const userItem = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
  const itemName = userItem.toLowerCase();
  stock.hasOwnProperty(itemName)
    ? processOrder(itemName, processPayment, processError)
    : itemNotFound(itemName);
}

main();
