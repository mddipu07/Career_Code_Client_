import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationLIst = ({myApplicationPromise}) => {
        const applications = use(myApplicationPromise);
        console.log(applications);
    return (
        <div>
            <h3 className='text-3xl'>Jobs Applied So Far: {applications.length}</h3>

   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        applications.map((application , index) => <JobApplicationRow index={index} key={application._id} application={application}></JobApplicationRow>)
     }
 
  
     
    </tbody>

  </table>
</div>


        </div>
    );
};

export default ApplicationLIst;