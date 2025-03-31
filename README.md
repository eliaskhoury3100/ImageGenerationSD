
# VLM Research Image Generator
A web application for generating clean images from text captions using Stable Diffusion, designed for academic research on Vision-Language Models (VLMs).

## Overview
This project provides a tool for generating images from text captions using Stable Diffusion, specifically for educational research on trustworthy machine learning. The generated images can be used to test attack models on Vision-Language Models (VLMs) and study adversarial examples and defense mechanisms.

The application consists of:

1. Frontend: A Next.js web application with a clean, user-friendly interface.
2. Backend API: A Flask server running on Google Colab that processes image generation requests.
3. Image Generation: Stable Diffusion model for high-quality image generation from text captions.

## Features
1. **Simple Caption Input**: Enter detailed text descriptions to generate corresponding images
2. **High-Quality Image Generation**: Uses Stable Diffusion model for realistic image creation
3. **Image Download**: Save generated images for later use in research
4. **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions
### Prerequisites
- Node.js (v16+)
- Python 3.8+
- Google Colab account (for running the backend)

### Frontend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vlm-image-generator.git
    cd vlm-image-generator
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Update the API endpoint in `lib/image-generation.ts` to point to your deployed backend URL
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser


