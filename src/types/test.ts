export type TestStatus = 'waiting' | 'passed' | 'failed' | 'skipped';

export interface Test {
    id: string;
    name: string;
    status: TestStatus;
    lastModified: string;
}
