"use client"

import { useState } from "react"
import { GraduationCap, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field"

const grades = [
  "Nursery","LKG","UKG","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10",
]

interface FormData {
  studentName: string
  parentName: string
  phone: string
  email: string
  grade: string
  message: string
}

interface FormErrors {
  studentName?: string
  parentName?: string
  phone?: string
  email?: string
  grade?: string
}

export function AdmissionForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required"
    if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) newErrors.phone = "Please enter a valid phone number"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address"
    if (!formData.grade) newErrors.grade = "Please select a grade"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      setIsSubmitted(true)
      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        grade: "",
        message: "",
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="admissions" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              <span>New Admissions Open</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Admission Inquiry
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Interested in enrolling your child? Fill out the form below and our admissions team will get in touch with you.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Admission Query Form</CardTitle>
              <CardDescription>Please provide the following details for admission inquiry</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted && (
                <div className="mb-6 rounded-lg bg-primary/10 p-4 text-center text-primary">
                  Thank you for your inquiry! We will contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field data-invalid={!!errors.studentName}>
                    <FieldLabel htmlFor="studentName">Student Name *</FieldLabel>
                    <Input
                      id="studentName"
                      placeholder="Enter student's full name"
                      value={formData.studentName}
                      onChange={e => handleChange("studentName", e.target.value)}
                    />
                    {errors.studentName && <FieldError>{errors.studentName}</FieldError>}
                  </Field>

                  <Field data-invalid={!!errors.parentName}>
                    <FieldLabel htmlFor="parentName">Parent/Guardian Name *</FieldLabel>
                    <Input
                      id="parentName"
                      placeholder="Enter parent/guardian name"
                      value={formData.parentName}
                      onChange={e => handleChange("parentName", e.target.value)}
                    />
                    {errors.parentName && <FieldError>{errors.parentName}</FieldError>}
                  </Field>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field data-invalid={!!errors.phone}>
                      <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={e => handleChange("phone", e.target.value)}
                      />
                      {errors.phone && <FieldError>{errors.phone}</FieldError>}
                    </Field>

                    <Field data-invalid={!!errors.email}>
                      <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={e => handleChange("email", e.target.value)}
                      />
                      {errors.email && <FieldError>{errors.email}</FieldError>}
                    </Field>
                  </div>

                  <Field data-invalid={!!errors.grade}>
                    <FieldLabel>Grade Applying For *</FieldLabel>
                    <Select value={formData.grade} onValueChange={val => handleChange("grade", val)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map(grade => (
                          <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.grade && <FieldError>{errors.grade}</FieldError>}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Additional Message</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="Any specific questions or information you'd like to share..."
                      rows={4}
                      value={formData.message}
                      onChange={e => handleChange("message", e.target.value)}
                    />
                  </Field>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}