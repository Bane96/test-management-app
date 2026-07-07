import {useState} from 'react';
import type {TestFormValues, TestStatus} from '../types/test.ts';

interface TestFormProps {
    initialValues?: TestFormValues;
    onSubmit: (values: TestFormValues) => void;
    onCancel: () => void;
}

const STATUS_OPTIONS: TestStatus[] = ['waiting', 'passed', 'failed', 'skipped'];

export function TestForm({initialValues, onSubmit, onCancel}: TestFormProps) {
    const [name, setName] = useState(initialValues?.name ?? '');
    const [status, setStatus] = useState<TestStatus>(initialValues?.status ?? 'waiting');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!name.trim()) return;
        onSubmit({name: name.trim(), status});
    };

    return (
            <form className="test-form" onSubmit={handleSubmit}>
                <h2>{initialValues ? 'Edit Test' : 'New Test'}</h2>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="status">Status</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value as TestStatus)}>
                    {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <div className="test-form__actions">
                    <button type="button" onClick={onCancel}>Cancel</button>
                    <button type="submit">Save Test</button>
                </div>
            </form>
    );
}