import fg from 'fast-glob';
import { mkdirSync, renameSync } from 'fs';
import path from 'path';

/**
 * Rename .d.mts files to .d.ts
 */
const mdtsFiles = fg.sync('lib/**/*.d.mts');
for (const mdtsFile of mdtsFiles) {
    const dtsFile = mdtsFile.replace(/\.d\.mts$/, "d.ts");
    console.info(`${mdtsFile} -> ${dtsFile}`);
    mkdirSync(path.dirname(dtsFile), { recursive: true });
    renameSync(mdtsFile, dtsFile);
}
