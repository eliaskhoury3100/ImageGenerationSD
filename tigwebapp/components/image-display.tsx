"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ImageDisplayProps {
  imageUrl: string
  caption: string
  onDownload: () => void
}

export default function ImageDisplay({ imageUrl, caption, onDownload }: ImageDisplayProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Generated Image</h3>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square w-full">
            <img src={imageUrl || "/placeholder.svg"} alt={caption} className="object-cover w-full h-full" />
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={onDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </div>
  )
}

