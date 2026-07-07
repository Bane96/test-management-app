import type {SortConfig, SortField} from '../types/test.ts';

interface SortHeaderProps {
    field: SortField;
    label: string;
    sort: SortConfig;
    onSort: (field: SortField) => void;
}

export function SortHeader({field, label, sort, onSort}: SortHeaderProps) {
    const isActive = sort.field === field;
    const arrow = isActive ? (sort.direction === 'asc' ? '⬆️' : '⬇️') : '';

    return (
        <th
            aria-sort={isActive ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
        >
            <button type="button" onClick={() => onSort(field)}>
                {label} {arrow}
            </button>
        </th>
    );
}