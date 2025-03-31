export async function generateImage(caption: string): Promise<string> {
  // In a real implementation, this would call your API that connects to Stable Diffusion
  // For now, we'll simulate a delay and return a placeholder

  console.log(`Generating image for caption: ${caption}`);
  // the link changes every time I run the colab !
  const response = await fetch("https://af03-34-125-163-86.ngrok-free.app/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ caption }),
  });

  const data = await response.json();
  console.log(data);

  if (!data.success) {
    throw new Error("Image generation failed");
  }

  return data.image; // This is already in base64 format with prefix

  // Simulate API call delay
  //await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real implementation, you would:
  // 1. Send the caption to your backend API
  // 2. The backend would run Stable Diffusion (either directly or via Colab)
  // 3. Return the generated image URL or base64 data

  // For demonstration, return a placeholder image
  // In production, this would be the URL to your generated image
  //return `/placeholder.svg?height=512&width=512`
}

