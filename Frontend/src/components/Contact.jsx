import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            phoneno: data.phoneno,
            message: data.message,
        }
        await axios.post("http://localhost:4001/contact/", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    alert("Message sent sucessfully")
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    alert("Error:" + err.response.data.message)
                }
            })
    };

    return (
        <>


            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/"
                                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                                ✕
                            </Link>


                            <h3 className="font-bold text-lg">Contact us</h3>
                            <div className='ml-5'>
                                <div className='mt-4 space-y-2 '>
                                    <span className='font-semibold'>Name</span> <br />
                                    <input
                                        type='text' placeholder='Enter your fullname'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("fullname", { required: true })}
                                    ></input>
                                    <br />
                                    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/* Email */}
                                <div className='mt-4 space-y-2'>
                                    <span className='font-semibold'>Email</span> <br />
                                    <input
                                        type='email' placeholder='Enter your Email'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("email", { required: true })}
                                    ></input>
                                    <br />
                                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>
                                {/*phone no*/}
                                <div className='mt-4 space-y-2'>
                                    <span className='font-semibold'>Phoneno</span> <br />
                                    <input
                                        type='number' placeholder='Enter your Phone no'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("phoneno", { required: true })}
                                    ></input>
                                    <br />
                                    {errors.number && <span className='text-sm text-red-500'>This field is required</span>}
                                </div>

                                {/* messages */}
                                <div className='mt-4 space-y-2'>
                                    <span className='font-semibold'>Message</span> <br />
                                    <textarea
                                        placeholder='Enter your Message'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("message", { required: "Message is required" })}
                                    />
                                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                                </div>
                                <button type="submit" className='font-semibold bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-4'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <Footer />
        </>

    );
}
