# EmailJS Setup Instructions

To make your contact form work, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and copy the **Template ID**

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## 5. Configure Environment Variables
Create a `.env` file in your project root with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test Your Form
1. Restart your development server: `npm start`
2. Fill out and submit the contact form
3. Check your email for the message

## Alternative: Quick Test Setup
If you want to test immediately, you can temporarily replace the values directly in the ContactSection.js file:

```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id'; 
const publicKey = 'your_actual_public_key';
```

**Note:** Remember to use environment variables for production!

## Troubleshooting
- Make sure your EmailJS service is active
- Check that your template variables match the ones used in the code
- Verify your public key is correct
- Check browser console for any error messages
