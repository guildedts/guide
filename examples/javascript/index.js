const { Client } = require('@guildedts/framework');

const dev = process.argv.includes('--dev');

new Client({ dev });
