import { AbstractFileSystem } from "../fs/AbstractFileSystem";
import { LogLevel } from "./LogLevel";
export declare class AbstractLog extends AbstractFileSystem {
  static getInstance(): AbstractLog;
  private static instance;
  private constructor();
  logMessage(_message: string, _level: LogLevel): void;
  private format;
  private getDateString;
  private hasLogReachedLimit;
  private createBackupLog;
}
