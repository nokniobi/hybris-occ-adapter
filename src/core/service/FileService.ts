import * as path from "path";
import * as fs from "fs"


/**
 * File service to do IO operations
 * 
 */
export class FileService {

    write(location: string, content: string): void {
        fs.mkdirSync(path.dirname(location), { recursive: true });
        fs.rmSync(location, { force: true });
        fs.writeFileSync(location, content, "utf-8");
    }

    read(location: string): string {
        return fs.readFileSync(location, "utf-8");
    }

}