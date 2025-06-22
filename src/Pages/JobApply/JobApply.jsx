import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id: jobId} = useParams();
    const {user} = useAuth();
    console.log(jobId, user);


    const handleApplyFormSubmit = (e) =>{
         e.preventDefault();
         const form = e.target;
         const linkedIn = form.linkedIn.value;
         const Github = form.github.value;
         const Resume = form.resume.value;
         console.log(linkedIn,Github,Resume);

         const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            Github,
            Resume
         }

         axios.post('http://localhost:3000/applications', application)
         .then(res => {
            if(res.data.insertedId){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Application has been submitted",
  showConfirmButton: false,
  timer: 1500
});
            }
         })
         .catch((error) =>{
            console.log(error);
         })
    }
    return (
        <div>
    <h3 className="text-4xl">Apply Job for </h3>
 <form onSubmit={handleApplyFormSubmit}>
 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Page details</legend>

  <label className="label">LinkedIn Link</label>
  <input type="url" name='linkedIn' className="input" placeholder="LinkedIn Profile Link" />

  <label className="label">Github Link</label>
  <input type="url" name='github' className="input" placeholder="Github Link" />

  <label className="label">Resume Link</label>
  <input type="url" name='resume'  className="input" placeholder="Resume Link" />
  <input type="submit" value="Apply" className='btn' />
</fieldset>
            </form>
        </div>
    );
};

export default JobApply;