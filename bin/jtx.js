#! /usr/local/bin/node


var program = require('commander');

var appInfo = require('../package.json');

program
    .version(appInfo.version) // 版本
    // .usage('[options]')

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    jtx --help');
  console.log('    jtx -h');
  console.log('');
});

program.parse(process.argv)      // 解析命令行参数



var jtx = function() {
    // Set env var for ORIGINAL cwd
    // before anything touches it
    process.env.INIT_CWD = process.cwd();
    
    console.log('---- jtx test ----');
    console.log(process.argv);
    console.log(process.env.INIT_CWD);
    
}

jtx();