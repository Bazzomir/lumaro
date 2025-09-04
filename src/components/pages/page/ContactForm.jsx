import { useState, useEffect } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        // Personal Information
        name: '',
        surname: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        // Services
        service: '',
        customService: '',
        // Project Details
        projectDescription: '',
        projectBudget: ''
    });

    const [showScrollTop, setShowScrollTop] = useState(false);

    // Handle scroll to show/hide scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'E-commerce Solutions',
        'Digital Marketing',
        'SEO Optimization',
        'Cloud Solutions',
        'Consulting Services',
        'Other'
    ];

    const budgetRanges = [
        'Under $5,000',
        '$5,000 - $15,000',
        '$15,000 - $50,000',
        '$50,000 - $100,000',
        'Over $100,000',
        'To be discussed'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');

        // Scroll to top
        scrollToTop();

        // Reset form
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            service: '',
            customService: '',
            projectDescription: '',
            projectBudget: ''
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            service: '',
            customService: '',
            projectDescription: '',
            projectBudget: ''
        });
    };

    return (
        <div className="form-container fade-in">
            <div className="card form-card">
                <div className="form-header">
                    <h2>Let's Start a Conversation</h2>
                    <p>Tell us about your needs and we'll create something amazing together</p>
                </div>

                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        {/* Section 1: Personal Information */}
                        <div className="form-section">
                            <h4 className="section-title">
                                <span className="section-number">01</span>
                                Tell Us About Yourself
                            </h4>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="text"
                                            className="floating-input"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="name" className="floating-label-text">
                                            First Name *
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="text"
                                            className="floating-input"
                                            id="surname"
                                            name="surname"
                                            value={formData.surname}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="surname" className="floating-label-text">
                                            Last Name *
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="email"
                                            className="floating-input"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="email" className="floating-label-text">
                                            Email Address *
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="tel"
                                            className="floating-input"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label htmlFor="phone" className="floating-label-text">
                                            Phone Number
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="text"
                                            className="floating-input"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label htmlFor="company" className="floating-label-text">
                                            Company
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="floating-label">
                                        <input
                                            type="text"
                                            className="floating-input"
                                            id="position"
                                            name="position"
                                            value={formData.position}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                        />
                                        <label htmlFor="position" className="floating-label-text">
                                            Position
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Services */}
                        <div className="form-section">
                            <h4 className="section-title">
                                <span className="section-number">02</span>
                                What Can We Help You With?
                            </h4>

                            <div className="floating-label">
                                <select
                                    className="floating-select"
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose a service...</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="service" className="floating-label-text">
                                    Select a Service *
                                </label>
                            </div>

                            {formData.service === 'Other' && (
                                <div className="floating-label">
                                    <input
                                        type="text"
                                        className="floating-input"
                                        id="customService"
                                        name="customService"
                                        value={formData.customService}
                                        onChange={handleInputChange}
                                        placeholder=" "
                                        required
                                    />
                                    <label htmlFor="customService" className="floating-label-text">
                                        Please specify your needs *
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Section 3: Project Details */}
                        <div className="form-section">
                            <h4 className="section-title">
                                <span className="section-number">03</span>
                                Tell Us About Your Project
                            </h4>

                            <div className="floating-label">
                                <textarea
                                    className="floating-textarea"
                                    id="projectDescription"
                                    name="projectDescription"
                                    value={formData.projectDescription}
                                    onChange={handleInputChange}
                                    placeholder=" "
                                    rows={5}
                                    required
                                ></textarea>
                                <label htmlFor="projectDescription" className="floating-label-text">
                                    Project Description *
                                </label>
                            </div>

                            <div className="floating-label">
                                <select
                                    className="floating-select"
                                    id="projectBudget"
                                    name="projectBudget"
                                    value={formData.projectBudget}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select budget range...</option>
                                    {budgetRanges.map((budget, index) => (
                                        <option key={index} value={budget}>
                                            {budget}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="projectBudget" className="floating-label-text">
                                    Project Budget
                                </label>
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="d-flex gap-3 justify-content-end">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={handleReset}
                            >
                                Reset Form
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    ⩓
                </button>
            )}
        </div>
    );
};