import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../API/JobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    const jobPromise = jobsCreatedByPromise(user?.email)
    return (
        <div>
            <h2>My Posted Jobs : </h2>
            <Suspense>
                <JobList jobPromise={jobPromise}>

                </JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;