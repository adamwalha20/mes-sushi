import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// extends Vitest's expect method with methods from react-testing-library
// Note: In newer versions of jest-dom, this might happen automatically with the import
// but we include it here for clarity if needed.

afterEach(() => {
    cleanup();
});
