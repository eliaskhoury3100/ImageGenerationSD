"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Download, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ImageDisplay from "@/components/image-display"
import { generateImage } from "@/lib/image-generation"

export default function Home() {
  const [caption, setCaption] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!caption.trim()) {
      setError("Please enter a caption first.")
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      const imageUrl = await generateImage(caption)
      setGeneratedImage(imageUrl)
    } catch (err) {
      setError("Failed to generate image. Please try again with a different caption.")
      console.error(err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!generatedImage) return

    const link = document.createElement("a")
    link.href = generatedImage
    link.download = `generated-image-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Image Generation for VLM Research</CardTitle>
          <CardDescription>
            Generate clean images from captions using Stable Diffusion for educational research on Vision-Language
            Models
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Educational Purpose</AlertTitle>
            <AlertDescription>
              This tool is designed for academic research on trustworthy machine learning, specifically for studying
              adversarial examples and defense mechanisms for Vision-Language Models.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <label htmlFor="caption" className="text-sm font-medium">
              Image Caption
            </label>
            <Textarea
              id="caption"
              placeholder="Enter a detailed caption for the image you want to generate..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="h-24"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {generatedImage && <ImageDisplay imageUrl={generatedImage} caption={caption} onDownload={handleDownload} />}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleGenerate} disabled={isGenerating || !caption.trim()}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Image"
            )}
          </Button>

          {generatedImage && (
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Image
            </Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}

