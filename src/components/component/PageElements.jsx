export const Section = ({ className = "", id, children }) => {
    return (
        <section className={`${className} container-fluid my-5 pt-6 px-120 h-100 box-sizing overflow-hidden`} id={id}>
            {children}
        </section>
    )
};

export const HighlightedText = ({ text }) => {
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
