import { SortHeader } from './SortHeader';
import type {SortConfig, SortField, TestCase} from '../types/test.ts';

interface TestTableProps {
    tests: TestCase[];
    sort: SortConfig;
    onSort: (field: SortField) => void;
    onEdit: (test: TestCase) => void;
    onDelete: (id: string) => void;
}

export function TestTable({ tests, sort, onSort, onEdit, onDelete }: TestTableProps) {
    return (
        <table>
            <thead>
            <tr>
                <SortHeader field="name" label="Name" sort={sort} onSort={onSort} />
                <SortHeader field="status" label="Status" sort={sort} onSort={onSort} />
                <SortHeader field="lastModified" label="Last Modified" sort={sort} onSort={onSort} />
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {tests.map((test) => (
                <tr key={test.id}>
                    <td>{test.name}</td>
                    <td>
                        <span>{test.status}</span>
                    </td>
                    <td>{new Date(test.lastModified).toLocaleString()}</td>
                    <td>
                        <button type="button" onClick={() => onEdit(test)}>Edit</button>
                        <button type="button" onClick={() => onDelete(test.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}