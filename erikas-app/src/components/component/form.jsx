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
                                <div className="wrap-contact3-form-radio">
                                    <div className="contact3-form-radio m-r-42">
                                        <input className="input-radio3" id="radio1" type="radio" name="choice" value="say-hi" checked="checked" />
                                        <label className="label-radio3" for="radio1">
                                            Say Hi
                                        </label>
                                    </div>

                                    <div className="contact3-form-radio">
                                        <input className="input-radio3" id="radio2" type="radio" name="choice" value="get-quote" />
                                        <label className="label-radio3" for="radio2">
                                            Get a Quote
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Fullname:</label>
                                    <input type="text" className="form-control" id="recipient-name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" id="recipient-name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Subject:</label>
                                    <input type="text" className="form-control" id="recipient-name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Form;
