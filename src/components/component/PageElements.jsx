export const Section = ({ className = "", id, children }) => {
    return (
        <section className={`${className} container-fluid my-5 pt-6 px-120 h-100 d-flex align-items-center`} id={id}>
            <div className="container">
                {children}
            </div>
        </section>
    )
};

export const HighlightedText = ({ text }) => {
    const parts = text.split(/({.*?})/g).filter(Boolean);

    return (
        <>
            {parts.map((part, i) =>
                part.startsWith("{") && part.endsWith("}") ? (
                    <span key={i} className="text-purple">
                        {part.slice(1, -1)}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

export const Button = ({ btnName }) => {
    return (
        <div className="text-center text-md-start py-5" data-aos="fade-up-right">
            <button className="btn btn-purple text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="btn-purple--text">{btnName}</span>
            </button>
        </div>
    );
}
