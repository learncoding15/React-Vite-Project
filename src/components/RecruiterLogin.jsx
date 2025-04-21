import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const RecruiterLogin = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="section p-4">
                        <h1 className="mt-5 fw-bold">Hire top talent in 48 hours with Worker.</h1>
                        <p className="text-muted">
                            Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.
                        </p>
                        <div className="mt-3">
                            <a href="https://www.youtube.com/embed/wLk2xRzhbjk" className="text-decoration-none">
                                <h5 className="text-primary">
                                    <i className="fa-solid fa-circle-play me-2"></i>Watch Video
                                </h5>
                            </a>
                        </div>
                        <hr className="mt-5" />
                        <div className="row mt-5 text-center">
                            <div className="col">
                                <h4 className="fw-bold">6 Crores+</h4>
                                <p className="text-muted">Job Seekers</p>
                            </div>
                            <div className="col">
                                <h4 className="fw-bold">7 Lakhs+</h4>
                                <p className="text-muted">Employers</p>
                            </div>
                            <div className="col">
                                <h4 className="fw-bold">900+</h4>
                                <p className="text-muted">Cities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#e6e6e6', minHeight: '100vh' }}>
                    <div className="card shadow-lg p-4 bg-body rounded" style={{ width: '100%', maxWidth: '35rem' }}>
                        <div className="card-body">
                            <form>
                                <h4 className="text-start fw-bold mt-3">Sign in with your Recruiter email</h4>
                                <div className="mb-3 mt-2">
                                    <label htmlFor="mobile" className="form-label fw-bold">Recruiter Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Enter your recruiter email"
                                        maxLength="10"
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mt-3">Continue</button>
                            </form>
                            <div className="text-center">
                                <p className="mt-3 text-muted">
                                Want to register your Recruiter email?
                                    <a href="#" className="text-decoration-none text-primary"> Contact us</a> 
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="text-muted">________________________or ______________________</p>
                            </div>
                            <div className="text-center mt-3">
                               <button className='btn btn-outline-success w-100'><i class="fa-solid fa-phone me-3"></i>Continue with mobile</button>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruiterLogin