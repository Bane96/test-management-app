interface SearchProps {
    value: string;
    onChange: (value: string) => void;
}

export function Search({value, onChange}: SearchProps) {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange(event.target.value);
    };
    return (
        <div>
            <label htmlFor="search">Search tests by name</label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Search tests..."
            />
        </div>
    );
}