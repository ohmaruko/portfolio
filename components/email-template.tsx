import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
        <h1 style={{ color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>New Contact Form Submission</h1>
        <div style={{ marginBottom: '20px' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
        <div style={{ background: '#f8f8f8', padding: '15px', borderRadius: '4px' }}>
            <h2 style={{ fontSize: '18px', marginTop: '0', color: '#555' }}>Message:</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>
    </div>
);