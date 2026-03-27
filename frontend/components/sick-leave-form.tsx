"use client"

import { useState } from "react"
import { Stethoscope, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field"

const grades = [
  "Nursery","LKG","UKG","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5",
  "Grade 6","Grade 7","Grade 8","Grade 9","Grade 10",
]

const formFields = [
  { name: "studentName", label: "Student Name", type: "text" },
  { name: "grade", label: "Grade", type: "select" },
  { name: "parentName", label: "Parent Name", type: "text" },
  { name: "startDate", label: "Start Date", type: "date" },
  { name: "endDate", label: "End Date", type: "date" },
  { name: "reason", label: "Reason", type: "textarea" },
]

export function SickLeaveForm() {
  const [formData, setFormData] = useState<any>({
    studentName: "",
    grade: "",
    parentName: "",
    startDate: "",
    endDate: "",
    reason: "",
  })

  const [errors, setErrors] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const err: any = {}

    if (!formData.studentName) err.studentName = "Required"
    if (!formData.grade) err.grade = "Required"
    if (!formData.parentName) err.parentName = "Required"
    if (!formData.startDate) err.startDate = "Required"
    if (!formData.endDate) err.endDate = "Required"
    if (!formData.reason) err.reason = "Required"

    if (formData.startDate && formData.endDate) {
      if (new Date(formData.endDate) < new Date(formData.startDate)) {
        err.endDate = "End date must be after start date"
      }
    }

    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/sick-leaves`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      )

      if (!res.ok) throw new Error("Failed")

      setSuccess(true)
      setFormData({
        studentName: "",
        grade: "",
        parentName: "",
        startDate: "",
        endDate: "",
        reason: "",
      })

      setTimeout(() => setSuccess(false), 4000)
    } catch (err) {
      console.error(err)
      alert("Error submitting form")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="sick-leave" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
            <Stethoscope className="h-4 w-4" />
            Student Health
          </div>

          <h2 className="text-3xl font-bold">Sick Leave Application</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sick Leave Form</CardTitle>
            <CardDescription>
              Please provide accurate details
            </CardDescription>
          </CardHeader>

          <CardContent>
            {success && (
              <div className="mb-4 bg-green-100 p-3 rounded text-center text-green-700">
                Submitted successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <FieldGroup>
                {formFields.map((field) => (
                  <Field key={field.name} data-invalid={!!errors[field.name]}>
                    <FieldLabel>{field.label}</FieldLabel>

                    {field.type === "text" && (
                      <Input
                        value={formData[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      />
                    )}

                    {field.type === "date" && (
                      <Input
                        type="date"
                        value={formData[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      />
                    )}

                    {field.type === "textarea" && (
                      <Textarea
                        value={formData[field.name]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      />
                    )}

                    {field.type === "select" && (
                      <Select
                        value={formData.grade}
                        onValueChange={(val) => handleChange("grade", val)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {errors[field.name] && (
                      <FieldError>{errors[field.name]}</FieldError>
                    )}
                  </Field>
                ))}

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}