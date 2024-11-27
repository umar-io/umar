import React from "react";
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Contact: React.FC = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleNext = () => {
        const currentValue = steps[currentStep].value
        if (!currentValue) {
            const errorMessage = `Please enter your ${steps[currentStep].name}`;
            setError(errorMessage)
            console.log(error)
        } else {
            setError("")
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    }



    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const steps = [
        {
            id: '1',
            label: 'name',
            type: 'text',
            name: 'fullname',
            value: formData.fullname,
            placeholder: 'Please enter your name'
        },
        {
            id: '2',
            label: 'email',
            type: 'email',
            name: 'email',
            value: formData.email,
            placeholder: 'please enter your email'
        },
        {
            id: '3',
            label: 'subject',
            type: 'text',
            name: 'subject',
            value: formData.subject,
            placeholder: 'Enter your Subject'
        },
        {
            id: '4',
            label: 'Message',
            type: 'textarea',
            name: 'message',
            value: formData.message,
            placeholder: 'Hey ..... i need you to collaborate'
        }
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        const serviceId = import.meta.env.VITE_SERVICE_ID
        const templateId = import.meta.env.VITE_TEMPLATE_ID
        const userId = import.meta.env.VITE_USER_ID
        emailjs.send(serviceId, templateId, formData, userId)
            .then((response) => {
                setCurrentStep(0)
                setSuccess(response.text);
                setError('');
                setFormData({ fullname: '', email: '', subject: '', message: '' });
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                setError('Failed to send email. Please try again later.');
                setSuccess('');
            });
    }
    return (
        <motion.section id="contact" className="w-full flex lg:flex-row flex-col justify-between items-center gap-8 lg:py-8 lg:px-8 md:py-5 md:px-5 py-3 px-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }} 
            transition={{ duration: 1 }}
        >
            {
                success && (
                    toast.success(`${success},  message sent typically gets response within few minutes!`)
                )
            }
            <article className="lg:w-1/2 w-full">
                <h3 className="lg:text-4xl text-2xl font-[700]">Want to get in touch</h3>
                <p>I'd love to hear what you're working and i would like to see how to contribute </p>
            </article>
            <aside className="lg:w-1/2 w-full">
                <form onSubmit={handleSubmit}>
                    <div className="form-step">
                        <label htmlFor={steps[currentStep].id}>{steps[currentStep].label}:</label>
                        {steps[currentStep].type === 'textarea' ? (
                            <>
                                <textarea
                                    id={steps[currentStep].id}
                                    name={steps[currentStep].name}
                                    value={steps[currentStep].value}
                                    onChange={handleChange}
                                    required
                                    rows={3} // you can adjust the number of rows
                                    placeholder={steps[currentStep].placeholder}
                                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                                {error && <div className="text-red-500 text-[12px] mt-0 mb-[2px]">{error}</div>}
                            </>
                        ) : (
                            <>
                                <input
                                    type={steps[currentStep].type}
                                    id={steps[currentStep].id}
                                    name={steps[currentStep].name}
                                    value={steps[currentStep].value}
                                    onChange={handleChange}
                                    placeholder={steps[currentStep].placeholder}
                                    required
                                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                                {error && <div className="text-red-500 text-[12px] mt-0 mb-[2px]">{error}</div>}
                            </>
                        )}
                    </div>
                    {
                        currentStep === 3 ? (
                            <div className="w-full">
                                <motion.button type="submit" className="btn bg-black text-white py-2 px-4 w-full" onClick={handleSubmit}
                                    whileHover={{ scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    whileTap={{ scale: 1.1 }}
                                >
                                    Send
                                </motion.button>
                            </div>
                        ) : (
                            <div className="flex justify-between pb-4 w-full gap-3">
                                <motion.button
                                    type="button"
                                    className={`btn bg-black text-white py-2 px-4 w-1/2`}
                                    onClick={handlePrev}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: currentStep ? 1 : 0,
                                        scale: currentStep ? 1 : 0.9
                                    }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    whileHover={{ scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    whileTap={{ scale: 1.1 }}
                                >
                                    Prev
                                </motion.button>
                                <motion.button type="button" className="btn bg-black text-white py-2 px-4 w-1/2" onClick={handleNext}
                                    whileHover={{ scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    whileTap={{ scale: 1.1 }}
                                >
                                    Next
                                </motion.button>
                            </div>
                        )
                    }
                </form>
                <ToastContainer />
            </aside>
        </motion.section>
    )
}

export default Contact