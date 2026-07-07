export type TestStatus = 'waiting' | 'passed' | 'failed' | 'skipped';

export interface TestCase {
    id: string;
    name: string;
    status: TestStatus;
    lastModified: string;
}

export type SortField = 'name' | 'status' | 'lastModified';

export interface SortConfig {
    field: SortField;
    direction: SortDirection;
}

export type StatusFilter = TestStatus | 'all';

