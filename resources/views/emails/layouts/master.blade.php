<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', config('app.name', 'Bell And John'))</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
            color: #333333;
        }
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            overflow: hidden;
        }
        .header {
            background-color: #ffffff;
            color: #ffffff;
            padding: 25px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
            line-height: 1.6;
        }
        .content h2 {
            color: #2b9346;
            margin-top: 0;
        }
        .footer {
            background-color: #f8f9fa;
            color: #777777;
            text-align: center;
            padding: 20px;
            font-size: 13px;
        }
        .button {
            display: inline-block;
            background-color: #2b9346;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px 0;
        }
        .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2b9346;
            padding: 15px;
            margin: 20px 0;
        }
        .info-row {
            margin-bottom: 8px;
        }
        .info-label {
            font-weight: bold;
            display: inline-block;
            width: 130px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="{{ asset('img/logo/primary-logo.png') }}" alt="{{ config('app.name', 'Bell And John') }}" style="max-width: 150px; margin-top: 10px;">
        </div>

        <!-- Content -->
        <div class="content">
            @yield('content')

            <p>Best Regards,<br>{{ config('app.name', 'Bell And John') }}</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>&copy; {{ date('Y') }} {{ config('app.name', 'Bell And John') }}. All rights reserved.</p>
            <p>If you have any questions, please contact our support team.</p>
        </div>
    </div>
</body>
</html>
