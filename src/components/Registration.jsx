import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', {
            firstName,
            lastName,
            mobile,
            email,
        });
        // Add your registration logic here
    };

    return (
        <div>
            <Header />
            <div className='container-fuild'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='section'>
                                <h1 className='mt-5 fw-bold'>Hire top talent in 48 hours with apna.</h1>
                                <p className='text-muted'>Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.</p>
                                <div className='mt-3'>
                                    <a href="https://www.youtube.com/embed/wLk2xRzhbjk" className='text-decoration-none'>
                                        <h4 className='text-primary'>
                                            <i className="fa-solid fa-circle-play me-2"></i>Watch Video
                                        </h4>
                                    </a>
                                </div>
                                <hr className='mt-5' />
                                <div className='row mt-5 text-center'>
                                    <div className='col'>
                                        <h4 className='fw-bold'>6 Crores+</h4>
                                        <p className='text-muted'>Job Seekers</p>
                                    </div>
                                    <div className='col'>
                                        <h4 className='fw-bold'>7 Lakhs+</h4>
                                        <p className='text-muted'>Employers</p>
                                    </div>
                                    <div className='col'>
                                        <h4 className='fw-bold'>900+</h4>
                                        <p className='text-muted'>Cities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='section d-flex mt-5 justify-content-center align-items-center'>
                                <div className='card shadow-lg p-4 bg-body rounded' style={{ width: '35rem' }}>
                                    <div className='card-body'>
                                        <form>
                                            <h3 className='text-start fw-bold'>Let’s get started</h3>
                                            <p className='text-muted'>Hire top talent faster with apna</p>
                                            <div className="mb-3">
                                                <label htmlFor="mobile" className="form-label fw-bold">Mobile Number</label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="mobile"
                                                    placeholder='Enter 10 digit mobile number'
                                                    maxLength="10"
                                                />
                                            </div>
                                            <button type="submit" className='btn btn-success w-100'>Continue</button>
                                        </form>
                                        <div className='text-center my-3'>
                                            <p className='text-muted'>______ or ______</p>
                                        </div>
                                        <div className='text-center'>
                                            <a href="#" className='text-decoration-none text-primary'>Click here for Recruiter  login</a>
                                            <p className='mt-3 text-muted'>
                                                By clicking continue, you agree to the apna
                                                <a href="#" className='text-decoration-none text-primary'> Terms of Service</a> &
                                                <a href="#" className='text-decoration-none text-primary'> Privacy Policy</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <Footer />
            </div>
        </div>

    );
};

export default Register;