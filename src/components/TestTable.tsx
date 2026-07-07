import {SortHeader} from './SortHeader';
import type {SortConfig, SortField, TestCase} from '../types/test.ts';
import {EmptyState} from '../shared/EmptyState.tsx';

interface TestTableProps {
    tests: TestCase[];
    sort: SortConfig;
    onSort: (field: SortField) => void;
    onEdit: (test: TestCase) => void;
    onDelete: (id: string) => void;
}

export function TestTable({tests, sort, onSort, onEdit, onDelete}: TestTableProps) {
    if (tests.length === 0) {
        return <EmptyState message="No tests found." />;
    }

    return (
        <div className="test-table-wrapper">
            <table className="test-table">
                <thead>
                <tr>
                    <SortHeader field="name" label="Name" sort={sort} onSort={onSort}/>
                    <SortHeader field="status" label="Status" sort={sort} onSort={onSort}/>
                    <SortHeader field="lastModified" label="Last Modified" sort={sort} onSort={onSort}/>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tests.map((test) => (
                    <tr key={test.id}>
                        <td>{test.name}</td>
                        <td>
                            <span className={`status-badge status-badge--${test.status}`}>{test.status}</span>
                        </td>
                        <td>{new Date(test.lastModified).toLocaleString()}</td>
                        <td>
                            <button type="button" className="btn btn--primary" onClick={() => onEdit(test)}>Edit</button>
                            <button type="button" className="btn btn--delete" onClick={() => onDelete(test.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}