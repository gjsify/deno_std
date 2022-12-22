import fg from 'fast-glob';
import { mkdirSync, renameSync, existsSync } from 'fs';
import path from 'path';

const dtsFiles = fg.sync('lib/**/*.d.mts');
for (const dtsFile of dtsFiles) {
    const jsFile = dtsFile.replace(/\.d\.mts$/, ".js");
    if(!existsSync(jsFile)) {
        console.warn(`${jsFile} not exists`)
        continue
    }
    const mjsFile = jsFile.replace(/\.js$/, ".mjs");
    console.info(`${jsFile} -> ${mjsFile}`);
    mkdirSync(path.dirname(mjsFile), { recursive: true });
    renameSync(jsFile, mjsFile);
}
