import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import AnimatedButton from '@/components/AnimatedButton'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg }
            })
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg }
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                handleServerResponse(true, 'Thank you for your message! I will get back to you soon.')
            } else {
                handleServerResponse(false, data.error || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            handleServerResponse(false, 'An error occurred. Please try again later.')
        }
    }

    return (
        <div>
            <Head>
            <title>About Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
            </Head>
            <div className={styles.contactOuterContainer}>
                <div className={styles.contactInnerContainer}>
                    <div className={styles.mascotContainer}>
                        <img src='/images/mascot.gif' alt='Mascot' className={styles.mascot} />
                    </div>
                    <div>
                        <h2>Let’s Connect!</h2>
                        {status.submitted ? (
                            <div className={styles.successMessage}>
                                <p>{status.info.msg}</p>
                            </div>
                        ) : (
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <input 
                                    type='text' 
                                    id='name' 
                                    name='name' 
                                    placeholder='Full Name *' 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input 
                                    type='email' 
                                    id='email' 
                                    name='email' 
                                    placeholder='Email *' 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea 
                                    id='message' 
                                    name='message' 
                                    placeholder='Message *'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <AnimatedButton 
                                    type='submit'
                                    disabled={status.submitting}
                                >
                                    <h3>{status.submitting ? 'Sending...' : 'Submit'}</h3>
                                </AnimatedButton>
                                {status.info.error && (
                                    <div className={styles.errorMessage}>
                                        <p>{status.info.msg}</p>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
        )
}