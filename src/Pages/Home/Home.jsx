import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
const jobsPromise = fetch('https://career-code-server-mocha.vercel.app/jobs').then(res => res.json())
const Home = () => {

    return (
        <div>
            <Banner></Banner>
           <Suspense fallback={'loading hot jobs'}>
             <HotJobs jobsPromise={jobsPromise}></HotJobs>
           </Suspense>
        </div>
    );
};

export default Home;