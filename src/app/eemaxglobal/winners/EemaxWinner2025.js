"use client";

export default function EemaxWinner2025() {
  const awards = [
    {
      category: "B2B Exhibition of the Year",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "QUADRUPLET @ IEW 2025",
      medal: "Gold",
    },
    {
      category: "B2B Exhibition of the Year",
      agency: "JMD DESIGN DESK PVT LTD",
      event:
        "RELIANCE INDUSTRIES LIMITED EXHIBITION BOOTH AT INDIA ENERGY WEEK 2025",
      medal: "Silver",
    },
    {
      category: "B2B Exhibition of the Year",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "BPCL PAVILION AT INDIA ENERGY WEEK 2025",
      medal: "Bronze",
    },
    {
      category: "B2B Exhibition of the Year",
      agency: "TLG INDIA PVT LTD",
      event: "AIRTEL EXHIBITION STALL - INDIA MOBILE CONGRESS",
      medal: "Silver",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "MAHAKUMBH EXPERIENCE CENTRE",
      medal: "Gold",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "BHARAT MOBILITY MG PAVILION",
      medal: "Bronze",
    },
    {
      category: "B2C exhibition of the Year",
      agency: "THE SILLY FELLOWS",
      event: "THE REAL VAN GOGH IMMERSIVE EXPERIENCE",
      medal: "Silver",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "RASHI ENTERTAINMENT (P) LTD.",
      event: "25 YEARS OF LEGACY, CELEBRATED WITH VIVAH UTSAV",
      medal: "Silver",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "STCH INTEGRATED MARKETING SOLUTION P LTD",
      event: "THE DELOITTE SOUTH ASIA PARTNERS MEET (SAPM) 2025",
      medal: "Bronze",
    },
    {
      category: "Celebratory Event of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "MAHAKUMBH EXPERIENCE CENTRE",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE SHIVAY WEDDING",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE COMO WEDDING",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Outside India)",
      agency: "TEN EVENTS AND ENTERTAINMENT LLP",
      event: "#24KARATLOVE",
      medal: "Bronze",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "RAINMAKER SIGNATURE EXPERIENCES PVT LTD",
      event: "THE EA WEDDING",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "RASHI ENTERTAINMENT (P) LTD.",
      event: "YASH & ANUKRITI- SYMPHONY OF HEARTS",
      medal: "Gold",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "SCENARIO WEDDING PLANNER",
      event: "RUKMINI SWAYAMVARAM",
      medal: "Silver",
    },
    {
      category: "Complete Wedding of the Year (Within India)",
      agency: "TEN EVENTS AND ENTERTAINMENT LLP",
      event: "THE SYMPHONY OF US",
      medal: "Bronze",
    },
    {
      category: "CSR Event of the year",
      agency: "INDIA HOSPITALITY MART PRIVATE LIMITED",
      event: "ZOMATO X GUINESS WORLD RECORD",
      medal: "Silver",
    },
    {
      category: "CSR Event of the year",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "MANN SAFAR",
      medal: "Bronze",
    },
    {
      category: "CSR Event of the year",
      agency: "MARKET MEN CONSUMER CONNECT AND EVENTS PVT. LTD.",
      event:
        "PARIVARTAN KI GANGA - STIHL FARMER OUTREACH CAMPAIGN, UTTARAKHAND - OCT 2024",
      medal: "Silver",
    },
    {
      category: "CSR Event of the year",
      agency: "TOAST EVENTS PVT LTD",
      event: "GODREJ CONSCIOUS COLLECTIVE",
      medal: "Gold",
    },
    {
      category: "Debut IP of the Year",
      agency: "OAKS MANAGEMENT CONSULTANCY PVT LTD",
      event: "INDIA SOUL FEST",
      medal: "Bronze",
    },
    {
      category: "Debut IP of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "MAHAKUMBH EXPERIENCE CENTRE",
      medal: "Silver",
    },
    {
      category: "Debut IP of the Year",
      agency: "TORQUE ENTERTAINMENT",
      event: "ROYAL ENFIELD - RIDE AND SEEK CHENNAI",
      medal: "Gold",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "ABC DAY 2025",
      medal: "Silver",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "MAXIMUS MICE & MEDIA SOLUTIONS PVT. LTD.",
      event: "HSBC CIRCLE OF EXCELLENCE",
      medal: "Gold",
    },
    {
      category: "Employee Engagement Event of the Year",
      agency: "RENAISSANCE",
      event: "REFRESH",
      medal: "Bronze",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Above ₹1 Crore)",
      agency: "STCH INTEGRATED MARKETING SOLUTION P LTD",
      event: "AMERICAN VIBES PARTY PIT STOP",
      medal: "Bronze",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Above ₹1 Crore)",
      agency: "SWORDFISH EVENTS AND ENTERTAINMENT PVT LTD",
      event: "DON JULIO DAY OF THE DEAD IN INDIA",
      medal: "Gold",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Above ₹1 Crore)",
      agency: "THE SILLY FELLOWS",
      event: "SNAPDRAGON INSIDER ELITE FESTIVAL",
      medal: "Silver",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Above ₹1 Crore)",
      agency: "TOAST EVENTS PVT LTD",
      event: "HEJ DELHI - IKEA INDIA DELHI LAUNCH",
      medal: "Silver",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Below ₹1 Crore)",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "BLUE STAR PRODUCT LAUNCH 2025",
      medal: "Bronze",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Below ₹1 Crore)",
      agency: "MADISON TURNT",
      event: "PULSE EK AVATAR ANEK",
      medal: "Gold",
    },
    {
      category:
        "Excellence in Consumer Activation Campaign (Budget Below ₹1 Crore)",
      agency: "MADISON TURNT",
      event: "SUN NEO - BRINGING THE SUN, WHEREVER YOU GO",
      medal: "Silver",
    },
    {
      category: "Excellence in Influencer Marketing Campaign",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "KHO KHO WORLD CUP 2025",
      medal: "Gold",
    },
    {
      category: "Excellence in Influencer Marketing Campaign",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "THREADS FIRST BIRTHDAY PARTY",
      medal: "Bronze",
    },
    {
      category: "Excellence in Influencer Marketing Campaign",
      agency: "TESSARAKT EXPERIENTIAL PVT. LTD",
      event: "LENOVO X INTEL - AI STUDIO",
      medal: "Bronze",
    },
    {
      category: "Excellence in Influencer Marketing Campaign",
      agency: "THE SILLY FELLOWS",
      event: "THE REAL VAN GOGH IMMERSIVE EXPERIENCE",
      medal: "Silver",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "FIERCE VENTURES LLP",
      event: "INTERNATIONAL TEMPLES CONVENTION & EXPO 2025",
      medal: "Silver",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "RED BULL DANCE YOUR STYLE 2024 - WORLD FINALS",
      medal: "Bronze",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "MADISON TURNT",
      event: "PULSE EK AVATAR ANEK",
      medal: "Gold",
    },
    {
      category: "Excellence in Integrated Marketing Campaign",
      agency: "THE SILLY FELLOWS",
      event: "THE REAL VAN GOGH IMMERSIVE EXPERIENCE",
      medal: "Bronze",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "PHASE 1 EVENTS AND ENTERTAINMENT (P) LTD.",
      event: "RIVAAH X TARUN TAHILIANI 2.0 LAUNCH",
      medal: "Silver",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "SWORDFISH EVENTS AND ENTERTAINMENT PVT LTD",
      event: "POLO IN THE PINK CITY 2025",
      medal: "Gold",
    },
    {
      category: "Excellence in Luxury Brand Activation",
      agency: "VIBGYOR BRAND SERVICES PVT. LTD.",
      event: "HYUNDAI SOIRE",
      medal: "Bronze",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "HIVE DX COMMUNICATION PVT LTD",
      event: "TATA MAGIC- MERI MEHNAT, MERA MAGIC",
      medal: "Silver",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "MANN SAFAR",
      medal: "Gold",
    },
    {
      category: "Excellence in Road Show Activation",
      agency: "TORQUE ENTERTAINMENT",
      event: "ROYAL ENFIELD - RIDE AND SEEK CHENNAI",
      medal: "Bronze",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "HIVE DX COMMUNICATION PVT LTD",
      event: "TATA MAGIC- MERI MEHNAT, MERA MAGIC",
      medal: "Bronze",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "MARKET MEN CONSUMER CONNECT AND EVENTS PVT. LTD.",
      event:
        "PARIVARTAN KI GANGA - STIHL FARMER OUTREACH CAMPAIGN, UTTARAKHAND - OCT 2024",
      medal: "Gold",
    },
    {
      category: "Excellence in Rural Activation",
      agency: "RAZZMATAZZ VENTURES (P) LTD.",
      event: "SLK PASS THE BALL",
      medal: "Silver",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE SHIVAY WEDDING",
      medal: "Bronze",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "TAXI DESIGN STUDIO",
      event: "THE UTOPIAN ARENA - SANGEET CELEBRATION",
      medal: "Gold",
    },
    {
      category: "Excellence in use of technology in a wedding",
      agency: "WATERMARK EVENT SOLUTIONS LLP",
      event: "TECHTOPIA SANGEET",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "TOUCHWOOD ENTERTAINMENT LTD.",
      event: "ART OF ARRANGEMENT",
      medal: "Gold",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE SHIVAY WEDDING",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Décor",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE COMO WEDDING",
      medal: "Bronze",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE SHIVAY WEDDING",
      medal: "Gold",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE COMO WEDDING",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "RASHI ENTERTAINMENT (P) LTD.",
      event: "YASH & ANUKRITI- EUPHORIA A WEDDING AFFAIR",
      medal: "Silver",
    },
    {
      category: "Excellence in Wedding Entertainment",
      agency: "TOUCHWOOD ENTERTAINMENT LTD.",
      event: "ILLUSION BOX",
      medal: "Bronze",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "CELEBRATIONS LIVE",
      event: "PATHA UTSAV 2025",
      medal: "Bronze",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "YOUTUBE FAN FEST 2024",
      medal: "Gold",
    },
    {
      category: "Excellence in Youth Activation",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "MANN SAFAR",
      medal: "Silver",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "AXIS COMMUNICATIONS",
      event: "KALAGRAM MAHAKUMBH 2025",
      medal: "Silver",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "YOUTUBE FAN FEST 2024",
      medal: "Bronze",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "KOMMUNE ARTS PVT. LTD.",
      event: "SPOKENFEST SHILLONG",
      medal: "Silver",
    },
    {
      category: "Festival of the Year (Art / Culture / Food)",
      agency: "SWORDFISH EVENTS AND ENTERTAINMENT PVT LTD",
      event: "ECHOES OF EARTH",
      medal: "Gold",
    },
    {
      category: "Government Event of the Year- Large (above 5K pax)",
      agency: "BOTLAB DYNAMICS",
      event: "MAHAKUMBH 2025",
      medal: "Silver",
    },
    {
      category: "Government Event of the Year- Large (above 5K pax)",
      agency: "EVOKE MEDIA",
      event: "AIR SHOW - MARINA",
      medal: "SILVER",
    },
    {
      category: "Government Event of the Year- Large (above 5K pax)",
      agency: "MAGICTAP SOLUTIONS",
      event:
        "WORLD HYDROGEN SUMMIT 2024 - INDIA PAVILION FOR MINISTRY OF NEW AND RENEWABLE ENERGY (MNRE) AT ROTTERDAM",
      medal: "BRONZE",
    },
    {
      category: "Government Event of the Year- Large (above 5K pax)",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "MAHAKUMBH EXPERIENCE CENTRE",
      medal: "GOLD",
    },
    {
      category: "Government Event of the Year- Small (below 5K pax)",
      agency: "PRELUDE NOVEL VENTURES PVT. LTD.",
      event: "MPSO 2025",
      medal: "BRONZE",
    },
    {
      category: "Government Event of the Year- Small (below 5K pax)",
      agency: "SWORDFISH EVENTS AND ENTERTAINMENT PVT LTD",
      event: "GODAWAN AT CANNES FILM FESTIVAL",
      medal: "SILVER",
    },
    {
      category: "Government Event of the Year- Small (below 5K pax)",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "GLOBAL INVESTORS SUMMIT MADHYA PRADESH",
      medal: "GOLD",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "ALLTHATJAZZ EVENTS & ENTERTAINMENT PVT. LTD.",
      event: "CNBC TV18- GLOBAL LEADERSHIP SUMMIT",
      medal: "GOLD",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "ERGO CONSULTING SERVICES (INDIA) PVT LTD",
      event: "UST GLOBAL D3 - DREAM DEVELOP DISRUPT",
      medal: "GOLD",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "EVENT U ROX",
      event: "GRACE HOPPER CELEBRATIONS INDIA - ME + WE",
      medal: "BRONZE",
    },
    {
      category: "Hybrid Event of the Year - Offline + Online",
      agency: "FIERCE VENTURES LLP",
      event: "INTERNATIONAL TEMPLES CONVENTION & EXPO 2025",
      medal: "SILVER",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "CELEBRATIONS LIVE",
      event: "BALIJATRA CUTTACK UTSAV 2024",
      medal: "SILVER",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "GLOBAL INVESTORS SUMMIT MADHYA PRADESH",
      medal: "BRONZE",
    },
    {
      category: "Installation/ Government Show of the Year",
      agency: "TAGGLABS EXPERIENTIAL PRIVATE LIMITED",
      event: "MAHAKUMBH EXPERIENCE CENTRE",
      medal: "GOLD",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "EXCELLENCY TIME ENTERTAINMENT PVT. LTD.",
      event: "VIKRAMOTSAV",
      medal: "SILVER",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "SWORDFISH EVENTS AND ENTERTAINMENT PVT LTD",
      event: "ECHOES OF EARTH",
      medal: "GOLD",
    },
    {
      category: "Longstanding IP of the Year",
      agency: "TEAMWORK ARTS PVT. LTD.",
      event: "MAHINDRA EXCELLENCE IN THEATRE AWARDS",
      medal: "BRONZE",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "ALLTHATJAZZ EVENTS & ENTERTAINMENT PVT. LTD.",
      event: "ASIAN PAINTS - SUPER PREMIUM APPLICATORS (SPA) FESTIVAL",
      medal: "GOLD",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "E Factor Experiences Limited",
      event: "Bali Hi: A Legendary Rendezvous of Excellence and Indulgence",
      medal: "Bronze",
    },
    {
      category: "MICE Event of the Year (Outside India)",
      agency: "Laqshya Live Experiences Pvt. Ltd.",
      event: "IPRU Star Club - New Zealand",
      medal: "Silver",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Inextis Events Private Limited",
      event: "Blue Star Product Launch 2025",
      medal: "Bronze",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Laqshya Live Experiences Pvt. Ltd.",
      event: "ABC Day 2025",
      medal: "Silver",
    },
    {
      category: "MICE Event of the Year (Within India)",
      agency: "Maximus MICE & Media Solutions Pvt. Ltd.",
      event: "HSBC Circle of Excellence 2024",
      medal: "Gold",
    },
    {
      category: "Music Event of the Year",
      agency: "E Factor Experiences Limited",
      event: "Meerut Mahotsav",
      medal: "Gold",
    },
    {
      category: "Music Event of the Year",
      agency: "EVA Live LLP",
      event: "Bryan Adams - Music Event of the Year",
      medal: "Silver",
    },
    {
      category: "Music Event of the Year",
      agency: "Laqshya Media Limited",
      event: "Scheherazade 'The Ice Show'",
      medal: "Bronze",
    },
    {
      category: "Music Event of the Year",
      agency: "Swordfish Events and Entertainment Pvt Ltd",
      event: "Echoes of Earth",
      medal: "Silver",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "Hive DX Communication Private Limited",
      event: "Lamborghini Giro India 2024",
      medal: "Silver",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "The Silly Fellows",
      event: "The Real Van Gogh Immersive Experience",
      medal: "Gold",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "The Silly Fellows",
      event: "Zero1 Fest by Zerodha",
      medal: "Silver",
    },
    {
      category: "PR / Media Event of the Year",
      agency: "Wizcraft Entertainment Agency Pvt Ltd",
      event: "Netflix - Dabba Cartel - Trailer Launch",
      medal: "Bronze",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Above ₹1 Crore)",
      agency: "Event U Rox",
      event: "When You Aim to Defy Gravity, You Need Wings",
      medal: "Silver",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Above ₹1 Crore)",
      agency: "Hive DX Communication Private Limited",
      event: "Defender Octa Experience 2025",
      medal: "Bronze",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Above ₹1 Crore)",
      agency: "Laqshya Live Experiences Pvt. Ltd.",
      event: "Godrej Brand Relaunch",
      medal: "Gold",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Below ₹1 Crore)",
      agency: "JAGRAN SOLUTIONS (UNIT OF JPL)",
      event: "VEER HANUMAN SKY CANVAS",
      medal: "Bronze",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Below ₹1 Crore)",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "SNAPCHAT GENZ REPORT LAUNCH",
      medal: "Gold",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Below ₹1 Crore)",
      agency: "TESSARAKT EXPERIENTIAL PVT. LTD",
      event: "LENOVO X INTEL - AI STUDIO",
      medal: "Silver",
    },
    {
      category:
        "Product Launch/Re-launch Event of the Year (Budget Below ₹1 Crore)",
      agency: "TLG INDIA PVT LTD",
      event: "AIRTEL SPAM PROTECTION LAUNCH",
      medal: "Silver",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "CCRK PRIVATE LIMITED",
      event: "EIRC OF ICAI’S 49TH REGIONAL CONFERENCE: WE",
      medal: "Gold",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "COLLECTIVE HEADS EXPERIENTIAL MKT. SOLUTIONS PVT.LTD",
      event: "SCAI 2024",
      medal: "Silver",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "GOAFEST",
      medal: "Gold",
    },
    {
      category: "Professional Association Event of the Year",
      agency: "THE SILLY FELLOWS",
      event: "ZERO1 FEST BY ZERODHA",
      medal: "Bronze",
    },
    {
      category: "Professionnal Conference Organizer",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "NUTANIX .NEXT ON TOUR",
      medal: "Bronze",
    },
    {
      category: "Professionnal Conference Organizer",
      agency: "MAXIMUS MICE & MEDIA SOLUTIONS PVT. LTD.",
      event: "HSBC CIRCLE OF EXCELLENCE 2024",
      medal: "Gold",
    },
    {
      category: "Professionnal Conference Organizer",
      agency: "THE SILLY FELLOWS",
      event: "ZERO1 FEST BY ZERODHA",
      medal: "Gold",
    },
    {
      category: "Professionnal Conference Organizer",
      agency: "THE SILLY FELLOWS",
      event: "SNAPDRAGON INSIDER ELITE FESTIVAL",
      medal: "Silver",
    },
    {
      category: "Reception Ceremony of the year",
      agency: "RASHI ENTERTAINMENT (P) LTD.",
      event: "YASHI & ANUKRITI- PALACE OF DREAMS",
      medal: "Bronze",
    },
    {
      category: "Reception Ceremony of the year",
      agency: "TEN EVENTS AND ENTERTAINMENT LLP",
      event: "THE REGAL RECEPTION",
      medal: "Gold",
    },
    {
      category: "Reception Ceremony of the year",
      agency: "TOUCHWOOD ENTERTAINMENT LTD.",
      event: "MYSTICAL NIGHT OF DELIGHT",
      medal: "Silver",
    },
    {
      category: "Sangeet of the Year",
      agency: "CCRK PRIVATE LIMITED",
      event: "A NIGHT IN PARIS",
      medal: "Silver",
    },
    {
      category: "Sangeet of the Year",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "THE SHIVAY WEDDING",
      medal: "Bronze",
    },
    {
      category: "Sangeet of the Year",
      agency: "TAXI DESIGN STUDIO",
      event: "THE UTOPIAN ARENA - SANGEET CELEBRATION",
      medal: "Gold",
    },
    {
      category: "Signature Event of the Year",
      agency: "DANCING PEACOCK LLP",
      event: "CHILDREN'S FOLK CHOIR",
      medal: "Bronze",
    },
    {
      category: "Signature Event of the Year",
      agency: "EVA LIVE LLP",
      event: "BRYAN ADAMS - SIGNATURE EVENT OF THE YEAR",
      medal: "Silver",
    },
    {
      category: "Signature Event of the Year",
      agency: "HYPERLINK BRAND SOLUTIONS PVT LTD",
      event: "COLDPLAY - MUSIC OF THE SPHERES WORLD TOUR - MUMBAI",
      medal: "Gold",
    },
    {
      category: "Social Celebration of the Year",
      agency: "DUSHYANT PERIWAL - WDNE",
      event:
        "PANDORA IN RAJASTHAN | DESIGN THEME: AVATAR | VENUE: RAFFLES, UDAIPUR | OCCASION: BHUTANI INFRA COCKTAIL / RNR",
      medal: "Gold",
    },
    {
      category: "Social Celebration of the Year",
      agency: "TOUCHWOOD ENTERTAINMENT LTD.",
      event: "JEEVAN UTSAV",
      medal: "Bronze",
    },
    {
      category: "Social Celebration of the Year",
      agency: "TWO THE TEE EXPERIENCES",
      event: "EK SHATAK KA SAFAR",
      medal: "Silver",
    },
    {
      category: "Sports Event of the Year",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "KHO KHO WORLD CUP 2025",
      medal: "Gold",
    },
    {
      category: "Sports Event of the Year",
      agency: "EVENT U ROX",
      event: "CANARA BANK",
      medal: "Bronze",
    },
    {
      category: "Sports Event of the Year",
      agency: "THE SILLY FELLOWS",
      event: "JOY HEYBALL JUNIOR WORLD CHAMPIONSHIP",
      medal: "Silver",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "ALLTHATJAZZ EVENTS & ENTERTAINMENT PVT. LTD.",
      event: "SURAKSHA RELOADED (SADAK SURAKSHA ABHIYAAN 2025)",
      medal: "Bronze",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "E FACTOR EXPERIENCES LIMITED",
      event: "ECO RETREAT, KONARK",
      medal: "Silver",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "RAINMAKER SIGNATURE EXPERIENCES PVT LTD",
      event: "AARANYA SRISHTI",
      medal: "Gold",
    },
    {
      category: "Sustainable Corporate Event of the Year",
      agency: "TOAST EVENTS PVT LTD",
      event: "GODREJ CONSCIOUS COLLECTIVE",
      medal: "Gold",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "A 2 Z EVENTS PROMOTION ENTERTAINMENT",
      event:
        "RAKHINIKHIL WEDDING - ROOTED IN CULTURE, WRAPPED IN CONSCIOUSNESS",
      medal: "Bronze",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "CREATIVE WITTY",
      event: "KINJAL & KARAN",
      medal: "Silver",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "RAINMAKER SIGNATURE EXPERIENCES PVT LTD",
      event: "THE EA CELEBRATION",
      medal: "Gold",
    },
    {
      category: "Sustainable Wedding of the Year",
      agency: "SCENARIO WEDDING PLANNER",
      event: "RUKMINI SWAYAMVARAM",
      medal: "Silver",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Above ₹1 Crore)",
      agency: "BEEP EXPERIENCE MANAGEMENT (P) LTD.",
      event: "VOLVO CE - EC210 LAUNCH | KARO ZYADA KI UMEED",
      medal: "Silver",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Above ₹1 Crore)",
      agency: "FIERCE VENTURES LLP",
      event: "INTERNATIONAL TEMPLES CONVENTION & EXPO 2025",
      medal: "Gold",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Above ₹1 Crore)",
      agency: "STCH INTEGRATED MARKETING SOLUTION P LTD",
      event: "FOCUS 2025",
      medal: "Bronze",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Below ₹1 Crore)",
      agency: "INEXTIS EVENTS PRIVATE LIMITED",
      event: "BLUE STAR PRODUCT LAUNCH 2025",
      medal: "Silver",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Below ₹1 Crore)",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "ULTRATECH SINGAPORE CRUISE DEALER MEET",
      medal: "Gold",
    },
    {
      category: "Trade/Channel Event of the Year (Budget Below ₹1 Crore)",
      agency: "LAQSHYA LIVE EXPERIENCES PVT. LTD.",
      event: "SNAPCHAT GENZ REPORT LAUNCH",
      medal: "Bronze",
    },
  ];

  return (
    <div className=" overflow-hidden px-4 py-11 ">
      <h2 className=" tracking-tight font-bold text-3xl md:text-4xl text-center mb-11 ">
        Winner 2025
      </h2>
      <div className="overflow-x-auto bg-orange-200 rounded-xl p-4">
        <table className="min-w-full text-left text-sm text-black border-collapse">
          <thead>
            <tr className="bg-orange-300 font-bold">
              <th className="px-4 py-2 border border-orange-400">Category</th>
              <th className="px-4 py-2 border border-orange-400">
                Agency Name
              </th>
              <th className="px-4 py-2 border border-orange-400">
                Name of the Event
              </th>
              <th className="px-4 py-2 border border-orange-400">Medal</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((item, index) => (
              <tr key={index} className="even:bg-orange-100">
                <td className="px-4 py-2 border border-orange-300">
                  {item.category}
                </td>
                <td className="px-4 py-2 border border-orange-300">
                  {item.agency}
                </td>
                <td className="px-4 py-2 border border-orange-300">
                  {item.event}
                </td>
                <td className="px-4 py-2 border border-orange-300">
                  {item.medal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
