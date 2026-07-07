export type TestStatus = 'waiting' | 'passed' | 'failed' | 'skipped';

export interface TestCase {
    id: string;
    name: string;
    status: TestStatus;
    lastModified: string;
}


export type StatusFilter = TestStatus | 'all';

