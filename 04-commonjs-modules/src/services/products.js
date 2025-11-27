//todas as funções relacionadas a produtos 
const productType = {
version: "digital",
tax: "x1",
}
async function getFullName(codeId, productName) {
    console.log("\n")
console.log ("product"   + codeId + " - " + productName);
}

async function getProductLabel(ProductName) {
console.log ("product" + ProductName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}