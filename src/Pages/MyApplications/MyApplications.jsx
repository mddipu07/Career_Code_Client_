import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationLIst from './ApplicationLIst';
import useAuth from '../../Hooks/useAuth';
import useApplicationAPi from '../../API/useApplicationAPi';




const MyApplications = () => {
    const { user } = useAuth();
   
  const {myApplicationPromise} = useApplicationAPi()
 
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading '}>
                <ApplicationLIst
                myApplicationPromise={myApplicationPromise(user.email , user.accessToken)}
                >

                </ApplicationLIst>
            </Suspense>
        </div>
    );
};

export default MyApplications;