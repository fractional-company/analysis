"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnalysisFinder = require("./AnalysisFinder");

Object.keys(_AnalysisFinder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AnalysisFinder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AnalysisFinder[key];
    }
  });
});