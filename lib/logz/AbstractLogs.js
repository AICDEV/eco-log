"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFileSystem_1 = require("../fs/AbstractFileSystem");
var AbstractLog = /** @class */ (function(_super) {
  __extends(AbstractLog, _super);
  function AbstractLog() {
    var _this = _super.call(this, process.cwd()) || this;
    _this.createFolder("log");
    _this.create("log/server.log", null, true);
    return _this;
  }
  AbstractLog.getInstance = function() {
    if (!AbstractLog.instance) {
      AbstractLog.instance = new AbstractLog();
    }
    return AbstractLog.instance;
  };
  AbstractLog.prototype.logMessage = function(_message, _level) {
    if (this.hasLogReachedLimit()) {
      this.createBackupLog(this.read("log/server.log"));
      this.delete("log/server.log");
      this.create("log/server.log", null, true);
    } else {
      this.append(
        "log/server.log",
        this.format({ message: _message, level: _level })
      );
    }
  };
  AbstractLog.prototype.format = function(entry) {
    return (
      "[" +
      this.getDateString() +
      "]::[" +
      entry.level +
      "]::[" +
      entry.message +
      "]"
    );
  };
  AbstractLog.prototype.getDateString = function() {
    var d = new Date();
    return (
      d.getFullYear() +
      ":" +
      (d.getMonth() + 1) +
      ":" +
      d.getDate() +
      "::" +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds()
    );
  };
  AbstractLog.prototype.hasLogReachedLimit = function() {
    if (this.getFileSize("log/server.log") > 1048576) {
      return true;
    }
    return false;
  };
  AbstractLog.prototype.createBackupLog = function(content) {
    this.create("log/" + new Date().getTime() + ".log", content, false);
  };
  return AbstractLog;
})(AbstractFileSystem_1.AbstractFileSystem);
exports.AbstractLog = AbstractLog;
//# sourceMappingURL=AbstractLogs.js.map
