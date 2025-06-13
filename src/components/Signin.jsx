import React from 'react';
import { Link } from 'react-router';
import useAllContext from '../hooks/useAllContext';
import Swal from 'sweetalert2';

const Signin = () => {
    const { signInWithEmail, signUpWithGoogle } = useAllContext()
    
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const passoword = e.target.password.value;

        signInWithEmail(email, passoword)
        .then(data => {
            if(data) {
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleGoogle = () => {
        signUpWithGoogle()
        .then(res => res.json())
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    return (
        <div className='m-12 flex max-sm:flex-col'>
            <div className='w-1/2 max-sm:w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.89),rgba(255,255,255,0.53),rgba(255,255,255,0.89)),url("home-bg.jpg")] bg-cover flex flex-col items-center bg-no-repeat bg-[0px_-70px] max-sm:bg-[0px_-15px] pt-20 max-sm:pt-0'>
                <img src="logo.png" className='h-1/2 w-max' alt="" />
                <p className='text-4xl max-sm:text-3xl text-[#15c39a] max-sm:bg-[#ffffff72] bg-white font-bold relative -top-4 max-sm:text-center'>Fill out the form to Sign Up</p>
            </div>
            
                <div className='flex flex-col w-1/2 max-sm:w-full'>
                <form onSubmit={handleSubmit} className="fieldset border-gray-300 border-2 h-max rounded-box w-full p-4 mt-25">
                    <legend className="fieldset-legend text-2xl text-[#302c78]">Sign In</legend>

                    <label className="label text-[#302c78] text-lg">Email</label>
                    <input name='email' type="email" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Email" />

                    <label className="label text-[#302c78] text-lg">Password</label>
                    <input name='password' type="password" className="input w-full focus:outline-2 focus:outline-offset-0 focus:outline-[#302c78] duration-100 ease-in-out" placeholder="Password" />

                    <button className="btn bg-[#ffbf33] mt-4 text-[#302c78]">Sign In</button>
                </form>
                <p className='text-[#302c78] ml-2 mt-2'>Don't have an account? <Link className='font-semibold underline underline-offset-2' to={"/signup"}>Register now!</Link></p>
                <div className="divider divider-neutral">OR</div>
                <button onClick={handleGoogle} className="btn bg-white text-black border-[#bababa]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Sign In with Google
                </button>
                
                </div>

        </div>
    );
};

export default Signin;