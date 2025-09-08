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

export const Button = ({ btnName, onClick }) => {
    return (
        <div className="text-center text-md-start py-5" data-aos="fade-up-right">
            <button className="btn btn-purple text-uppercase" onClick={onClick}>
                <span className="btn-purple--text">{btnName}</span>
            </button>
        </div>
    );
};

export const Input = ({ id, type, value, onChange, label, required = false, placeholder = "", classNameDiv = "", classNameInput = "" }) => {
    return (
        // <div className="col-md-6">
        <div className={`floating-group ${classNameDiv}`}>
            <input id={id} name={id} type={type} className={`floating-input ${classNameInput}`} value={value} onChange={onChange} required={required} placeholder={placeholder || " "} />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
        </div>
        // </div>
    );
};

export const Select = ({ id, name, value, onChange, options = [], label, required = false, placeholder = "Select an option", classNameDiv = "", classNameSelect = "" }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <select id={id} name={name} value={value} className={`floating-select ${classNameSelect}`} onChange={onChange} required={required}>
                <option value="">{placeholder}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
        </div>
    );
};

export const Textarea = ({ id, label, value, onChange, rows = 4, required = false, placeholder = "", classNameDiv = "", classNameArea = "" }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <textarea id={id} name={id} value={value} className={`floating-textarea ${classNameArea}`} onChange={onChange} rows={rows} required={required} placeholder={placeholder || " "} />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
        </div>
    );
}

export const FileInput = ({ id, label, value, onChange, required = false, classNameDiv = "" }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <input id={id} name={id} type="file" className="form-control" onChange={onChange} required={required} accept=".pdf,.doc,.docx" />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>

            {value && (
                <p className="file-name">
                    Selected file: <strong>{value.name}</strong>
                </p>
            )}
        </div>
    );
}