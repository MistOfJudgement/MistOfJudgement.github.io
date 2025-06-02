
import fs from 'fs';
import Handlebars from 'handlebars';

const templateFilename = 'index.template.hbs';
const template = fs.readFileSync(templateFilename, 'utf8');
const data = {
    quick_bio: "#t quick_bio",

}

function translateRecursive(data) {
    var output = {};
    for (const key in data) {
        if (typeof data[key] === 'object') {
            output[key] = translateRecursive(data[key]);
        } else {
            if(data[key].startsWith("#t")){
                output[key] = t(data[key].replace("#t ",""));
            } else {
                output[key] = data[key];
            }
        }
    }
    return output;
}
const translatedData = translateRecursive(data);
console.log(Handlebars.compile(template)(translatedData))
