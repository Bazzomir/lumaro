import '../../../assets/css/form.css';
import { useState, useEffect } from 'react';
import { useData } from '../../../hooks/useData.js';
import { LoadingAnimation } from '../../component/animations.jsx';
import {
    HighlightedText,
    Input,
    Select,
    Textarea,
    FileInput,
    Section,
    TabNavBtn,
    ScrollToTopBtn,
    FormSectionTitle,
    Button
} from '../../component/PageElements.jsx';

export default function ContactForm() {

    const { data: queryData, isLoading, error } = useData();
    const [activeTab, setActiveTab] = useState("contact");

    // Initialize with empty strings to prevent undefined values
    const [formDataContact, setFormDataContact] = useState({
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

    const [formDataJob, setFormDataJob] = useState({
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
        resumeFile: ''
    });

    useEffect(() => {
        if (queryData?.form) {
            setFormDataContact(queryData.form.defaultValuesContact);
            setFormDataJob(queryData.form.defaultValuesJob);
        }
    }, [queryData]);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    // CONTACT handler
    const handleContactChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormDataContact(prev => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
    };

    // JOB handler
    const handleJobChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormDataJob(prev => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
    };

    // RESET FUNCTIONS
    const resetContact = () => {
        setFormDataContact(queryData.form.defaultValuesContact);
    };

    const resetJob = () => {
        setFormDataJob(queryData.form.defaultValuesJob);
    };

    // SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();

        if (activeTab === "contact") {
            console.log("Submitting contact:", formDataContact);
            alert(queryData.form.text.messageContact);
            resetContact();
        } else {
            console.log("Submitting job:", formDataJob);
            alert(queryData.form.text.messageJobApp);
            resetJob();
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Section className="justify-content-center pt-0 py-5">

            {/* HEADER */}
            <div className="form-header pb-5">
                <h2 className="mb-0 mx-0 mx-sm-auto text-center w-100 w-lg-75 fw-bold">
                    <HighlightedText
                        text={activeTab === "contact"
                            ? queryData.form.text.titleContact
                            : queryData.form.text.titleJobApp
                        }
                    />
                </h2>

                <p className="services--paragraph text-center">
                    {activeTab === "contact"
                        ? queryData.form.text.paragraphContact
                        : queryData.form.text.paragraphJobApp}
                </p>
            </div>

            {/* TAB NAV */}
            <div className="tab-nav d-flex">
                <TabNavBtn
                    btnName="Contact Us"
                    tabKey="contact"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabNavBtn
                    btnName="Job Application"
                    tabKey="job"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>

            {/* FORM */}
            <div className="p-4">
                <form onSubmit={handleSubmit}>

                    {/* CONTACT FORM */}
                    {activeTab === "contact" ? (
                        <div className="fade-in">

                            {/* SECTION 1 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={1}>Tell Us About Yourself</FormSectionTitle>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            label="First Name"
                                            value={formDataContact.name || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="contact-surname"
                                            name="surname"
                                            type="text"
                                            label="Last Name"
                                            value={formDataContact.surname || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            value={formDataContact.email || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            label="Phone"
                                            value={formDataContact.phone || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="contact-company"
                                            name="company"
                                            type="text"
                                            label="Company"
                                            value={formDataContact.company || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="contact-position"
                                            name="position"
                                            type="text"
                                            label="Position"
                                            value={formDataContact.position || ''}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={2}>What Can We Help You With?</FormSectionTitle>

                                <Select
                                    id="contact-service"
                                    name="service"
                                    label="Select a service"
                                    value={formDataContact.service || ''}
                                    onChange={handleContactChange}
                                    options={queryData.form.options.services}
                                    required
                                />

                                {formDataContact.service === "Other" && (
                                    <Input
                                        id="contact-customService"
                                        name="customService"
                                        type="text"
                                        label="Please specify your needs"
                                        value={formDataContact.customService || ''}
                                        onChange={handleContactChange}
                                        required
                                    />
                                )}
                            </div>

                            {/* SECTION 3 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={3}>Tell Us About Your Project</FormSectionTitle>

                                <Textarea
                                    id="contact-projectDescription"
                                    name="projectDescription"
                                    label="Project Description"
                                    value={formDataContact.projectDescription || ''}
                                    onChange={handleContactChange}
                                    required
                                />

                                <Select
                                    id="contact-projectBudget"
                                    name="projectBudget"
                                    label="Project Budget"
                                    value={formDataContact.projectBudget || ''}
                                    onChange={handleContactChange}
                                    options={queryData.form.options.budgetRanges}
                                    required
                                />
                            </div>
                        </div>
                    ) : (
                        /* JOB FORM */
                        <div className="fade-in">

                            {/* SECTION 1 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={1}>Personal Information</FormSectionTitle>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="job-name"
                                            name="name"
                                            type="text"
                                            label="First Name"
                                            value={formDataJob.name || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="job-surname"
                                            name="surname"
                                            type="text"
                                            label="Last Name"
                                            value={formDataJob.surname || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="job-email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            value={formDataJob.email || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="job-phone"
                                            name="phone"
                                            type="tel"
                                            label="Phone"
                                            value={formDataJob.phone || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={2}>Position & Experience</FormSectionTitle>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Select
                                            id="job-position"
                                            name="jobPosition"
                                            label="Position Applied For"
                                            value={formDataJob.jobPosition || ''}
                                            onChange={handleJobChange}
                                            options={queryData.form.options.jobPositions}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Select
                                            id="job-experience"
                                            name="experience"
                                            label="Experience Level"
                                            value={formDataJob.experience || ''}
                                            onChange={handleJobChange}
                                            options={queryData.form.options.experienceLevels}
                                            required
                                        />
                                    </div>
                                </div>

                                <Textarea
                                    id="job-skills"
                                    name="skills"
                                    label="Skills"
                                    value={formDataJob.skills || ''}
                                    onChange={handleJobChange}
                                    required
                                />
                            </div>

                            {/* SECTION 3 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={3}>Education & Availability</FormSectionTitle>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Input
                                            id="job-education"
                                            name="education"
                                            type="text"
                                            label="Highest Education"
                                            value={formDataJob.education || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="job-availability"
                                            name="availability"
                                            type="text"
                                            label="Available Start Date"
                                            value={formDataJob.availability || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <Select
                                            id="job-salary"
                                            name="salary"
                                            label="Expected Salary"
                                            value={formDataJob.salary || ''}
                                            onChange={handleJobChange}
                                            options={queryData.form.options.salaryRanges}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <Input
                                            id="job-portfolio"
                                            name="portfolio"
                                            type="text"
                                            label="Portfolio / LinkedIn / GitHub"
                                            value={formDataJob.portfolio || ''}
                                            onChange={handleJobChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 4 */}
                            <div className="mb-4 pb-4">
                                <FormSectionTitle number={4}>Resume & Cover Letter</FormSectionTitle>

                                <Textarea
                                    id="job-coverLetter"
                                    name="coverLetter"
                                    label="Cover Letter"
                                    value={formDataJob.coverLetter || ''}
                                    onChange={handleJobChange}
                                    required
                                />

                                <FileInput
                                    id="job-resume"
                                    name="resumeFile"
                                    label="Upload Resume"
                                    value={formDataJob.resumeFile || ''}
                                    onChange={handleJobChange}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* ACTION BUTTONS */}
                    <div className="d-flex gap-3 justify-content-end">

                        <Button
                            btnName="Reset Form"
                            classNameBtn="btn-gray-small px-4 py-2"
                            onClick={
                                activeTab === "contact" ? resetContact : resetJob
                            }
                        />

                        <Button
                            type="submit"
                            btnName={activeTab === "contact" ? "Send Inquiry" : "Submit Application"}
                            classNameBtn="btn-purle-small px-4 py-2"
                        />
                    </div>
                </form>
            </div>

            <ScrollToTopBtn />
        </Section>
    );
}