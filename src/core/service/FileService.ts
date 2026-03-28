import * as path from "path";
import * as fs from "fs"


export class FileService {


    async write(location: string, content: string): Promise<void> {
        await fs.mkdir(path.dirname(location), { recursive: true }, () => { });
        await fs.unlink(location, () => {
            fs.writeFile(location, content, "utf-8", () => { });
        });
    }

    // TODO: does read file sync better ? 
    read(location: string): Promise<string> {
        const stream = fs.createReadStream(location, "utf-8");
        // TODO: File open/close check
        return this.readContent(stream);
    }

    private readContent(stream: fs.ReadStream): Promise<string> {
        return new Promise((resolve, reject) => {
            const chunks: string[] = [];
            stream.on("data", (chunk) => chunks.push(chunk as string));
            stream.on("end", () => resolve(chunks.join("")));
            stream.on("error", (err) => reject(err));
        });
    }

}