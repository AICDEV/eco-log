export interface IFileSystem {
  create(fileName: string, content?: any, override?: boolean): boolean;
  read(fileName: string): any;
  update(fileName: string, content: any): any;
  delete(fileName: string): boolean;
  append(fileName: string, content: any): void;
  createFolder(folderName: string): void;
  removeFolder(folderName: string): void;
}
