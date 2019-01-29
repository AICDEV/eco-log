import { IFileSystem } from "./IFileSystem";
import Path from "path";
import FS from "fs-extra";

export abstract class AbstractFileSystem implements IFileSystem {
  protected path: string;

  constructor(_path: string) {
    this.path = _path;
  }

  public create(fileName: string, content?: any, override?: boolean): boolean {
    try {
      if (override) {
        FS.writeFileSync(
          `${this.path}/${fileName}`,
          content === null ? "" : content
        );
        return true;
      } else {
        if (!FS.existsSync(`${this.path}/${fileName}`)) {
          FS.writeFileSync(
            `${this.path}/${fileName}`,
            content === null ? "" : content
          );
          return true;
        }
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  public read(fileName: string): any {
    try {
      return FS.readFileSync(fileName);
    } catch (err) {
      throw Error(err);
    }
  }

  public update(fileName: string, content: any): any {
    try {
      FS.writeFileSync(
        `${this.path}/${fileName}`,
        content === null ? "" : content
      );
      return this.read(fileName);
    } catch (err) {
      return false;
    }
  }

  public delete(fileName: string): boolean {
    try {
      FS.unlinkSync(`${this.path}/${fileName}`);
      return true;
    } catch (err) {
      return false;
    }
  }

  public append(fileName: string, content: any): void {
    FS.appendFile(
      `${this.path}/${fileName}`,
      content === null ? "" : content + "\n"
    );
  }

  public createFolder(folderName: string): void {
    if (!FS.existsSync(Path.join(this.path, folderName))) {
      FS.mkdirSync(Path.join(this.path, folderName));
    }
  }

  public getFileSize(fileName: string): number {
    const stats = FS.statSync(`${this.path}/${fileName}`);
    return stats.size;
  }

  public removeFolder(folderName: string): void {
    FS.unlinkSync(`${this.path}/${folderName}`);
    return;
  }
}
