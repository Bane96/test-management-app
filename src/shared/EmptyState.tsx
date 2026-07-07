interface EmptyStateProps {
    message: string;
    actionLabel?: string;
    onAction?: () => void;
}

export function EmptyState({ message, actionLabel, onAction }: EmptyStateProps) {
    return (
        <div className="empty-state">
            <p className="">{message}</p>
            {actionLabel && onAction && (
                <button type="button" className="btn btn--primary" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}