const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const vueCliServicePath = path.resolve(__dirname, 'node_modules/@vue/cli-service/bin/vue-cli-service');

fs.copyFile('source.txt', 'destination.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
        if (/\.vue$/.test(file)) {
            let filename = file.split('.vue')[0].toLowerCase();
            execSync(
                `node ${vueCliServicePath} build src/components/${folder}/${file} --target lib --name ${filename} --dest components/${folder} --no-clean `
            )
        }
        else if (/\.js$/.test(file)) {
            execSync(
                `node ${vueCliServicePath} build src/components/${folder}/${file} --target lib --name ${folder} --dest components/${folder} --no-clean `
            )
        }
    });
});