import React,{useState} from "react";

const Multipleinputs = () => {
    //! State for Each Input Field
    
    const[formData,setFormData]=useState
    ({
        name:"",
        email:"",
        password:"",
        age:"",
        gender:"",
        acceptedTerms:false,
        favoritefruits:"",
        comment:""
    });
    

    //!genaric Handlers
    const handleChange=(e)=>{

        const {name,value,type,checked}=e.target;
        //update the state
        return(
        setFormData((prevData)=>({
            ...prevData,
            [name]:type==="checkbox"?checked:value
        }))
    )
    }
    

    //handleSubmit
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form</h2>
      <div>
        <label>
          Name:
          <input
          name="name" value={formData.name} onChange={handleChange} type="text" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input
          name="email" value={formData.email} onChange={handleChange} type="email" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input
          name="password" value={formData.password} onChange={handleChange} type="password" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Age:
          <input name="age" value={formData.age} onChange={handleChange} type="number" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Gender:
          <br />
          <input name="gender" value="male" checked={formData.gender==="male"} onChange={handleChange} type="radio" />
          Male
        </label>
      </div>
      <br />
      <div>
        <label>
          <input name="gender" value="female" checked={formData.gender==="female"} onChange={handleChange} type="radio" />
          Female
        </label>
      </div>
      <br />
      <div>
        <label>
          Favorite Food:
          <select
          name="favoritefruits" value={formData.favoritefruits} onChange={handleChange}>
            <option value="">Select</option>
            <option value="pizza" >Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
          </select>
        </label>
      </div>
      <br />
      <div>
        <input
        name="acceptedTerms" type="checkbox" checked={formData.acceptedTerms} onChange={handleChange} />I agree to the terms and conditions
      </div>
      <br />
      <div>
        <label>
         Comment:
          <textarea
          name="comment" value={formData.comment} onChange={handleChange} rows="4"/>
        </label>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Multipleinputs;
