export default function HighlightedText({ text }) {
    const parts = text.split(/({.*?})/g);

    return (
        <>
            {parts.map((part, i) =>
                part.startsWith("{") && part.endsWith("}") ? (
                    <span key={i} className="text-purple">
                        {part.slice(1, -1)}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}
