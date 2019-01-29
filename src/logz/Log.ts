import { LogLevel } from "./LogLevel";
import { AbstractLog } from "./AbstractLogs";

export class Log {
  public static log(_message: string, _level: LogLevel): void {
    AbstractLog.getInstance().logMessage(_message, _level);
  }
}
