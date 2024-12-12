//Starting containers
const { GenericContainer } = require("testcontainers");

const container = await new GenericContainer("alpine").start();


//Stopping
await container.stop();



