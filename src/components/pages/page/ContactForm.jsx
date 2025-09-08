import '../../../assets/css/form.css';
import { useState, useEffect } from 'react';
import { useData } from '../../../hooks/useData.js';
import { LoadingAnimation } from '../../component/animations.jsx';
import { Input, Select, Textarea, FileInput, Section } from '../../component/PageElements.jsx';

export default function ContactForm() {

    const { data: queryData, isLoading, error } = useData();
    const [formData, setFormData] = useState({});
    const [activeTab, setActiveTab] = useState('contact');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        if (queryData?.form?.defaultValues) {
            setFormData(queryData.form.defaultValues);
        }
    }, [queryData]);

    // Handle scroll to show/hide scroll-to-top button
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const resetFormData = () => {
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
            resumeFile: null,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        const message = activeTab === 'contact'
            ? "Thank you for your inquiry! We'll get back to you within 24 hours."
            : "Thank you for your application! We'll review it and get back to you soon.";

        alert(message);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        resetFormData();

        // Scroll to top
        scrollToTop();
    };


    return (

        <Section className="justify-content-center pt-0 py-5 fade-in">
            {/* <div className="container-fluid fade-in"> */}
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
                                            <Input id="name" type="text" label="First Name" value={formData.name || ""} onChange={handleInputChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <Input id="surname" type="text" label="Last Name" value={formData.surname || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input id="email" type="email" label="Email" value={formData.email || ""} onChange={handleInputChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <Input id="phone" type="tel" label="Phone" value={formData.phone || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input id="company" type="text" label="Company" value={formData.company || ""} onChange={handleInputChange} required />
                                        </div>
                                        <div className="col-md-6">
                                            <Input id="position" type="text" label="Position" value={formData.position || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Services */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">02</span>
                                        What Can We Help You With?
                                    </h4>

                                    <Select id="service" value={formData.service || ""} onChange={handleInputChange} label="Select a Service" options={queryData.form.options.services} required />

                                    {formData.service === 'Other' && (
                                        <Input id="customService" type="text" label="Please specify your needs" value={formData.customService || ""} onChange={handleInputChange} required />
                                    )}
                                </div>

                                {/* Section 3: Project Details */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">03</span>
                                        Tell Us About Your Project
                                    </h4>

                                    <Textarea id="projectDescription" label="Project Description" value={formData.projectDescription || ""} onChange={handleInputChange} required />

                                    <Select id="projectBudget" label="Project Budget" value={formData.projectBudget || ""} onChange={handleInputChange} options={queryData.form.options.budgetRanges} required />
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
                                            <Input id="job-name" type="text" label="First Name" value={formData.name || ""} onChange={handleInputChange} required />
                                        </div>

                                        <div className="col-md-6">
                                            <Input id="job-surname" type="text" label="Last Name" value={formData.surname || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input id="job-email" type="email" label="Email" value={formData.email || ""} onChange={handleInputChange} required />
                                        </div>

                                        <div className="col-md-6">
                                            <Input id="job-phone" type="tel" label="Phone" value={formData.phone || ""} onChange={handleInputChange} required />
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
                                            <Select id="jobPosition" label="Position Applied For" value={formData.jobPosition || ""} onChange={handleInputChange} options={queryData.form.options.jobPositions} required />
                                        </div>

                                        <div className="col-md-6">
                                            <Select id="experience" label="Experience Level" value={formData.experience || ""} onChange={handleInputChange} options={queryData.form.options.experienceLevels} required />
                                        </div>
                                    </div>

                                    <Textarea id="skills" label="Skills" value={formData.skills || ""} onChange={handleInputChange} required />
                                </div>

                                {/* Section 3: Education & Availability */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">03</span>
                                        Education & Availability
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Input id="education" type="text" label="Highest Education" value={formData.education || ""} onChange={handleInputChange} required />
                                        </div>

                                        <div className="col-md-6">
                                            <Input id="availability" type="text" label="Available Start Date" value={formData.availability || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Select id="salary" label="Expected Salary" value={formData.salary || ""} onChange={handleInputChange} options={queryData.form.options.salaryRanges} required />
                                        </div>

                                        <div className="col-md-6">
                                            <Input id="portfolio" type="text" label="Portfolio/LinkedIn URL/GitHub Profile" value={formData.portfolio || ""} onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 4: Additional Information */}
                                <div className="form-section">
                                    <h4 className="section-title">
                                        <span className="section-number">04</span>
                                        Additional Information
                                    </h4>

                                    <Textarea id="coverLetter" label="Cover Letter" value={formData.coverLetter || ""} onChange={handleInputChange} required />


                                    <FileInput id="resumeFile" label="Upload Resume" value={formData.resumeFile || ""} onChange={handleInputChange} required />

                                </div>
                            </>
                        )}

                        {/* Form Actions */}
                        <div className="d-flex gap-3 justify-content-end">
                            <button
                                type="button"
                                className="btn btn-outline-elegant"
                                onClick={resetFormData}
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
            {
                showScrollTop && (
                    <button
                        className="scroll-to-top"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        ⩓
                    </button>
                )
            }
            {/* </div> */}
        </Section>
    );
}