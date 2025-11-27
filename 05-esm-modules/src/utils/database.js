async function connectToDatabase(dataName) {
//logic to connect to the database
console.log(`Connected to the database  ${dataName}`);
}

async function disconnectDatabase() {
    console.log("Disconnected from the database");
}

export { connectToDatabase, disconnectDatabase };