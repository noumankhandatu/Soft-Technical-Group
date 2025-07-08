import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create transporter (you'll need to configure with your email provider)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // your email password or app password
  },
});

// HTML template for user confirmation email
const getUserEmailTemplate = (firstName: string, lastName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - STG</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #F0803C, #ff9500);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 24px;
            color: #F0803C;
            margin-bottom: 15px;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 24px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 20px;
        }
        .message {
            font-size: 16px;
            line-height: 1.8;
            color: #555;
            margin-bottom: 25px;
        }
        .highlight-box {
            background: #fff5f0;
            border-left: 4px solid #F0803C;
            padding: 20px;
            margin: 25px 0;
            border-radius: 0 8px 8px 0;
        }
        .contact-info {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            font-size: 14px;
        }
        .contact-icon {
            width: 20px;
            height: 20px;
            background: #F0803C;
            border-radius: 50%;
            margin-right: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
        }
        .footer {
            background: #2c3e50;
            color: white;
            padding: 25px;
            text-align: center;
            font-size: 14px;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #F0803C;
            text-decoration: none;
            font-weight: 500;
        }
        .btn {
            display: inline-block;
            background: #F0803C;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
  <img src="https://res.cloudinary.com/noumancloud/image/upload/v1751998534/newlogo_ohpnci.png" alt="STG Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            <h1 style="margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Soft Technical Group</p>
        </div>
        
        <div class="content">
            <div class="greeting">Hello ${firstName} ${lastName}!</div>
            
            <div class="message">
                Thank you for reaching out to <strong>Soft Technical Group (STG)</strong>. We have successfully received your message and appreciate your interest in our IT solutions and services.
            </div>
            
            <div class="highlight-box">
                <strong>🚀 What happens next?</strong><br>
                Our expert team will review your inquiry and get back to you within <strong>24 hours</strong>. We're committed to providing you with the best possible solution for your IT needs.
            </div>
            
            <div class="message">
                As the leading IT solutions provider in Gilgit-Baltistan, we specialize in:
                <ul style="margin: 15px 0; padding-left: 20px;">
                    <li>Data Center Establishment & Management</li>
                    <li>Server Customization & Installation</li>
                    <li>Network Infrastructure Solutions</li>
                    <li>24/7 Technical Support</li>
                    <li>Government & Enterprise IT Services</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h3 style="margin-top: 0; color: #F0803C;">Contact Information</h3>
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    Office #1, First Floor, GITCO Gas Company, Near City Hospital, River View Road, Gilgit
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    +92 300 9332626 | +92 300 9332626
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    info@stg.com.pk | support@stg.com.pk
                </div>
                <div class="contact-item">
                    <div class="contact-icon">🕒</div>
                    Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM
                </div>
            </div>
            
            <div style="text-align: center;">
                <a href="https://stg.com.pk" class="btn">Visit Our Website</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Soft Technical Group</strong> - Developing the future...</p>
            <p>Established 2006 | 17+ Years of Excellence | 4 Data Centers | 50+ Happy Clients</p>
            <div class="social-links">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                © 2025 Soft Technical Group. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>
`;

// HTML template for admin notification email
const getAdminEmailTemplate = (formData: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - STG</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .logo {
            width: 60px;
            height: 60px;
            background: #F0803C;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 24px;
            color: white;
            margin-bottom: 15px;
        }
        .content {
            padding: 40px 30px;
        }
        .alert {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            font-weight: 600;
        }
        .form-data {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
        }
        .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e9ecef;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .field-label {
            font-weight: 600;
            color: #F0803C;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            font-size: 16px;
            color: #2c3e50;
            word-wrap: break-word;
        }
        .priority-high {
            background: #fee;
            border-left: 4px solid #dc3545;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .timestamp {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
            font-size: 14px;
            color: #1565c0;
        }
        .footer {
            background: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
        .btn {
            display: inline-block;
            background: #F0803C;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 10px 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
  <img src="https://res.cloudinary.com/noumancloud/image/upload/v1751998534/newlogo_ohpnci.png" alt="STG Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Website Contact Form</p>
        </div>
        
        <div class="content">
            <div class="alert">
                ⚡ <strong>Action Required:</strong> A new potential client has submitted a contact form on your website.
            </div>
            
            <div class="timestamp">
                📅 <strong>Received:</strong> ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
            </div>
            
            <div class="form-data">
                <h3 style="margin-top: 0; color: #2c3e50; border-bottom: 2px solid #F0803C; padding-bottom: 10px;">
                    📋 Contact Details
                </h3>
                
                <div class="field">
                    <div class="field-label">👤 Full Name</div>
                    <div class="field-value">${formData.firstName} ${formData.lastName}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">
                        <a href="mailto:${formData.email}" style="color: #F0803C; text-decoration: none;">
                            ${formData.email}
                        </a>
                    </div>
                </div>
                
                <div class="field">
                    <div class="field-label">🏙️ City</div>
                    <div class="field-value">${formData.city}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">💬 Message</div>
                    <div class="field-value" style="background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #F0803C;">
                        "${formData.message}"
                    </div>
                </div>
            </div>
            
            <div class="priority-high">
                <strong>🎯 Recommended Actions:</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>Respond within 24 hours for best client experience</li>
                    <li>Review their city location for service availability</li>
                    <li>Prepare relevant service information based on their inquiry</li>
                    <li>Add to CRM system for follow-up tracking</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${formData.email}?subject=Re: Your Inquiry to STG&body=Dear ${formData.firstName} ${
  formData.lastName
},%0D%0A%0D%0AThank you for contacting Soft Technical Group..." class="btn">
                    📧 Reply to Client
                </a>
                <a href="tel:${formData.email}" class="btn">
                    📞 Call Client
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>STG Admin Panel</strong> - Contact Form Notifications</p>
            <p style="font-size: 12px; opacity: 0.8; margin-top: 10px;">
                This is an automated notification from your website contact form.
            </p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, city, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !city || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: {
        name: "Soft Technical Group",
        address: process.env.SMTP_USER || "info@stg.com.pk",
      },
      to: email,
      subject: "✅ Thank You for Contacting STG - We'll Be In Touch Soon!",
      html: getUserEmailTemplate(firstName, lastName),
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: {
        name: "STG Website Contact Form",
        address: process.env.SMTP_USER || "info@stg.com.pk",
      },
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER || "info@stg.com.pk",
      subject: `🔔 New Contact Form Submission from ${firstName} ${lastName} (${city})`,
      html: getAdminEmailTemplate({ firstName, lastName, email, city, message }),
    };

    // Send both emails
    await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)]);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll contact you as soon as possible.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later or contact us directly.",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
