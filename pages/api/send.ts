import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_EMAIL;
const toEmail = process.env.RESEND_TO_EMAIL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        // Get form data from request body
        const { name, email, message } = req.body;

        // Validate form data
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        if (!fromEmail) {
            return res.status(500).json({ error: 'Server configuration error: Missing sender email' });
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: `Contact Form <${fromEmail}>`,
            to: [toEmail],
            subject: `New Contact Form: ${name}`,
            reply_to: email,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            console.error('Resend API error:', error);
            return res.status(400).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}