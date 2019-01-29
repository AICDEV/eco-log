"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLogs_1 = require("./AbstractLogs");
var Log = /** @class */ (function() {
  function Log() {}
  Log.log = function(_message, _level) {
    AbstractLogs_1.AbstractLog.getInstance().logMessage(_message, _level);
  };
  return Log;
})();
exports.Log = Log;
//# sourceMappingURL=Log.js.map
