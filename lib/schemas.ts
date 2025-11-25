import { z } from "zod"

export const copyTypeSchema = z.enum([
    "email",
    "website",
    "ad",
    "social",
    "product",
    "resume",
    "essay",
    "text",
    "other",
])



export const copyBriefSchema = z.object({
    type: copyTypeSchema,
    audience: z.string().min(2, "Audience is required"),
    goal: z.string().min(5, "Please describe the goal"),
    context: z.string().optional(),
    tone: z.object({
        formal: z.number().min(1).max(10),
        direct: z.number().min(1).max(10),
        emotional: z.number().min(1).max(10),
    }),
    constraints: z.array(z.string()),
})

export type CopyBrief = z.infer<typeof copyBriefSchema>
