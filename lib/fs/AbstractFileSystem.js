"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var AbstractFileSystem = /** @class */ (function() {
  function AbstractFileSystem(_path) {
    this.path = _path;
  }
  AbstractFileSystem.prototype.create = function(fileName, content, override) {
    try {
      if (override) {
        fs_extra_1.default.writeFileSync(
          this.path + "/" + fileName,
          content === null ? "" : content
        );
        return true;
      } else {
        if (!fs_extra_1.default.existsSync(this.path + "/" + fileName)) {
          fs_extra_1.default.writeFileSync(
            this.path + "/" + fileName,
            content === null ? "" : content
          );
          return true;
        }
      }
      return false;
    } catch (err) {
      return false;
    }
  };
  AbstractFileSystem.prototype.read = function(fileName) {
    try {
      return fs_extra_1.default.readFileSync(fileName);
    } catch (err) {
      throw Error(err);
    }
  };
  AbstractFileSystem.prototype.update = function(fileName, content) {
    try {
      fs_extra_1.default.writeFileSync(
        this.path + "/" + fileName,
        content === null ? "" : content
      );
      return this.read(fileName);
    } catch (err) {
      return false;
    }
  };
  AbstractFileSystem.prototype.delete = function(fileName) {
    try {
      fs_extra_1.default.unlinkSync(this.path + "/" + fileName);
      return true;
    } catch (err) {
      return false;
    }
  };
  AbstractFileSystem.prototype.append = function(fileName, content) {
    fs_extra_1.default.appendFile(
      this.path + "/" + fileName,
      content === null ? "" : content + "\n"
    );
  };
  AbstractFileSystem.prototype.createFolder = function(folderName) {
    if (
      !fs_extra_1.default.existsSync(path_1.default.join(this.path, folderName))
    ) {
      fs_extra_1.default.mkdirSync(path_1.default.join(this.path, folderName));
    }
  };
  AbstractFileSystem.prototype.getFileSize = function(fileName) {
    var stats = fs_extra_1.default.statSync(this.path + "/" + fileName);
    return stats.size;
  };
  AbstractFileSystem.prototype.removeFolder = function(folderName) {
    fs_extra_1.default.unlinkSync(this.path + "/" + folderName);
    return;
  };
  return AbstractFileSystem;
})();
exports.AbstractFileSystem = AbstractFileSystem;
//# sourceMappingURL=AbstractFileSystem.js.map
