import Client from '@guildedts/framework';

const dev = process.argv.includes('--dev');

new Client({ dev });
