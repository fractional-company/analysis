"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _analyses = _interopRequireDefault(require("./analyses"));

var AnalysisFinder = /*#__PURE__*/function () {
  function AnalysisFinder() {
    (0, _classCallCheck2["default"])(this, AnalysisFinder);
  }

  (0, _createClass2["default"])(AnalysisFinder, null, [{
    key: "getAnalysis",
    value: function getAnalysis(slugOrContractAddress) {
      var tokenId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return _analyses["default"].find(function (item) {
        return item.slug.toLowerCase() === slugOrContractAddress.toLowerCase() ? true // if not found search by contract address & token ids
        : item.contracts.find(function (contract) {
          var _contract$tokenIds;

          return !(contract.address.toLowerCase() === slugOrContractAddress.toLowerCase()) ? false : (contract === null || contract === void 0 ? void 0 : contract.tokenIds.length) > 0 ? contract === null || contract === void 0 ? void 0 : (_contract$tokenIds = contract.tokenIds) === null || _contract$tokenIds === void 0 ? void 0 : _contract$tokenIds.includes(tokenId) : true;
        });
      });
    }
  }]);
  return AnalysisFinder;
}();

var _default = AnalysisFinder;
exports["default"] = _default;