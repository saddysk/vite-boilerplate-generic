// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Buffer } from 'buffer';
import process from 'process';

// Also set on window for legacy compatibility
window.global = window.global ?? window;
window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? process;

// Polyfills for browser compatibility
globalThis.global = globalThis.global ?? globalThis;
globalThis.Buffer = globalThis.Buffer ?? Buffer;
globalThis.process = globalThis.process ?? process;

export {};
