import React, { useEffect, useRef, useState } from "react";

const Register = ({ updateData, id }) => {
  const [formData, setFormData] = useState(null);

    const form = useRef()
  // console.log('iddd', id)

//   useEffect(() => {
//     setFormData({ ...formData, id });
//   }, [id]);


//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

  const submit = (e) => {
    e.preventDefault();
    const login = form.current.login.value;
    const id = form.current.id.value;
    setFormData(()=>{
        return({login, id})
    })

    // updateData(formData);
    // setFormData({ login: "", id: "" });
  };
//   console.log(formData, "nameeee")
    //  updateData(formData);

useEffect(()=>{
  console.log(formData, "nameeee")

    formData && updateData(formData)
},[formData])

  return (
    <div>
      <div className="card">
        <h2 className=" card-title text-center">Register</h2>
        <div className="card-body py-md-4">
          {/* <form onSubmit={submit}>
        <div className='form-group'>
                <input type="text"
                placeholder='Name'
                className='form-control'
                name='login'
                value={formData.login}
                onChange={handleInput} />
            </div>

            <div className='form-group'>
                <input type="text"
                placeholder='id'
                className='form-control'
                name='id'
                value={formData.id}
                onChange={handleInput} />
            </div>
            <button>Submit</button>
        </form> */}

          <form onSubmit={submit} ref={form}>
            <div className="form-group">
              <input type="text" placeholder="Name" name="login" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="id" name="id"/>
            </div>
            <button>Submit</button>
          </form>
          {/* <p>{`My name is ${formData.login} and ID is ${formData.id}`}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
