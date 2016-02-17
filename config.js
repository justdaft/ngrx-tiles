System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  paths: {
  '*': 'node_modules/*',
  'src/*': 'src/*'
},
packageConfigPaths: ['node_modules/*/package.json'],
  map: {
    app: "./src",
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts',
      rxjs: { defaultExtension: false }
    }
  }
});
