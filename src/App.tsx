import { useState, useMemo } from 'react';
import { useTests } from './hooks/useTests';
import { sortTests } from './utils/sort';
import { filterTests } from './utils/filter';
import { TestTable } from './components/TestTable';
import { TestForm } from './components/TestForm';
import { StatusFilter } from './components/StatusFilter';
import {Search} from './components/Search.tsx';
import type {SortConfig, SortField, StatusFilter as StatusFilterType, TestCase} from './types/test';

export function App() {
  const { tests, addTest, updateTest, deleteTest } = useTests();

  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilterType>('all');
  const [sort, setSort] = useState<SortConfig>({ field: 'name', direction: 'asc' });

  const [editingTest, setEditingTest] = useState<TestCase | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const visibleTests = useMemo(() => {
    const filtered = filterTests(tests, searchText, statusFilter);
    return sortTests(filtered, sort);
  }, [tests, searchText, statusFilter, sort]);

  const handleSort = (field: SortField) => {
    setSort((prev) =>
        prev.field === field
            ? { field, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
            : { field, direction: 'asc' }
    );
  };

  const handleAddClick = () => {
    setEditingTest(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (test: TestCase) => {
    setEditingTest(test);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (values: { name: string; status: TestCase['status'] }) => {
    if (editingTest) {
      updateTest(editingTest.id, values);
    } else {
      addTest(values);
    }
    setIsFormOpen(false);
  };

  return (
      <div className="app">
        <h1>Test Management</h1>

        <div className="toolbar">
          <Search value={searchText} onChange={setSearchText} />
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
          <button type="button" className="btn btn--primary" onClick={handleAddClick}>Add Test</button>
        </div>

        <TestTable
            tests={visibleTests}
            sort={sort}
            onSort={handleSort}
            onEdit={handleEditClick}
            onDelete={deleteTest}
        />

        {isFormOpen && (
            <TestForm
                initialValues={editingTest ?? undefined}
                onSubmit={handleFormSubmit}
                onCancel={() => setIsFormOpen(false)}
            />
        )}
      </div>
  );
}