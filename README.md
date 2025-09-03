# Student Profile Management System

একটি সম্পূর্ণ ছাত্র প্রোফাইল ম্যানেজমেন্ট সিস্টেম যা Firebase এবং ImageKit ব্যবহার করে তৈরি।

## বৈশিষ্ট্যসমূহ

### 🔐 লগইন সিস্টেম
- রোল নম্বর + 7133 দিয়ে লগইন (যেমন: রোল 83 → পাসওয়ার্ড 837133)
- প্রথমবার লগইনে অটোমেটিক প্রোফাইল তৈরি
- পাসওয়ার্ড দেখানো/লুকানোর সুবিধা

### 👤 প্রোফাইল ম্যানেজমেন্ট
- নাম, বাবার নাম, মায়ের নাম এডিট করা
- জেলা, থানা, গ্রামের তথ্য যোগ করা
- স্কুল, কলেজের তথ্য আপডেট করা
- মোবাইল নম্বর ও ইমেইল যোগ করা
- প্রোফাইল পিকচার আপলোড করা

### 🖼️ ছবি আপলোড
- ImageKit ব্যবহার করে ছবি আপলোড
- ছবির সাইজ ও ফরম্যাট ভ্যালিডেশন
- অটোমেটিক ছবি অপটিমাইজেশন

### 🔍 ছাত্র তালিকা
- সুন্দর ডিজাইনে ছাত্র তালিকা
- নাম বা রোল দিয়ে সার্চ করা
- লিঙ্গ অনুযায়ী ফিল্টার করা
- প্রোফাইল কার্ডে ক্লিক করে বিস্তারিত দেখা

### 🔒 নিরাপত্তা
- পাসওয়ার্ড পরিবর্তনের সুবিধা
- Firebase এ নিরাপদ ডেটা সংরক্ষণ
- সফল লগইন/লগআউট মেসেজ

## GitHub এ Deploy করার নিয়ম

### ১. Repository তৈরি করুন
\`\`\`bash
# নতুন repository তৈরি করুন GitHub এ
# Repository name: student-profile-system
# Public repository হিসেবে তৈরি করুন
\`\`\`

### ২. Files আপলোড করুন
\`\`\`bash
# Local folder তৈরি করুন
mkdir student-profile-system
cd student-profile-system

# Files copy করুন এই folder এ:
# - index.html (main file)
# - imagekit-auth-server.js (backend)
# - package.json
# - vercel.json
# - README.md

# Git initialize করুন
git init
git add .
git commit -m "Initial commit: Student Profile System"

# GitHub repository এর সাথে connect করুন
git remote add origin https://github.com/yourusername/student-profile-system.git
git branch -M main
git push -u origin main
\`\`\`

### ৩. GitHub Pages Enable করুন
1. Repository Settings এ যান
2. Pages section এ যান
3. Source: Deploy from a branch
4. Branch: main / (root)
5. Save করুন

### ৪. ImageKit Auth Server Deploy করুন

#### Vercel এ Deploy (Recommended):
1. [Vercel.com](https://vercel.com) এ যান
2. GitHub দিয়ে login করুন
3. "New Project" ক্লিক করুন
4. আপনার repository select করুন
5. Deploy করুন

#### অথবা Netlify এ Deploy:
1. [Netlify.com](https://netlify.com) এ যান
2. "New site from Git" ক্লিক করুন
3. GitHub repository connect করুন
4. Build command: `npm install`
5. Publish directory: `/`
6. Deploy করুন

### ৫. Authentication URL Update করুন

Deploy হওয়ার পর আপনার auth server এর URL পাবেন (যেমন: `https://your-project.vercel.app`)

`index.html` ফাইলে ImageKit configuration এ এই URL যোগ করুন:

\`\`\`javascript
// ImageKit configuration update করুন
const imagekit = new ImageKit({
    publicKey: "public_hVAN26ygTqOwXiKvqHBCVcY6jXA=",
    urlEndpoint: "https://ik.imagekit.io/msharifulvisionary",
    authenticationEndpoint: "https://your-project.vercel.app/auth" // এই লাইন আপডেট করুন
});
\`\`\`

### ৬. Final URLs

আপনার সিস্টেম এই URLs এ কাজ করবে:
- **Main Website**: `https://yourusername.github.io/student-profile-system`
- **Auth Server**: `https://your-project.vercel.app`

## ব্যবহারের নিয়ম

### প্রথমবার লগইন:
- রোল নম্বর: 83
- পাসওয়ার্ড: 837133

### প্রোফাইল এডিট:
1. লগইন করার পর "প্রোফাইল এডিট" বাটনে ক্লিক করুন
2. সব তথ্য পূরণ করুন
3. ছবি আপলোড করুন
4. "সেভ করুন" বাটনে ক্লিক করুন

### পাসওয়ার্ড পরিবর্তন:
1. "পাসওয়ার্ড পরিবর্তন" বাটনে ক্লিক করুন
2. বর্তমান পাসওয়ার্ড দিন
3. নতুন পাসওয়ার্ড দিন
4. নিশ্চিত করুন

## Technical Details

### Database Structure (Firebase):
\`\`\`
students/
  ├── 1/
  │   ├── roll: 1
  │   ├── name: "সাদিয়া আফরিন"
  │   ├── password: "17133"
  │   ├── fatherName: ""
  │   ├── motherName: ""
  │   ├── district: ""
  │   ├── thana: ""
  │   ├── village: ""
  │   ├── school: ""
  │   ├── college: ""
  │   ├── mobile: ""
  │   ├── email: ""
  │   ├── profileImage: ""
  │   ├── createdAt: "2024-01-01T00:00:00.000Z"
  │   └── updatedAt: "2024-01-01T00:00:00.000Z"
  └── 83/
      └── ... (same structure)
\`\`\`

### Image Storage (ImageKit):
- Folder: `/student-profiles/`
- Format: `student_{roll}_{timestamp}.jpg`
- Auto optimization enabled
- CDN delivery

## Support

কোন সমস্যা হলে GitHub Issues এ জানান অথবা আমার সাথে যোগাযোগ করুন।

## License

MIT License - Free to use and modify.
