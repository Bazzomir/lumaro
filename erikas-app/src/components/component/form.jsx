import { useState, useRef } from 'react';
import { Button, ButtonForm } from './buttons';

function Form() {
    const [selectedChoice, setSelectedChoice] = useState("say-hi");
    const textareaRef = useRef(null);

    const handleChoiceChange = (event) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div className="container">
            <Button btnName="Contact us" />

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <span className="contact3-form-title">Contact Us</span>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-radio row py-4">
                                    <div className="form-radio m-r-42 col-6 ">
                                        <input
                                            className="input-radio3"
                                            id="radio1"
                                            type="radio"
                                            name="choice"
                                            value="say-hi"
                                            checked={selectedChoice === "say-hi"}
                                            onChange={handleChoiceChange}
                                        />
                                        <label className="label-radio3" htmlFor="radio1">Say Hi</label>
                                    </div>

                                    <div className="form-radio col-6">
                                        <input
                                            className="input-radio3"
                                            id="radio2"
                                            type="radio"
                                            name="choice"
                                            value="get-quote"
                                            checked={selectedChoice === "get-quote"}
                                            onChange={handleChoiceChange}
                                        />
                                        <label className="label-radio3" htmlFor="radio2">Get a Quote</label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control py-2 contact-input" placeholder="Fullname" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control py-2 contact-input" placeholder="Email" required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control py-2 contact-input" placeholder="Subject" required />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        ref={textareaRef}
                                        rows="1"
                                        className="form-control py-2 contact-input"
                                        placeholder="Message"
                                        onFocus={() => textareaRef.current.rows = 7}
                                        onBlur={() => textareaRef.current.rows = 1}
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-start p-3">
                            <ButtonForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
