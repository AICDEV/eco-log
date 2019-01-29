import { IFileSystem } from "./IFileSystem";
export abstract class AbstractFileSystem implements IFileSystem {
  protected path: string;
  constructor(_path: string);
  create(fileName: string, content?: any, override?: boolean): boolean;
  read(fileName: string): any;
  update(fileName: string, content: any): any;
  delete(fileName: string): boolean;
  append(fileName: string, content: any): void;
  createFolder(folderName: string): void;
  getFileSize(fileName: string): number;
  removeFolder(folderName: string): void;
}
