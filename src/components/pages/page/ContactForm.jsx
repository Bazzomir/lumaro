import '../../../assets/css/form.css';
import { useState, useEffect, useRef } from 'react';
import { useData } from '../../../hooks/useData.js';
import { LoadingAnimation } from '../../component/animations.jsx';
import { HighlightedText, Input, Select, Textarea, FileInput, Section, TabNavBtn, ScrollToTopBtn, FormSectionTitle, Button } from '../../component/PageElements.jsx';

export default function ContactForm() {
    const { data: queryData, isLoading, error } = useData();
    const [contactForm, setContactForm] = useState({});
    const [jobForm, setJobForm] = useState({});
    const [activeTab, setActiveTab] = useState('contact');
    const contactFormRef = useRef(null);
    const jobFormRef = useRef(null);

    const validateBootstrapForm = (e) => {
        const form = e.target;
        if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
        form.classList.add("was-validated");
    };

    useEffect(() => {
        if (!queryData?.form) return;

        const contactDefaults = queryData.form.defaultValuesContact || {
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
        };

        const jobDefaults = queryData.form.defaultValuesJob || {
            name: '',
            surname: '',
            email: '',
            phone: '',
            jobPosition: '',
            experience: '',
            skills: '',
            education: '',
            availability: '',
            salary: '',
            portfolio: '',
            coverLetter: '',
            resumeFile: null
        };

        setContactForm(contactDefaults);
        setJobForm(jobDefaults);
    }, [queryData]);

    useEffect(() => {
        if (contactFormRef.current) contactFormRef.current.classList.remove('was-validated');
        if (jobFormRef.current) jobFormRef.current.classList.remove('was-validated');
    }, [activeTab]);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const handleInputChange = (e, formType = 'contact') => {
        const { name, value, type, files } = e.target;
        const actualValue = type === 'file' ? (files && files[0] ? files[0] : null) : value;

        formType === 'contact' ? setContactForm(prev => ({ ...prev, [name]: actualValue })) : setJobForm(prev => ({ ...prev, [name]: actualValue }));
    };

    const resetContactForm = () => {
        const defaults = queryData?.form?.defaultValuesContact || {};
        setContactForm(defaults);
        if (contactFormRef.current) contactFormRef.current.classList.remove('was-validated');
    };

    const resetJobForm = () => {
        const defaults = queryData?.form?.defaultValuesJob || {};
        setJobForm(defaults);
        if (jobFormRef.current) jobFormRef.current.classList.remove('was-validated');
    };

    const handleContactSubmit = (e) => {
        validateBootstrapForm(e);
        if (e.defaultPrevented) return;

        console.log('Contact form submitted:', contactForm);
        alert(queryData.form.text.messageContact || 'Thank you for your inquiry!');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        resetContactForm();
    };

    const handleJobSubmit = (e) => {
        validateBootstrapForm(e);
        if (e.defaultPrevented) return;

        console.log('Job application submitted:', jobForm);
        alert(queryData.form.text.messageJobApp || 'Thank you for your application!');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        resetJobForm();
    };

    const headerTitle = activeTab === 'contact' ? queryData.form.text.titleContact : queryData.form.text.titleJobApp;
    const headerParagraph = activeTab === 'contact' ? queryData.form.text.paragraphContact : queryData.form.text.paragraphJobApp;

    return (
        <Section className="justify-content-center pt-0 py-5">
            <div className="form-header pb-5">
                <h2 className="mb-0 mx-0 mx-sm-auto text-center w-100 w-lg-75 fw-bold">
                    <HighlightedText text={headerTitle} />
                </h2>
                <p className="services--paragraph text-center">{headerParagraph}</p>
            </div>

            <div className="tab-nav d-flex">
                <TabNavBtn btnName="Contact Us" tabKey="contact" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavBtn btnName="Job Application" tabKey="job" activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="p-4">
                {/* CONTACT FORM */}
                <form ref={contactFormRef} className={`needs-validation ${activeTab === 'contact' ? 'fade-in' : 'd-none'}`} noValidate onSubmit={handleContactSubmit}>
                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={1}>Tell Us About Yourself</FormSectionTitle>
                        <div className="row">
                            <div className="col-md-6">
                                <Input id="contact-name" name="name" type="text" label="First Name" value={contactForm.name || ''} onChange={(e) => handleInputChange(e, 'contact')} required autoComplete="given-name" errorMsg="Please enter your name." />
                            </div>
                            <div className="col-md-6">
                                <Input id="contact-surname" name="surname" type="text" label="Last Name" value={contactForm.surname || ''} onChange={(e) => handleInputChange(e, 'contact')} required autoComplete="family-name" errorMsg="Please enter your surname." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Input id="contact-email" name="email" type="email" label="Email" value={contactForm.email || ''} onChange={(e) => handleInputChange(e, 'contact')} required autoComplete="email" errorMsg="Please enter a valid email address." />
                            </div>
                            <div className="col-md-6">
                                <Input id="contact-phone" name="phone" type="tel" label="Phone" value={contactForm.phone || ''} onChange={(e) => handleInputChange(e, 'contact')} required autoComplete="tel" errorMsg="Please enter a valid phone number." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Input id="contact-company" name="company" type="text" label="Company" value={contactForm.company || ''} onChange={(e) => handleInputChange(e, 'contact')} required errorMsg="Please enter a valid company name." />
                            </div>
                            <div className="col-md-6">
                                <Input id="contact-position" name="position" type="text" label="Position" value={contactForm.position || ''} onChange={(e) => handleInputChange(e, 'contact')} required errorMsg="Please enter your position." />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={2}>What Can We Help You With?</FormSectionTitle>
                        <Select id="contact-service" name="service" value={contactForm.service || ''} onChange={(e) => handleInputChange(e, 'contact')} label="Select a service" options={queryData.form.options.services} required errorMsg="Please select a service." />
                        {contactForm.service === 'Other' && (
                            <Input id="contact-customService" name="customService" type="text" label="Please specify your needs" value={contactForm.customService || ''} onChange={(e) => handleInputChange(e, 'contact')} required errorMsg="Please enter your service." />
                        )}
                    </div>

                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={3}>Tell Us About Your Project</FormSectionTitle>
                        <Textarea id="contact-projectDescription" name="projectDescription" label="Project Description" value={contactForm.projectDescription || ''} onChange={(e) => handleInputChange(e, 'contact')} required errorMsg="Please describe your project." />
                        <Select id="contact-projectBudget" name="projectBudget" label="Project Budget" value={contactForm.projectBudget || ''} onChange={(e) => handleInputChange(e, 'contact')} options={queryData.form.options.budgetRanges} required errorMsg="Please select a budget." />
                    </div>

                    <div className="d-flex gap-3 justify-content-end">
                        <Button btnName="Reset Form" classNameBtn="btn-gray-small px-4 py-2" onClick={resetContactForm} />
                        <Button type="submit" btnName="Send Inquiry" classNameBtn="btn-purle-small px-4 py-2" />
                    </div>
                </form>

                {/* JOB APPLICATION FORM */}
                <form ref={jobFormRef} className={`needs-validation ${activeTab === 'job' ? 'fade-in' : 'd-none'}`} noValidate onSubmit={handleJobSubmit}>
                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={1}>Personal Information</FormSectionTitle>
                        <div className="row">
                            <div className="col-md-6">
                                <Input id="job-name" name="name" type="text" label="First Name" value={jobForm.name || ''} onChange={(e) => handleInputChange(e, 'job')} required autoComplete="given-name" errorMsg="Please enter your name." />
                            </div>
                            <div className="col-md-6">
                                <Input id="job-surname" name="surname" type="text" label="Last Name" value={jobForm.surname || ''} onChange={(e) => handleInputChange(e, 'job')} required autoComplete="family-name" errorMsg="Please enter your surname." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Input id="job-email" name="email" type="email" label="Email" value={jobForm.email || ''} onChange={(e) => handleInputChange(e, 'job')} required autoComplete="email" errorMsg="Please enter a valid email address." />
                            </div>
                            <div className="col-md-6">
                                <Input id="job-phone" name="phone" type="tel" label="Phone" value={jobForm.phone || ''} onChange={(e) => handleInputChange(e, 'job')} required autoComplete="tel" errorMsg="Please enter a valid phone number." />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={2}>Position & Experience</FormSectionTitle>
                        <div className="row">
                            <div className="col-md-6">
                                <Select id="jobPosition" name="jobPosition" label="Position Applied For" value={jobForm.jobPosition || ''} onChange={(e) => handleInputChange(e, 'job')} options={queryData.form.options.jobPositions} required errorMsg="Please select a job position." />
                            </div>
                            <div className="col-md-6">
                                <Select id="experience" name="experience" label="Experience Level" value={jobForm.experience || ''} onChange={(e) => handleInputChange(e, 'job')} options={queryData.form.options.experienceLevels} required errorMsg="Please select your years of experince." />
                            </div>
                        </div>
                        <Textarea id="skills" name="skills" label="Skills" value={jobForm.skills || ''} onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please enter your skills." />
                    </div>

                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={3}>Education & Availability</FormSectionTitle>
                        <div className="row">
                            <div className="col-md-6">
                                <Input id="education" name="education" type="text" label="Highest Education" value={jobForm.education || ''} onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please enter your education." />
                            </div>
                            <div className="col-md-6">
                                <Input id="availability" name="availability" type="date" label="Available Start Date" value={jobForm.availability || ''} onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please enter your available start date." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Select id="salary" name="salary" label="Expected Salary" value={jobForm.salary || ''} onChange={(e) => handleInputChange(e, 'job')} options={queryData.form.options.salaryRanges} required errorMsg="Please select your expected salary." />
                            </div>
                            <div className="col-md-6">
                                <Input id="portfolio" name="portfolio" type="text" label="Portfolio/LinkedIn URL/GitHub Profile" value={jobForm.portfolio || ''} onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please leave a link from your portfolio." />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 pb-4">
                        <FormSectionTitle number={4}>Resume & Cover Letter</FormSectionTitle>
                        <Textarea id="coverLetter" name="coverLetter" label="Cover Letter" value={jobForm.coverLetter || ''} onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please enter a cover letter." />
                        <FileInput id="resumeFile" name="resumeFile" label="Upload Resume" onChange={(e) => handleInputChange(e, 'job')} required errorMsg="Please upload your resume (PDF, DOC, or DOCX)." />
                    </div>

                    <div className="d-flex gap-3 justify-content-end">
                        <Button btnName="Reset Form" classNameBtn="btn-gray-small px-4 py-2" onClick={resetJobForm} />
                        <Button type="submit" btnName="Submit Application" classNameBtn="btn-purle-small px-4 py-2" />
                    </div>
                </form>
            </div>

            <ScrollToTopBtn />
        </Section>
    );
}
