export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-state">
      <p>⚠️ {message}</p>
      <button onClick={onRetry} className="retry-btn">
        🔄 Retry
      </button>
    </div>
  );
}
