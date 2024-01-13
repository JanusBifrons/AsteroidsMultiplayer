'use client'
import { TextField } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TextField label="Your name"></TextField>
      <TextField label="Enter email"></TextField>
      <TextField label="Your address"></TextField>
    </main>
  )
}
