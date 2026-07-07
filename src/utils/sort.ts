import type {SortConfig, TestCase} from '../types/test.ts';

export function sortTests(tests: TestCase[], sort: SortConfig): TestCase[] {
    const { field, direction } = sort;
    const multiplier = direction === 'asc' ? 1 : -1;

    return [...tests].sort((a, b) => {
        if (field === 'lastModified') {
            return (new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime()) * multiplier;
        }
        return a[field].localeCompare(b[field]) * multiplier;
    });
}
