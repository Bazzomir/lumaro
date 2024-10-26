import React from 'react';
import { Button } from './buttons';

function Form() {

    return (
        <div className="container">
            <Button btnName="Contact us" />

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><span className="contact3-form-title">
                                Contact Us
                            </span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="wrap-contact3-form-radio row py-4">
                                    <div className="contact3-form-radio m-r-42 col-6">
                                        <input className="input-radio3" id="radio1" type="radio" name="choice" value="say-hi" checked="checked" />
                                        <label className="label-radio3" for="radio1">
                                            Say Hi
                                        </label>
                                    </div>

                                    <div className="contact3-form-radio col-6">
                                        <input className="input-radio3" id="radio2" type="radio" name="choice" value="get-quote" />
                                        <label className="label-radio3" for="radio2">
                                            Get a Quote
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control py-2 contact-input" id="recipient-name" placeholder="Fullname" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control py-2 contact-input" id="recipient-name" placeholder="Email" required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control py-2 contact-input" id="recipient-name" placeholder="Subject" required />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control py-2 contact-input" id="message-text" placeholder="Message"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-success">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Form;
