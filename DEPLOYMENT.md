# Deployment Guide & Subdomain Setup

This Next.js 15 landing page is production-ready and optimized for deployment on **Vercel**.

---

## 1. Deploying to Vercel

1. Push this project folder to your GitHub repository (e.g., `github.com/your-username/bootcamp`).
2. Log in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** > **Project** and select your GitHub repository.
4. Keep the default configuration:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **Deploy**. Vercel will build and deploy your application in under a minute.

---

## 2. Configuring Your Custom Subdomain

To route **learn.bighabeshashop.com** or **bootcamp.bighabeshashop.com** to your newly deployed Vercel project, follow these instructions:

### Step 1: Add Domain in Vercel
1. In the Vercel dashboard, navigate to your project settings.
2. Select **Domains** in the left sidebar.
3. In the input box, enter your desired subdomain (e.g., `learn.bighabeshashop.com` or `bootcamp.bighabeshashop.com`) and click **Add**.
4. Vercel will show that the domain configuration is pending and show the DNS records required.

### Step 2: Configure DNS Settings with Your Domain Registrar
Log in to the dashboard of your domain registrar (where you bought `bighabeshashop.com`, e.g., GoDaddy, Namecheap, Cloudflare, or Route 53) and add the following record:

| Record Type | Host / Name | Value / Destination | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `learn` (or `bootcamp`) | `cname.vercel-dns.com.` | Auto / 1 Hour |

> [!IMPORTANT]
> - **Host**: If your DNS registrar requires a fully qualified domain, enter `learn.bighabeshashop.com.`. Otherwise, just enter `learn`.
> - **Trailing Dot**: Some DNS registrars require a trailing dot at the end of the Vercel CNAME value: `cname.vercel-dns.com.`.

Once saved, it may take anywhere from 2 minutes to 2 hours for the DNS changes to propagate globally. Vercel will automatically generate an SSL certificate for your subdomain as soon as the configuration is detected.

---

## 3. Form Submissions & Next Steps

Currently, the form simulates a database submission, verifies inputs, and transitions to a premium success screen. 

To convert this mock action into a live database or email alert, you can expand the client form handler in [RegistrationForm.tsx](file:///c:/Users/big%20Desktop/OneDrive/Desktop/Bootcamp/src/components/RegistrationForm.tsx):
- Connect it to a serverless API endpoint in Next.js (e.g. `src/app/api/register/route.ts`).
- Integrate a database service like **Supabase**, **Vercel Postgres**, or send notifications directly to your email or Telegram Bot API when a student registers.
