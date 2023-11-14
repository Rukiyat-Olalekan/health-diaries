export default function Custom500() {
  return (
    <div className="error">
      <h1>Oops! Reload the page</h1>
      <div className="button">
        Or go back to{" "}
        <button>
          <Link href="/">Home</Link>
        </button>
      </div>
    </div>
  );
}
