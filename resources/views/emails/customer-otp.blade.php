<!DOCTYPE html>
<html>
<head>
    <title>Password Reset OTP</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #004d99; margin-bottom: 20px;">Password Reset Verification</h2>
        <p>Hello,</p>
        <p>You recently requested to reset your password. Please use the following 6-digit verification code to proceed. This code is valid for 10 minutes.</p>
        
        <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 24px; font-weight: bold; font-family: monospace; padding: 15px 25px; background: #f0f7ff; border: 2px dashed #004d99; border-radius: 8px; color: #004d99; letter-spacing: 5px;">{{ $code }}</span>
        </div>
        
        <p>If you did not request a password reset, you can safely ignore this email.</p>
        
        <p style="margin-top: 40px; font-size: 14px; color: #666;">Best regards,<br>The Bell & John Team</p>
    </div>
</body>
</html>
