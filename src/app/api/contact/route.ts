'use server'

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema matching the frontend
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .min(2, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  companyLocation: z
    .string()
    .min(2, "Company location is required")
    .max(100, "Company location must be less than 100 characters"),
  employeeCount: z
    .string()
    .min(1, "Please select employee count"),
  timeline: z
    .string()
    .min(1, "Please select timeline"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  inquiryType: z.enum(["hiring", "services", "compliance", "partnership"]),
})

// Helper functions for EOR lead management
function getLeadPriority(data: z.infer<typeof contactSchema>): 'high' | 'medium' | 'low' {
  if (data.inquiryType === 'hiring' && data.timeline === 'immediate') return 'high';
  if (data.employeeCount === '51+') return 'high';
  if (data.timeline === '1month') return 'medium';
  return 'low';
}

function getTeamAssignment(inquiryType: string): string {
  switch (inquiryType) {
    case 'hiring': return 'Sales Team';
    case 'services': return 'Solutions Team';
    case 'compliance': return 'Legal Team';
    case 'partnership': return 'Business Development';
    default: return 'General Support';
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.issues
        },
        { status: 400 }
      )
    }

    const { name, email, company, companyLocation, employeeCount, timeline, subject, message, inquiryType } = validationResult.data

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Send to CRM system
    // 4. Send auto-reply to user

    // For now, we'll just log the submission and return success
    // eslint-disable-next-line no-console
    console.log('EOR contact form submission:', {
      name,
      email,
      company,
      companyLocation,
      employeeCount,
      timeline,
      subject,
      message,
      inquiryType,
      timestamp: new Date().toISOString(),
      ip: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    })

    // EOR-specific lead scoring and routing
    const leadPriority = getLeadPriority(validationResult.data);
    const assignedTeam = getTeamAssignment(validationResult.data.inquiryType);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Thank you for your EOR inquiry! Our specialists will contact you within 24 hours to discuss your India expansion plans.",
      data: {
        submittedAt: new Date().toISOString(),
        inquiryType,
        subject,
        leadId: `EOR-${Date.now()}`,
        priority: leadPriority,
        assignedTeam
      }
    })

  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form submission error:', error)

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later."
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  )
}