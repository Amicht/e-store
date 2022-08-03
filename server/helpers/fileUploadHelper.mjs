import {v4} from 'uuid';
import { writeFileSync } from 'fs';

const addFileHelper = (file) => {
    
    if(file.data){
        const fileNameEnd = file.name.split('.').pop();
        const fileName = `${v4()}.${fileNameEnd}`;
        writeFileSync('./upload/'+ fileName, file.data);
        const imagePath = `/api/images/${fileName}`;
        return imagePath;
    }
    else{
        return null;
    };
};

export { addFileHelper }