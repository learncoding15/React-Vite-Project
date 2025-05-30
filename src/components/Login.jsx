import React from 'react'

const Index = () => {
return (
    <div>
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 p-5 d-flex'>
                    <div className='section'>
                        <h1 className='mt-5 fw-bold'>Hire top talent in 48 hours with apna.</h1>
                        <p className='text-muted'>Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.</p>
                        <div className='mt-3'>
                            <a href="https://www.youtube.com/embed/wLk2xRzhbjk" className='text-decoration-none'>
                                <h4 className='text-primary'>
                                    <i className="fa-regular fa-circle-play mx-2"></i>Watch Video
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
                <div className='col-lg-6 col-md-6 col-sm-12 p-2'  style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
                    <div className='section d-flex mt-5 justify-content-center align-items-center'>
                        <div className='card shadow-lg p-4 bg-body rounded' style={{ width: '30rem' }}>
                            <div className='card-body'>
                                <form>
                                    <h3 className='text-start fw-bold'>Let’s get started</h3>
                                    <p className='text-muted mt-3'>Hire top talent faster with Worker</p>
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
                                    <button type="submit" className='btn btn-success w-100 mt-2'>Send OTP</button>
                                </form>
                                <div className='text-center my-3'>
                                    <p className='text-muted'>______ or ______</p>
                                </div>
                                <div className='text-center'>
                                    <a href="/recruiterLogin" className='text-decoration-none text-primary'>Click here for Recruiter login</a>
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
);
}

export default Index

