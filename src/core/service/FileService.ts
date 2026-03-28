import * as fs from "fs"

export class FileService {

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