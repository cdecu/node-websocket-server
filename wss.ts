#!/usr/bin/env node

var program = require("commander");

/**
 * Define command line argv
 */
program
    .version("0.0.1")
    .option("-p, --port <port>", "Server IP port", parseInt,9000)
    .parse(process.argv);

console.log('Start %s on port : %j', program.name(), program.port);

