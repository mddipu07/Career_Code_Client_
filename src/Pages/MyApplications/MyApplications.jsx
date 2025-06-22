import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationLIst from './ApplicationLIst';
import useAuth from '../../Hooks/useAuth';
import { myApplicationPromise } from '../../API/ApplicationAPi';



const MyApplications = () => {
    const { user } = useAuth();
    const myapplication = myApplicationPromise(user?.email)
    
 
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading '}>
                <ApplicationLIst
                myapplication={myapplication}
                >

                </ApplicationLIst>
            </Suspense>
        </div>
    );
};

export default MyApplications;