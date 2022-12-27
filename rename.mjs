import fg from 'fast-glob';
import { mkdir, rename, writeFile } from 'fs/promises';
import path from 'path';
import { transformImports } from '@gjsify/esbuild-plugin-transform-ext'

/**
 * Rename `.d.mts` files to `.d.ts`
 */
const mdtsFiles = fg.sync('lib/**/*.d.mts');
for (const mdtsFile of mdtsFiles) {
    const dtsFile = mdtsFile.replace(/\.d\.mts$/, "d.ts");
    console.info(`${mdtsFile} -> ${dtsFile}`);
    await mkdir(path.dirname(dtsFile), { recursive: true });
    await rename(mdtsFile, dtsFile);
}

/**
 * Transform `.mts` imports to `.js`
 */
const dtsFiles = fg.sync('lib/**/*.d.ts');
for (const dtsFile of dtsFiles) {
    const content = await transformImports(dtsFile, undefined, true);
    await writeFile(dtsFile, content);
}
