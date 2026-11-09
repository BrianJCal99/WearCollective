import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Sender address. It must be on a domain verified in Resend; override with RESEND_FROM_EMAIL.
const FROM_EMAIL =
    process.env.RESEND_FROM_EMAIL || 'WEARCOLLECTIVE <wearcollective@mail.wearcollective.store>';

export async function POST(req) {
    try {
        const { email, userName } = await req.json();

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (!userName) {
            return new Response(JSON.stringify({ error: 'Your name is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [email],
            subject: `Hi ${userName}, Welcome to Our Style Community 👋`,
            template: {
                id: 'welcome-email',
                variables: {
                    USER_NAME: userName,
                },
            },
        });

        if (error) {
            console.error('Resend Error:', error);
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Request Error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
