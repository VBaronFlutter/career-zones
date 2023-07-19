const fs = require('fs');
const exec = require('child_process').exec;

const decode = (s) => `${s[0].toUpperCase()}${s.slice(1)}`.split('-').join('');

async function init() {
  const sourceFolder = process.argv[2];
  const destinationFolder = process.argv[3];
  const fileNames = fs.readdirSync(sourceFolder);

  if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
  }

  fileNames.forEach((file) => {
    console.log('Generate interface from file: ' + file);
    const name = file.split('.')[0];

    const decodeName = decode(name);
    const command = `make_types -i ${destinationFolder}/${decodeName}.ts ${sourceFolder}/${name}.json ${decodeName}`;
    exec(command, function (error, _stdout, _stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  });
}

init();
