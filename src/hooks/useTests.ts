import { useLocalStorage } from './useLocalStorage';
import type {TestCase, TestFormValues} from '../types/test.ts';

const STORAGE_KEY = 'tests';

export function useTests() {
    const [tests, setTests] = useLocalStorage<TestCase[]>(STORAGE_KEY, []);

    const addTest = (values: TestFormValues) => {
        const newTest: TestCase = {
            id: crypto.randomUUID(),
            ...values,
            lastModified: new Date().toISOString(),
        };
        setTests((prev) => [...prev, newTest]);
    };

    const updateTest = (id: string, values: TestFormValues) => {
        setTests((prev) =>
            prev.map((test) =>
                test.id === id
                    ? { ...test, ...values, lastModified: new Date().toISOString() }
                    : test
            )
        );
    };

    const deleteTest = (id: string) => {
        setTests((prev) => prev.filter((test) => test.id !== id));
    };

    return { tests, addTest, updateTest, deleteTest };
}