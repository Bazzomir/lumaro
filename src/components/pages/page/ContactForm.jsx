import '../../../assets/css/form.css';
import { useState, useEffect } from 'react';
import { useData } from '../../../hooks/useData.js';
import { LoadingAnimation } from '../../component/animations.jsx';
import { Input, Select, Textarea, FileInput, Section, TabNavBtn, ScrollToTopBtn, FormSectionTitle, Button } from '../../component/PageElements.jsx';

export default function ContactForm() {

    const { data: queryData, isLoading, error } = useData();
    const [formData, setFormData] = useState({});
    const [activeTab, setActiveTab] = useState('contact');

    useEffect(() => {
        if (queryData?.form?.defaultValues) {
            setFormData(queryData.form.defaultValues);
        }
    }, [queryData]);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

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

    };


    return (

        <Section className="justify-content-center pt-0 py-5">
            <div className="form-header">
                <h2>{activeTab === 'contact' ? "Let's Start a Conversation" : "Join Our Team"}</h2>
                <p>{activeTab === 'contact'
                    ? "Tell us about your needs and we'll create something amazing together"
                    : "Apply for a position and start your career journey with us"
                }</p>
            </div>

            {/* Tab Navigation */}
            <div className="tab-nav">
                <TabNavBtn btnName="Contact Us" tabKey="contact" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavBtn btnName="Job Application" tabKey="job" activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    {activeTab === 'contact' ? (
                        <div className="fade-in">
                            {/* Section 1: Personal Information */}
                            <div className="form-section">
                                <FormSectionTitle number={1}>Tell Us About Yourself</FormSectionTitle>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input id="name" type="text" label="First Name" value={formData.name || ""} onChange={handleInputChange} required autoComplete="given-name" />
                                    </div>
                                    <div className="col-md-6">
                                        <Input id="surname" type="text" label="Last Name" value={formData.surname || ""} onChange={handleInputChange} required autoComplete="family-name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input id="email" type="email" label="Email" value={formData.email || ""} onChange={handleInputChange} required autoComplete="email" />
                                    </div>
                                    <div className="col-md-6">
                                        <Input id="phone" type="tel" label="Phone" value={formData.phone || ""} onChange={handleInputChange} required autoComplete="tel" />
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
                                <FormSectionTitle number={2}>What Can We Help You With?</FormSectionTitle>
                                <Select id="service" value={formData.service || ""} onChange={handleInputChange} label="Select a service" options={queryData.form.options.services} required />
                                {formData.service === 'Other' && (
                                    <Input id="customService" type="text" label="Please specify your needs" value={formData.customService || ""} onChange={handleInputChange} required />
                                )}
                            </div>

                            {/* Section 3: Project Details */}
                            <div className="form-section">
                                <FormSectionTitle number={3}>Tell Us About Your Project</FormSectionTitle>
                                <Textarea id="projectDescription" label="Project Description" value={formData.projectDescription || ""} onChange={handleInputChange} required />
                                <Select id="projectBudget" label="Project Budget" value={formData.projectBudget || ""} onChange={handleInputChange} options={queryData.form.options.budgetRanges} required />
                            </div>
                        </div>
                    ) : (
                        <div className="fade-in">
                            {/* Job Application Sections */}
                            < div className="form-section">
                                <FormSectionTitle number={1}>Personal Information</FormSectionTitle>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input id="job-name" type="text" label="First Name" value={formData.name || ""} onChange={handleInputChange} required autoComplete="given-name" />
                                    </div>

                                    <div className="col-md-6">
                                        <Input id="job-surname" type="text" label="Last Name" value={formData.surname || ""} onChange={handleInputChange} required autoComplete="family-name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input id="job-email" type="email" label="Email" value={formData.email || ""} onChange={handleInputChange} required autoComplete="email" />
                                    </div>

                                    <div className="col-md-6">
                                        <Input id="job-phone" type="tel" label="Phone" value={formData.phone || ""} onChange={handleInputChange} required autoComplete="tel" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Position & Experience */}
                            <div className="form-section">
                                <FormSectionTitle number={2}>Position & Experience</FormSectionTitle>
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
                                <FormSectionTitle number={3}>Education & Availability</FormSectionTitle>
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
                                <FormSectionTitle number={4}>Resume & Cover Letter</FormSectionTitle>
                                <Textarea id="coverLetter" label="Cover Letter" value={formData.coverLetter || ""} onChange={handleInputChange} required />
                                <FileInput id="resumeFile" label="Upload Resume" value={formData.resumeFile || ""} onChange={handleInputChange} required />
                            </div>
                        </div>
                    )
                    }

                    {/* Form Actions */}
                    <div className="d-flex gap-3 justify-content-end">
                        <Button btnName="Reset Form" classNameBtn="btn-gray-small px-4 py-2" onClick={resetFormData} />
                        <Button type="sumbit" btnName={activeTab === 'contact' ? 'Send Inquiry' : 'Submit Application'} classNameBtn="btn-purle-small px-4 py-2" />
                    </div>
                </form >
            </div >

            <ScrollToTopBtn />
        </Section >
    );
}