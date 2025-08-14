export function Button({ btnName }) {
    return (
        <div className="text-center text-md-start py-5" data-aos="fade-up-right">
            <button className="btn btn-purple text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="btn-purple--text">{btnName}</span>
            </button>
        </div>
    );
}

export function ButtonForm() {
    return (
        <button type="button" className="btn-form text-uppercase" data-aos="fade-right">Send</button>
    )
}
