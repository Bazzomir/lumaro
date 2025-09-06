import { useState, useEffect } from 'react';
import '../../../assets/css/form.css';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState('contact');
    const [formData, setFormData] = useState({
        // Personal Information (Contact)
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
        projectBudget: '',
        // Job Application Fields
        jobPosition: '',
        experience: '',
        skills: '',
        education: '',
        availability: '',
        salary: '',
        portfolio: '',
        coverLetter: '',
        resumeFile: null
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

    const jobPositions = [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'UI/UX Designer',
        'DevOps Engineer',
        'Project Manager',
        'Quality Assurance',
        'Marketing Specialist',
        'Sales Representative',
        'Other'
    ];

    const experienceLevels = [
        'Entry Level (0-1 years)',
        'Junior (1-3 years)',
        'Mid-level (3-5 years)',
        'Senior (5-8 years)',
        'Lead (8+ years)',
        'Executive (10+ years)'
    ];

    const salaryRanges = [
        'Under $30,000',
        '$30,000 - $50,000',
        '$50,000 - $70,000',
        '$70,000 - $100,000',
        '$100,000 - $150,000',
        'Over $150,000',
        'To be discussed'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        const message = activeTab === 'contact'
            ? "Thank you for your inquiry! We'll get back to you within 24 hours."
            : "Thank you for your application! We'll review it and get back to you soon.";

        alert(message);

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
            projectBudget: '',
            jobPosition: '',
            experience: '',
            skills: '',
            education: '',
            availability: '',
            salary: '',
            portfolio: '',
            coverLetter: '',
            resumeFile: null
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
            projectBudget: '',
            jobPosition: '',
            experience: '',
            skills: '',
            education: '',
            availability: '',
            salary: '',
            portfolio: '',
            coverLetter: '',
            resumeFile: null
        });
    };

    return (
        <div className="form-container fade-in">
            <div className="card form-card">
                <div className="form-header">
                    <h2>{activeTab === 'contact' ? "Let's Start a Conversation" : "Join Our Team"}</h2>
                    <p>{activeTab === 'contact'
                        ? "Tell us about your needs and we'll create something amazing together"
                        : "Apply for a position and start your career journey with us"
                    }</p>
                </div>

                {/* Tab Navigation */}
                <div className="tab-nav">
                    <button
                        type="button"
                        className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        Contact Us
                    </button>
                    <button
                        type="button"
                        className={`tab-button ${activeTab === 'job' ? 'active' : ''}`}
                        onClick={() => setActiveTab('job')}
                    >
                        Job Application
                    </button>
                </div>

                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        {activeTab === 'contact' ? (
                            <>
                                {/* Section 1: Personal Information */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">01</span>
                                        Tell Us About Yourself
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
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
                                                <label htmlFor="name" className="floating-label">
                                                    First Name *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
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
                                                <label htmlFor="surname" className="floating-label">
                                                    Last Name *
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
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
                                                <label htmlFor="email" className="floating-label">
                                                    Email Address *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="tel"
                                                    className="floating-input"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="phone" className="floating-label">
                                                    Phone Number
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="company" className="floating-label">
                                                    Company
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="position"
                                                    name="position"
                                                    value={formData.position}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="position" className="floating-label">
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

                                    <div className="floating-group">
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
                                        <label htmlFor="service" className="floating-label">
                                            Select a Service *
                                        </label>
                                    </div>

                                    {formData.service === 'Other' && (
                                        <div className="floating-group">
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
                                            <label htmlFor="customService" className="floating-label">
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

                                    <div className="floating-group">
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
                                        <label htmlFor="projectDescription" className="floating-label">
                                            Project Description *
                                        </label>
                                    </div>

                                    <div className="floating-group">
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
                                        <label htmlFor="projectBudget" className="floating-label">
                                            Project Budget
                                        </label>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Job Application Sections */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">01</span>
                                        Personal Information
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="job-name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="job-name" className="floating-label">
                                                    First Name *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="job-surname"
                                                    name="surname"
                                                    value={formData.surname}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="job-surname" className="floating-label">
                                                    Last Name *
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="email"
                                                    className="floating-input"
                                                    id="job-email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="job-email" className="floating-label">
                                                    Email Address *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="tel"
                                                    className="floating-input"
                                                    id="job-phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="job-phone" className="floating-label">
                                                    Phone Number *
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Position & Experience */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">02</span>
                                        Position & Experience
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <select
                                                    className="floating-select"
                                                    id="jobPosition"
                                                    name="jobPosition"
                                                    value={formData.jobPosition}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select position...</option>
                                                    {jobPositions.map((position, index) => (
                                                        <option key={index} value={position}>
                                                            {position}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label htmlFor="jobPosition" className="floating-label">
                                                    Position Applied For *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <select
                                                    className="floating-select"
                                                    id="experience"
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleInputChange}
                                                    required
                                                >
                                                    <option value="">Select experience level...</option>
                                                    {experienceLevels.map((level, index) => (
                                                        <option key={index} value={level}>
                                                            {level}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label htmlFor="experience" className="floating-label">
                                                    Experience Level *
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="floating-group">
                                        <textarea
                                            className="floating-textarea"
                                            id="skills"
                                            name="skills"
                                            value={formData.skills}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            rows={3}
                                            required
                                        ></textarea>
                                        <label htmlFor="skills" className="floating-label">
                                            Key Skills & Technologies *
                                        </label>
                                    </div>
                                </div>

                                {/* Section 3: Education & Availability */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">03</span>
                                        Education & Availability
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="education"
                                                    name="education"
                                                    value={formData.education}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="education" className="floating-label">
                                                    Highest Education *
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="text"
                                                    className="floating-input"
                                                    id="availability"
                                                    name="availability"
                                                    value={formData.availability}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="availability" className="floating-label">
                                                    Available Start Date *
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <select
                                                    className="floating-select"
                                                    id="salary"
                                                    name="salary"
                                                    value={formData.salary}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select salary range...</option>
                                                    {salaryRanges.map((range, index) => (
                                                        <option key={index} value={range}>
                                                            {range}
                                                        </option>
                                                    ))}
                                                </select>
                                                <label htmlFor="salary" className="floating-label">
                                                    Expected Salary
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="floating-group">
                                                <input
                                                    type="url"
                                                    className="floating-input"
                                                    id="portfolio"
                                                    name="portfolio"
                                                    value={formData.portfolio}
                                                    onChange={handleInputChange}
                                                    placeholder=" "
                                                />
                                                <label htmlFor="portfolio" className="floating-label">
                                                    Portfolio/LinkedIn URL
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4: Additional Information */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">04</span>
                                        Additional Information
                                    </h4>

                                    <div className="floating-group">
                                        <textarea
                                            className="floating-textarea"
                                            id="coverLetter"
                                            name="coverLetter"
                                            value={formData.coverLetter}
                                            onChange={handleInputChange}
                                            placeholder=" "
                                            rows={5}
                                            required
                                        ></textarea>
                                        <label htmlFor="coverLetter" className="floating-label">
                                            Cover Letter / Why should we hire you? *
                                        </label>
                                    </div>

                                    <div className="floating-group">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="resumeFile"
                                            name="resumeFile"
                                            onChange={handleInputChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <label htmlFor="resumeFile" className="form-label">
                                            Upload Resume (PDF, DOC, DOCX)
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Form Actions */}
                        <div className="d-flex gap-3 justify-content-end">
                            <button
                                type="button"
                                className="btn btn-outline-elegant"
                                onClick={handleReset}
                            >
                                Reset Form
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary-gradient"
                            >
                                {activeTab === 'contact' ? 'Send Inquiry' : 'Submit Application'}
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
}