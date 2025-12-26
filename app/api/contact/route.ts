import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // 1. Extract Core Fields (Present in both footer and main contact form)
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    
    // 2. Extract Extended Fields (Present in main contact form)
    const name = formData.get('name') as string || 'N/A';
    const message = formData.get('message') as string || 'No message provided';
    
    // 3. Extract Dynamic Service-Specific Fields
    const datesStart = formData.get('dates_start') as string;
    const datesEnd = formData.get('dates_end') as string; 
    const subject = formData.get('subject') as string || 'N/A';
    const grade = formData.get('grade') as string || 'N/A';
    const combinedDates = datesStart && datesEnd ? `${datesStart} to ${datesEnd}` : formData.get('dates') as string || 'N/A';
    const location = formData.get('location') as string || 'N/A';

    // 4. Basic Validation
    if (!email) {
      return NextResponse.json({ error: 'No email provided' }, { status: 400 });
    }

    // 5. Send to MailerLite
    const mailerResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILER_LITE_API}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        fields: { 
          name,
          service, 
          message,
          subject_interest: subject,
          student_grade: grade,
          travel_dates: combinedDates,
          location_pets: location,
          // Source helps you see exactly which form they used
          source: name !== 'N/A' ? 'jackepner.com contact page' : 'jackepner.com footer'
        },
        groups: [process.env.MAILER_LITE_GROUP]
      }),
    });

    // 6. Return Response
    if (mailerResponse.ok) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Failed to submit to MailerLite' }, { status: 500 });

  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}