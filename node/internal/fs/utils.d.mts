// import type { Stats } from '../../_fs/_fs_stat';
import type { ERR_INVALID_ARG_VALUE } from '../errors.js'

export declare const kMaxUserId: number;

export function assertEncoding(encoding: string): void;

export class Dirent {
    constructor(name: string, type: number);

    isDirectory(): boolean;

    isFile(): boolean;

    isBlockDevice(): boolean;

    isCharacterDevice(): boolean;

    isSymbolicLink(): boolean;

    isFIFO(): boolean;

    isSocket(): boolean;
}

export function copyObject<T>(source: T): T;

export function getDirents(path: string, { 0: names, 1: types }, callback: (error?: Error, names?: string[]) => void): string[];

export function getDirent(path: string, name: string, type: number, callback: (error?: Error, names?: string) => void): string;

export function getOptions(options: any, defaultOptions: any): any; // TODO

export function handleErrorFromBinding(ctx: any): any; // TODO

export declare const nullCheck: ERR_INVALID_ARG_VALUE | undefined;

export function preprocessSymlinkDestination(path: string, type: string, linkPath: string): string;

export class BigIntStats {

    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birthtimeMs: number;
    atimeNs: number;
    mtimeNs: number;
    ctimeNs: number;
    birthtimeNs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;

    // TODO
    constructor(
        dev: any,
        mode: any,
        nlink: any,
        uid: any,
        gid: any,
        rdev: any,
        blksize: any,
        ino: any,
        size: any,
        blocks: any,
        atimeNs: number,
        mtimeNs: number,
        ctimeNs: number,
        birthtimeNs: any
    )
}

export class Stats {

    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birthtimeMs: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;

    constructor(
        dev: any,
        mode: any,
        nlink: any,
        uid: any,
        gid: any,
        rdev: any,
        blksize: any,
        ino: any,
        size: any,
        blocks: any,
        atimeMs: number,
        mtimeMs: number,
        ctimeMs: number,
        birthtimeMs: number
    )
}

/**
 * @param {Float64Array | BigUint64Array} stats
 * @param {number} offset
 * @returns
 */
export function getStatsFromBinding(stats: Float64Array | BigUint64Array, offset: number): Stats;

export function stringToFlags(flags: any, name: "flags"): any;

export declare const stringToSymlinkType: (type: any) => any; // TODO

export function toUnixTimestamp(time: number, name: "time"): number;

export declare const validateOffsetLengthRead: any; // TODO

export declare const validateOffsetLengthWrite: any; // TODO

export declare const validatePath: any; // TODO

export declare const getValidatedPath: any; // TODO

export declare const getValidatedFd: any; // TODO

export declare const validateBufferArray: any; // TODO

export function warnOnNonPortableTemplate(template: string): any // TODO

export declare const validateCpOptions: any; // TODO

export declare const validateRmOptions: any; // TODO

export declare const validateRmOptionsSync: any; // TODO

export function emitRecursiveRmdirWarning(): void;

export declare const validateRmdirOptions: any; // TODO

export declare const getValidMode: any;

export declare const validateStringAfterArrayBufferView: any;

export declare const validatePosition: any;

export declare const realpathCacheKey: Symbol;

export declare const constants: {
    kIoMaxLength: number;
    kMaxUserId: number;
    kReadFileBufferLength: number;
    kReadFileUnknownBufferLength: number;
    kWriteFileMaxChunkSize: number;
}

export declare const showStringCoercionDeprecation: any; // TODO

interface Default {
    constants: typeof constants;
    assertEncoding: typeof assertEncoding;
    BigIntStats: typeof BigIntStats; // for testin
    copyObject: typeof copyObject;
    Dirent: typeof Dirent;
    emitRecursiveRmdirWarning: typeof emitRecursiveRmdirWarning;
    getDirent: typeof getDirent;
    getDirents: typeof getDirents;
    getOptions: typeof getOptions;
    getValidatedFd: typeof getValidatedFd;
    getValidatedPath: typeof getValidatedPath;
    getValidMode: typeof getValidMode;
    handleErrorFromBinding: typeof handleErrorFromBinding;
    kMaxUserId: typeof kMaxUserId;
    nullCheck: typeof nullCheck;
    preprocessSymlinkDestination: typeof preprocessSymlinkDestination;
    realpathCacheKey: typeof realpathCacheKey;
    getStatsFromBinding: typeof getStatsFromBinding;
    showStringCoercionDeprecation: typeof showStringCoercionDeprecation;
    stringToFlags: typeof stringToFlags;
    stringToSymlinkType: typeof stringToSymlinkType;
    Stats: typeof Stats;
    toUnixTimestamp: typeof toUnixTimestamp;
    validateBufferArray: typeof validateBufferArray;
    validateCpOptions: typeof validateCpOptions;
    validateOffsetLengthRead: typeof validateOffsetLengthRead;
    validateOffsetLengthWrite: typeof validateOffsetLengthWrite;
    validatePath: typeof validatePath;
    validatePosition: typeof validatePosition;
    validateRmOptions: typeof validateRmOptions;
    validateRmOptionsSync: typeof validateRmOptionsSync;
    validateRmdirOptions: typeof validateRmdirOptions;
    validateStringAfterArrayBufferView: typeof validateStringAfterArrayBufferView;
    warnOnNonPortableTemplate: typeof warnOnNonPortableTemplate;
}

export default Default;
  