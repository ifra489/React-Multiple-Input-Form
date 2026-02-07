import React,{useState} from "react";

const Multipleinputs = () => {
    //! State for Each Input Field
    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[acceptedTerms,setAcceptedTerms]=useState(false);
    const[favoritefruits,setFavoriteFruits]=useState("");
    const[comment,setComment]=useState("");

    //!Separate Handlers
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleAgeChange=(e)=>{
        setAge(e.target.value);
    }
    const handleGenderChange=(e)=>{
setGender(e.target.value);
    }
    const handleAcceptedTermsChange=(e)=>{
        setAcceptedTerms(e.target.checked);
    }
    const handleFavoriteFruitsChange=(e)=>{
        setFavoriteFruits(e.target.value);
    }
    const handleCommentChange=(e)=>{
        setComment(e.target.value);
    }

    //handleSubmit
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({name,email,password,age,gender,acceptedTerms,favoritefruits,comment});
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form</h2>
      <div>
        <label>
          Name:
          <input value={name} onChange={handleNameChange} type="text" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Email:
          <input value={email} onChange={handleEmailChange} type="email" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input value={password} onChange={handlePasswordChange} type="password" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Age:
          <input value={age} onChange={handleAgeChange} type="number" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Gender:
          <br />
          <input value="male" checked={gender==="male"} onChange={handleGenderChange} type="radio" />
          Male
        </label>
      </div>
      <br />
      <div>
        <label>
          <input value="female" checked={gender==="female"} onChange={handleGenderChange} type="radio" />
          Female
        </label>
      </div>
      <br />
      <div>
        <label>
          Favorite Food:
          <select value={favoritefruits} onChange={handleFavoriteFruitsChange}>
            <option value="">Select</option>
            <option value="pizza" >Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
          </select>
        </label>
      </div>
      <br />
      <div>
        <input type="checkbox" value={acceptedTerms}  onChange={handleAcceptedTermsChange} />I agree to the terms and conditions
      </div>
      <br />
      <div>
        <label>
         Comment:
          <textarea value={comment} onChange={handleCommentChange} rows="4"/>
        </label>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Multipleinputs;
