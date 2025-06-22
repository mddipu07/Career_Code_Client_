import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const {user} = useAuth();
    const handleAddJob = e =>{
         e.preventDefault();
         const form = e.target;
         const formData = new FormData(form);

         const data = Object.fromEntries(formData.entries());
        //  process salary range data

         const {min,max, currency, ...newJob} = data;
         newJob.salaryRange ={
            min,max,currency
         }

        //  process requirements
        const requirementString = newJob.requirements;
         
        const requirementsDirty = requirementString.split(',')
       const requirementClean = requirementsDirty.map(req => req.trim());
       newJob.requirements = requirementClean;

        //  process responsibilities
        const responsibilitiesString = newJob.responsibilities;
        const responsibilitiesDirty = responsibilitiesString.split(',')
        const responsibilitiesClean = responsibilitiesDirty.map(res => res.trim())
        newJob.responsibilities = responsibilitiesClean
         
        console.log(newJob);

        // save job to the database
        axios.post('http://localhost:3000/jobs',newJob)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
         position: "top-end",
           icon: "success",
          title: "This new Job Job has been saved published",
          showConfirmButton: false,
          timer: 1500
         });
          }
        }).catch(error =>{
          console.log(error);
        })
    }



    return (
    <div>
  <h2>Please Add A JOb</h2>
  <form onSubmit={handleAddJob}>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Basic Info</legend>

  <label className="label">Title</label>
  <input type="text" name='title' className="input" placeholder="Job Title" />

  <label className="label">Company</label>
  <input type="text" name='compnay' className="input" placeholder="Compnay Name" />

  <label className="label">Location</label>
  <input type="text" name='location' className="input" placeholder="Compnay Location" />

  <label className="label">Compnay Logo</label>
  <input type="text" name='compnay_Logo' className="input" placeholder="Compnay logo URL" />
</fieldset>


{/* JOb Type */}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Job Type</legend>
  <div className="filter">
  <input className="btn filter-reset" type="radio" name="jobType" aria-label="All"/>
  <input className="btn" type="radio"value="onsite" name="jobType" aria-label="On-Site"/>
  <input className="btn" type="radio" value="remote" name="jobType" aria-label="Remote"/>
  <input className="btn" type="radio" value="hybrid" name="jobType" aria-label="Hybrid"/>
</div>
  
</fieldset>
{/* Job Category */}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Job Category</legend>
  <select defaultValue="Job Category" className="select" name='category'>
  <option disabled={true}>Job Category</option>
  <option>Engineering</option>
  <option>Marketing</option>
  <option>Finance</option>
</select>
</fieldset>
{/* Application Deadline */}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Application Deadline</legend>
 <input type="date" name='deadline' className="input" />
</fieldset>
  

{/* Salary Range */}

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Salary Range</legend>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
    
 <div>
     <label className="label">Minimum Salary</label>
  <input name='min' type="text" className="input" placeholder="Minimum Salary" />
 </div>

 <div>
  <label className="label">Maximum Salary</label>
  <input type="text" name='max' className="input" placeholder="Maximum Salary" />
 </div>

<div>
      <label className="label">Currency</label>
 <select defaultValue="Job Category" className="select" name='currency'>
  <option disabled={true}>Select A Currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>EU</option>
</select>
</div>
</div>
</fieldset>




  {/*  Job Description*/}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Job Description</legend>
     <textarea name='description' className="textarea" placeholder="Job Description"></textarea>
</fieldset>
  {/*  Job RequireMents*/}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Job Requirements</legend>
     <textarea name='requirements' className="textarea" placeholder="requirements (separate by comma"></textarea>
</fieldset>
  {/*  Job Responsibilities*/}

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">Job responsibilities</legend>
     <textarea name='responsibilities' className="textarea" placeholder="responsibilities (separate by comma"></textarea>
</fieldset>

 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <legend className="fieldset-legend">HR RelatedInfo</legend>

  <label className="label">HR Name</label>
  <input type="text" name='hr_name' className="input" placeholder="Hr Name" />

  <label className="label">Hr Email</label>
  <input type="email" name='hr_email' defaultValue={user.email}  className="input" placeholder="Hr Email" />
</fieldset>
<input type="submit" className='btn' value="Add Job" />

</form>
</div>
    );
};

export default AddJob;