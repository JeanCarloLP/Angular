export class FileItem {

    public file: File;
    public fileName: string;
    public fileUrl: string;
    public uploading: boolean;
    public progress: number;

    constructor( file: File ) {
        this.file = file;
        this.fileName = file.name;
        this.uploading = false;
        this.progress = 0;
    }

}
