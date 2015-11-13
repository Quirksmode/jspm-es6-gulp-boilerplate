System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.7",
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "core-js": "npm:core-js@0.9.14",
    "jquery": "github:components/jquery@2.1.3",
    "main.config": "modules/main.config",
    "ng-file-upload": "github:danialfarid/ng-file-upload@10.0.2",
    "textAngular": "github:fraywing/textAngular@1.4.6",
    "textangular": "npm:textangular@1.4.6",
    "textAngular-sanitize": "github:fraywing/textAngular@1.4.6/dist/textAngular-sanitize",
    "github:fraywing/textAngular@1.4.6": {
      "angular": "github:angular/bower-angular@1.4.7",
      "css": "github:systemjs/plugin-css@0.1.19",
      "font-awesome": "npm:font-awesome@4.4.0",
      "rangy": "github:timdown/rangy-release@1.3.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:core-js@0.9.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:textangular@1.4.6": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rangy": "npm:rangy@1.3.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

