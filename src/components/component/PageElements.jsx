export const Section = ({ className = "", id, children }) => {
    return (
        <section id={id} className={`${className} container-fluid my-5 pt-5 px-120 min-hv-100 d-flex align-items-center`} >
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

export const Button = ({ btnName, type = "button", onClick, classNameBtn, classNameSpan }) => {
    return (
        <button type={type} className={`btn ${classNameBtn}`} onClick={onClick}>
            <span className={classNameSpan}>{btnName}</span>
        </button>
    );
};

export const CarouselControl = ({ direction = "prev", target }) => {
    return (
        <button
            className={`carousel-control-${direction}`}
            type="button"
            data-bs-target={target}
            data-bs-slide={direction}
        >
            <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
            <span className="visually-hidden">
                {direction === "prev" ? "Previous" : "Next"}
            </span>
        </button>
    );
}


export const TabNavBtn = ({ btnName, tabKey, activeTab, setActiveTab }) => {
    return (
        <button type="button" className={`tab-button ${activeTab === tabKey ? 'active' : ''}`} onClick={() => setActiveTab(tabKey)}
        >
            {btnName}
        </button>
    );
};

export const Input = ({ id, name, type, value, onChange, label, required = false, placeholder = "", classNameDiv = "", classNameInput = "", autoComplete = "off", errorMsg = "Please fill out this field." }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <input id={id} name={name} type={type} className={`floating-input ${classNameInput}`} value={value} onChange={onChange} required={required} placeholder={placeholder || " "} autoComplete={autoComplete} />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
            <div className="invalid-feedback">
                {errorMsg}
            </div>
        </div>
    );
};

export const FileInput = ({ id, name, label, onChange, required = false, classNameDiv = "", errorMsg = "Please upload a valid file (PDF, DOC, DOCX)." }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <input id={id} name={name} type="file" className="floating-input" onChange={onChange} required={required} accept=".pdf,.doc,.docx" />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
            <div className="invalid-feedback">
                {errorMsg}
            </div>
        </div>
    );
};

export const Select = ({ id, name, value = "", onChange, options = [], label, required = false, placeholder = "", classNameDiv = "", classNameSelect = "", errorMsg = "Please choose an option." }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <select id={id} name={name} value={value} className={`floating-select ${classNameSelect}`} onChange={onChange} required={required}>
                <option value="" disabled hidden>{placeholder}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
            <div className="invalid-feedback">
                {errorMsg}
            </div>
        </div>
    );
};

export const Textarea = ({ id, name, label, value = "", onChange, rows = 4, required = false, placeholder = " ", classNameDiv = "", classNameArea = "", errorMsg = "This field is required." }) => {
    return (
        <div className={`floating-group ${classNameDiv}`}>
            <textarea id={id} name={name} value={value} className={`floating-textarea ${classNameArea}`} onChange={onChange} rows={rows} required={required} placeholder={placeholder || " "} />
            <label htmlFor={id} className="floating-label">
                {label} {required && <span className="required">*</span>}
            </label>
            <div className="invalid-feedback">
                {errorMsg}
            </div>
        </div>
    );
};

export const FormSectionTitle = ({ number, children }) => {
    return (
        <h4 className="section-title d-flex align-items-center fw-semibold mb-4">
            <span className="section-number d-flex align-items-center justify-content-center fw-bold">
                {number.toString().padStart(2, "0")}
            </span>
            {children}
        </h4>
    );
};

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
export const ScrollToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 300);;
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
};