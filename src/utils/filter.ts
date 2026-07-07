import type {StatusFilter, TestCase} from '../types/test.ts';

export function filterTests(tests: TestCase[], searchText: string, status: StatusFilter): TestCase[] {
    return tests.filter((test) => {
        const matchesSearch = test.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesStatus = status === 'all' || test.status === status;
        return matchesSearch && matchesStatus;
    });
}
