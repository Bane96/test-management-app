import type {StatusFilter} from '../types/test';

interface StatusFilterProps {
    value: StatusFilter;
    onChange: (value: StatusFilter) => void;
}

const STATUS_OPTIONS: StatusFilter[] = ['all', 'waiting', 'passed', 'failed', 'skipped'];

export function StatusFilter({ value, onChange }: StatusFilterProps) {
    return (
        <div className="status-filter">
            <label htmlFor="status-filter">Filter by status</label>
            <select
                id="status-filter"
                value={value}
                onChange={(e) => onChange(e.target.value as StatusFilter)}
            >
                {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                        {status === 'all' ? 'All' : status}
                    </option>
                ))}
            </select>
        </div>
    );
}