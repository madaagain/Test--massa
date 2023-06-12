// The entry file of your WebAssembly module.
import { generateEvent } from '@massalabs/massa-as-sdk';

let counter: u32 = 0;

export function increment(value: u32): void
{
  counter += value;
}

export function triggerValue(): void
{
  generateEvent(`Current value: ${counter}`);
}