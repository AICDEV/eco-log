import { AbstractFileSystem } from "../fs/AbstractFileSystem";
import { ILogEntry } from "./ILogEntry";
import { LogLevel } from "./LogLevel";

export class AbstractLog extends AbstractFileSystem {
  public static getInstance(): AbstractLog {
    if (!AbstractLog.instance) {
      AbstractLog.instance = new AbstractLog();
    }

    return AbstractLog.instance;
  }

  private static instance: AbstractLog;

  private constructor() {
    super(process.cwd());
    this.createFolder("log");
    this.create("log/server.log", null, true);
  }

  public logMessage(_message: string, _level: LogLevel): void {
    if (this.hasLogReachedLimit()) {
      this.createBackupLog(this.read("log/server.log"));
      this.delete("log/server.log");
      this.create("log/server.log", null, true);
    } else {
      this.append(
        "log/server.log",
        this.format(<ILogEntry>{ message: _message, level: _level })
      );
    }
  }

  private format(entry: ILogEntry): string {
    return `[${this.getDateString()}]::[${entry.level}]::[${entry.message}]`;
  }

  private getDateString(): string {
    const d = new Date();
    return `${d.getFullYear()}:${d.getMonth() +
      1}:${d.getDate()}::${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  private hasLogReachedLimit(): boolean {
    if (this.getFileSize("log/server.log") > 1048576) {
      return true;
    }

    return false;
  }

  private createBackupLog(content: string): void {
    this.create(`log/${new Date().getTime()}.log`, content, false);
  }
}
