"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const totalPressCoverageData = [
  {
    date: "May 30, 2021",
    title: "Event Community Steps forward for Covid Assistance",
    image: "/images/press-coverage/1622621570_Pioneer.webp",
    link: "https://www.dailypioneer.com/2021/business/event-community-steps-forward-for-covid-assistance.html",
  },
  {
    date: "May 29, 2021",
    title:
      "Live experience doesn’t always translate in virtual events: Roshan Abbas",
    image: "/images/press-coverage/1622621647_IANS Story.webp",
    link: "https://www.thestatesman.com/entertainment/theatre/live-experience-doesnt-always-translate-virtual-events-roshan-abbas-1502969711.html",
  },
  {
    date: "May 27, 2021",
    title: "EEMA joins Covid Relief Efforts",
    image: "/images/press-coverage/1622621492_Mint Story_May.webp",
    link: "https://www.livemint.com/industry/media/eema-joins-covid-relief-efforts-11622090703730.html",
  },
  {
    date: "May 06, 2021",
    title:
      "EEMA initiates 24-hour helpline to assist with refilling oxygen cylinders in Delhi",
    image: "/images/press-coverage/1620463768_NIE Article.webp",
    link: "https://www.newindianexpress.com/cities/delhi/2021/may/05/24-hour-helpline-to-assist-with-refilling-oxygen-cylinders-in-delhi-2298612.html",
  },
  {
    date: "May 06, 2021",
    title:
      "This 24-Hour Oxygen Helpline Is Proving To Be A Savior For Covid Patients In Delhi-NCR",
    image: "/images/press-coverage/1620463871_ABP Article.webp",
    link: "https://news.abplive.com/news/india/this-24-hour-oxygen-helpline-is-proving-to-be-a-savior-for-covid-patients-in-delhi-ncr-1457177",
  },
  {
    date: "May 01, 2021",
    title:
      "Event Industry’s Covid-SOS Service Addressing 1000 Critical Queries Daily With 50-60% Success Ratio",
    image: "/images/press-coverage/1620475082_EE Article.webp",
    link: "http://everythingexperiential.businessworld.in/article/Event-Industry-s-Covid-SOS-Service-Addressing-1000-Critical-Queries-Daily-With-50-60-Success-Ratio/01-05-2021-388325/",
  },
  {
    date: "Apr 22, 2021",
    title:
      "With 5 Cr People Dependent On Event Industry, The Government Needs To Hear Us Now",
    image: "/images/press-coverage/1620480986_EE Article_3.webp",
    link: "http://everythingexperiential.businessworld.in/article/With-5-Cr-People-Dependent-On-Event-Industry-The-Government-Needs-To-Hear-Us-Now-/22-04-2021-387387/",
  },
  {
    date: "Apr 13, 2021",
    title: "Live Events Sector braces for tough times ahead as infections rise",
    image: "/images/press-coverage/1620464015_Mint Article.webp",
    link: "https://www.livemint.com/news/india/rising-covid-cases-curfews-hit-live-events-again-11618215000753.html",
  },
  {
    date: "Sep 01, 2020",
    title: "EEMA GIVES CALL TO OPEN SAFE EVENTS TO SAVE EVENTS",
    image:
      "/images/press-coverage/news/1600936375_Western Times_Ahm_EEMA_23.08.20_Pg03.jpg",
    link: "/press-coverage-eema/post/eema-gives-call-to-open-safe-events-to-save-events",
  },
  {
    date: "Apr 21, 2020",
    title:
      "EEMA examines the impact of COVID-19 on event and entertainment industry",
    image: "/images/press-coverage/news/1587537579_download (2).png",
    link: "https://brandequity.economictimes.indiatimes.com/news/media/eema-examines-the-impact-of-covid-19-on-event-and-entertainment-industry/75268619",
  },
  {
    date: "Apr 21, 2020",
    title:
      "New Survey by EEMA examines the impact of COVID-19 on Event and Entertainment Industry",
    image: "/images/press-coverage/news/1587537652_ee-final-logo-new.png",
    link: "http://everythingexperiential.businessworld.in/article/New-Survey-by-EEMA-examines-the-impact-of-COVID-19-on-Event-and-Entertainment-Industry/21-04-2020-189794/",
  },
  {
    date: "Apr 21, 2020",
    title:
      "New Survey by EEMA examines the impact Of Covid-19 on Event and Entertainment Industry",
    image: "/images/press-coverage/news/1587537933_news-pic-logo-4.jpg",
    link: "https://mumbainewsnetworks.blogspot.com/2020/04/new-survey-by-eema-examines-impact-of.html",
  },
  {
    date: "Apr 21, 2020",
    title: "Are virtual events becoming the new normal?",
    image: "/images/press-coverage/news/1585923022_download (1).png",
    link: "https://www.businessinsider.in/advertising/media/article/are-virtual-events-becoming-the-new-normal/articleshow/75256412.cms",
  },
  {
    date: "Apr 20, 2020",
    title: "Event management body says 90% bookings cancelled till July",
    image: "/images/press-coverage/news/1587538048_business-standard-logo.png",
    link: "https://www.business-standard.com/article/pti-stories/event-management-body-says-90-bookings-cancelled-till-july-120042001539_1.html",
  },
  {
    date: "Apr 20, 2020",
    title: "Event management body says 90% bookings cancelled till July",
    image: "/images/press-coverage/news/1587538231_logo.jpg",
    link: "https://www.outlookindia.com/newsscroll/event-management-body-says-90-bookings-cancelled-till-july/1809058",
  },
  {
    date: "Apr 20, 2020",
    title:
      "Event management body sends SOS to govt, says 90 per cent bookings cancelled till July",
    image: "/images/press-coverage/news/1587538329_New_delhi_police-_PTI.jpg",
    link: "https://www.newindianexpress.com/business/2020/apr/20/event-management-body-sends-sos-to-govt-says-90-per-cent-bookings-cancelled-till-july-2132951.html",
  },
  {
    date: "Apr 20, 2020",
    title:
      "Coronavirus Updates: Confirmed cases in India reaches 17,656 with 559 deaths",
    image: "/images/press-coverage/news/1587538467_download.jpg",
    link: "https://economictimes.indiatimes.com/news/politics-and-nation/coronavirus-cases-in-india-live-news-latest-updates-april20/liveblog/75241076.cms",
  },
  {
    date: "Apr 20, 2020",
    title:
      "SEZ, Export Oriented Units still await permits from states to resume operation",
    image: "/images/press-coverage/news/1587538612_download.jpg",
    link: "https://www.devdiscourse.com/article/business/1016174-event-management-body-says-90-bookings-cancelled-till-july",
  },
  {
    date: "Apr 20, 2020",
    title:
      "Jio-Facebook deal looks at local level e-commerce; to cover education, health gradually: Ambani",
    image: "null",
    link: "http://newsboss.in/BusinessStandard/",
  },
  {
    date: "Apr 20, 2020",
    title:
      "Covid-19 pandemic will force us to try newer models and going digital is one of them, says Gunjan Arya of OML",
    image: "/images/press-coverage/news/1587539262_bmi_logo.jpg",
    link: "https://bestmediainfo.com/2020/04/covid-19-pandemic-will-force-us-to-try-newer-models-and-going-digital-is-one-of-them-says-gunjan-arya-of-oml/",
  },
  {
    date: "Mar 31, 2020",
    title:
      "Coronavirus impact: Events industry comes to a standstill, no relief until November",
    image:
      "/images/press-coverage/news/1585918191_STADIUM-AUSTRALIA-VS-NZ-770x433.jpg",
    link: "/press-coverage-eema/post/coronavirus-impact-events-industry-comes-to-a-standstill-no-relief-until-november",
  },
  {
    date: "Mar 31, 2020",
    title:
      "We hope as an industry we can rise to the occasion and change the paradigm: Sanjoy Roy, MD Teamwork Arts & President-EEMA",
    image: "/images/press-coverage/news/1585917788_1585647669_biFYTj_roy.jpg",
    link: "/press-coverage-eema/post/we-hope-as-an-industry-we-can-rise-to-the-occasion-and-change-the-paradigm-sanjoy-roy-md-teamwork-arts-president-eema",
  },
  {
    date: "Mar 31, 2020",
    title: "136 million jobs at risk in post-corona India",
    image:
      "/images/press-coverage/news/1585919125_jobs_1585584289372_1585584289585.jpg",
    link: "/press-coverage-eema/post/136-million-jobs-at-risk-in-post-corona-india",
  },
  {
    date: "Mar 30, 2020",
    title:
      "Coronavirus: Indian events and exhibition sector to take ?1 trillion hit",
    image:
      "/images/press-coverage/news/1585918272_L4_1549092348143_1585567117023.jpg",
    link: "/press-coverage-eema/post/coronavirus-indian-events-and-exhibition-sector-to-take-1-trillion-hit",
  },
  {
    date: "Mar 26, 2020",
    title:
      "Meet Brothers, Kailash Kher, Papa CJ and others ensured the show did go on at EEMA’s first ever #StayAtHomeConcert",
    image: "/images/press-coverage/news/1585924505_Kailash.jpg",
    link: "http://everythingexperiential.businessworld.in/article/Meet-Brothers-Kailash-Kher-Papa-CJ-and-others-ensured-the-show-did-go-on-at-EEMA-s-first-ever-StayAtHomeConcert/26-03-2020-187291/",
  },
  {
    date: "Mar 26, 2020",
    title:
      "Coronavirus impact: Events, entertainment industry says Covid-19 hit 60 million livelihoods",
    image: "/images/press-coverage/news/1585923845_download (2).png",
    link: "https://brandequity.economictimes.indiatimes.com/news/media/coronavirus-impact-events-entertainment-industry-says-covid-19-hit-60-million-livelihoods/74821842",
  },
  {
    date: "Mar 26, 2020",
    title:
      "Meet Brothers, Kailash Kher, Papa CJ And Others Ensured The Show Did Go On At EEMA’s First Ever #StayAtHomeConcert",
    image: "/images/press-coverage/news/1585924063_Kailash.jpg",
    link: "https://www.tellychakkar.com/tv/tv-news/meet-brothers-kailash-kher-papa-cj-and-others-ensured-the-show-did-go-eema-s-first-ever",
  },
  {
    date: "Mar 26, 2020",
    title:
      "Meet Brothers, Kailash Kher, Papa CJ And Others Ensured The Show Did Go On At EEMA’s First Ever #StayAtHomeConcert",
    image: "/images/press-coverage/news/1585924423_stay.jpg",
    link: "https://www.indiantelevision.com/mam/marketing/mam/meet-brothers-kailash-kher-papa-cj-and-others-ensured-the-show-did-go-on-at-eema-s-first-ever-stayathomeconcert-200326",
  },
  {
    date: "Mar 26, 2020",
    title:
      "Meet Brothers, Kailash Kher, Papa CJ And Others Ensured The Show Did Go On At EEMA’s First Ever #StayAtHomeConcert",
    image:
      "/images/press-coverage/news/1585924604_WhatsApp-Image-2020-03-23-at-3.30.jpg",
    link: "https://www.4psnews.com/news/story/meet-brothers-kailash-kher-papa-cj-and-others-ensured-the-show-did-go-on-at-eemas-first-ever-stayathomeconcert",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 Hit 60 Million livlihoods seeks urgent government help",
    image: "/images/press-coverage/news/1585920309_Untitled-4.jpg",
    link: "https://economictimes.indiatimes.com/industry/media/entertainment/events-entertainment-industry-says-covid-19-hit-60-million-livelihoods-seeks-urgent-government-help/articleshow/74805982.cms?from=mdr",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Coronavirus pandemic: Events, entertainment industry says COVID-19 hit 60 mn livelihoods; seeks urgent govt help",
    image:
      "/images/press-coverage/news/1585921853_post-event-chennai-770x433.jpg",
    link: "https://www.moneycontrol.com/news/business/coronavirus-pandemic-events-entertainment-industry-says-covid-19-hit-60-mn-livelihoods-seeks-urgent-govt-help-5070971.html",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image: "/images/press-coverage/news/1585923132_download.jpg",
    link: "https://www.devdiscourse.com/article/business/975574-events-entertainment-industry-says-covid-19-hit-60-mln-livelihoods-seeks-urgent-govt-help",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image:
      "/images/press-coverage/news/1585922865_jobs_1585584289372_1585584289585.jpg",
    link: "https://www.business-standard.com/article/pti-stories/events-entertainment-industry-says-covid-19-hit-60-mln-livelihoods-seeks-urgent-govt-help-120032500447_1.html",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says coronavirus outbreak hit 60 mln livelihoods; seeks urgent govt help",
    image:
      "/images/press-coverage/news/1585922895_L4_1549092348143_1585567117023.jpg",
    link: "https://www.firstpost.com/health/events-entertainment-industry-says-coronavirus-outbreak-hit-60-mln-livelihoods-seeks-urgent-govt-help-8188731.html",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image: "/images/press-coverage/news/1585923022_download (1).png",
    link: "https://www.businessinsider.in/business/news/events-entertainment-industry-says-covid-19-hit-60-mln-livelihoods-seeks-urgent-govt-help/articleshow/74805805.cms",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image: "/images/press-coverage/news/1585923481_Imagejepf-1585125476019.png",
    link: "https://yourstory.com/2020/03/events-entertainment-industry-covid19-hit-livelihoods-seeks-govt-help?utm_pageloadtype=scroll",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image:
      "/images/press-coverage/news/1585923260_cropped-ad8f05af-a0d3-4a66-87b0-4306b3b8aa62.jpg",
    link: "#",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image: "/images/press-coverage/news/1585923382_english-logo.png",
    link: "https://www.udayavani.com/english-news/events-entertainment-industry-says-covid-19-hit-60-mln-livelihoods-seeks-urgent-govt-help",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 million livelihoods; seeks urgent government help",
    image: "/images/press-coverage/news/1585923544_Theatre_hall.jpg",
    link: "#",
  },
  {
    date: "Mar 24, 2020",
    title:
      "Sonu Nigam, Kailash Kher, Papa CJ And Others Ensured The Show Did Go On At EEMA's First Ever #StayAtHomeConcert",
    image:
      "/images/press-coverage/news/1585924561_WhatsApp-Image-2020-03-23-at-3.30.jpg",
    link: "https://mumbainewsnetworks.blogspot.com/2020/03/sonu-nigam-kailash-kher-papa-cj-and.html",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Events, entertainment industry says Covid-19 hit 60 mln livelihoods; seeks urgent govt help",
    image: "/images/press-coverage/news/1585923699_RTX6C7L2-380.jpg",
    link: "https://infozuba.in/events-entertainment-industry-says-coronavirus-outbreak-hit-60-mln-livelihoods-seeks-urgent-govt-help/",
  },
  {
    date: "Mar 25, 2020",
    title:
      "Coronavirus pandemic: Events, entertainment industry says COVID-19 hit 60 mn livelihoods; seeks urgent govt help – Moneycontrol",
    image:
      "/images/press-coverage/news/1585923894_post-event-chennai-770x433.jpg",
    link: "https://www.rocketnews.com/2020/03/coronavirus-pandemic-events-entertainment-industry-says-covid-19-hit-60-mn-livelihoods-seeks-urgent-govt-help-moneycontrol/",
  },
  {
    date: "Mar 24, 2020",
    title:
      "Sonu Nigam, Kailash Kher, Papa CJ And Others Ensured The Show Did Go On At EEMA's First Ever #StayAtHomeConcert",
    image:
      "/images/press-coverage/news/1585924006_WhatsApp-Image-2020-03-23-at-3.30.jpg",
    link: "http://www.radioandmusic.com/entertainment/editorial/news/200324-sonu-nigam-kailash-kher-papa-cj-and-others",
  },
  {
    date: "Apr 26, 2019",
    title: "NORTH Meeet - At Pullman",
    image: "/images/press-coverage/news/1556276967_DSC_9455.jpeg",
    link: "/press-coverage-eema/post/north-meeet-at-pullman",
  },
  {
    date: "Aug 06, 2019",
    title:
      "EEMA to work together to transform Capital into an international cultural hub",
    image:
      "/images/press-coverage/news/1568635525_Deputy-CM-Manish-Sisodia-Minister-Kailash-Gehlot-with-EEMA-Members-at-EEMAX-Global-Award.jpg",
    link: "/press-coverage-eema/post/eema-to-work-together-to-transform-capital-into-an-international-cultural-hub",
  },
  {
    date: "Jul 12, 2019",
    title:
      "Special Postal Cover launched for Events & Entertainment Management Association (EEMA)",
    image:
      "/images/press-coverage/news/1563513971_Niti-Aayog-CEO-Shr-Amitabh-Kant-releasing-the-Special-Postal-Cover-of-EEMA-members-at-Niti Aayog-Sansad-Marg.jpeg",
    link: "/press-coverage-eema/post/special-postal-cover-launched-for-events-entertainment-management-association-eema",
  },
  {
    date: "Apr 30, 2019",
    title: "EEMA South Factor",
    image: "/images/press-coverage/news/1556277308_IMG-20190426-WA0003.jpg",
    link: "/press-coverage-eema/post/eema-south-factor",
  },
  {
    date: "Apr 10, 2019",
    title:
      "Gourmet Experiences Will Entertain India’s Top Wedding & Event Planners at GES 2019",
    image: "/images/press-coverage/news/1555392469_lead392.jpg",
    link: "/press-coverage-eema/post/gourmet-experiences-will-entertain-india-s-top-wedding-event-planners-at-ges-2019",
  },
  {
    date: "Mar 01, 2019",
    title: "Upcoming – PALM EXPO 2019 | 30th May – 1st June 2019",
    image: "/images/press-coverage/news/1554887221_Palm-Expo-1280x720.jpg",
    link: "/press-coverage-eema/post/upcoming-palm-expo-2019-30th-may-1st-june-2019",
  },
  {
    date: "Apr 15, 2019",
    title:
      "Event and IP industry stalwarts to converge under one roof at India Event IP Conclave 2019",
    image: "/images/press-coverage/news/1555586472_Event.jpg",
    link: "/press-coverage-eema/post/event-and-ip-industry-stalwarts-to-converge-under-one-roof-at-india-event-ip-conclave-2019",
  },
  {
    date: "Apr 15, 2019",
    title:
      "EEMA Signed an MOU with Amity University Uttar Pradesh (AUUP) paving",
    image: "/images/press-coverage/news/1555312373__MoU_Amity.jpeg",
    link: "/press-coverage-eema/post/eema-signed-an-mou-with-amity-university-uttar-pradesh-auup-paving",
  },
  {
    date: "Feb 25, 2019",
    title: "Thinking 22 with Prahlad Kakkar",
    image: "/images/press-coverage/news/1555586111_Prahalad-Kakkar.jpg",
    link: "/press-coverage-eema/post/thinking-22-with-prahlad-kakkar",
  },
  {
    date: "Feb 07, 2019",
    title: "BLTM",
    image: "/images/press-coverage/news/1549877073_DSC_0303.jpg",
    link: "/press-coverage-eema/post/bltm",
  },
  {
    date: "Feb 25, 2019",
    title: "Republic Day Event",
    image: "/images/press-coverage/news/1555586207_70-yeard.jpg",
    link: "/press-coverage-eema/post/republic-day-event",
  },
  {
    date: "Feb 25, 2019",
    title: "EEMA-SEGMA Event Industry Meet",
    image: "/images/press-coverage/news/1555586283_Segma.jpg",
    link: "/press-coverage-eema/post/eema-segma-event-industry-meet",
  },
  {
    date: "Aug 29, 2018",
    title: "Organising Events, Expos in the State Just Got Easier",
    image:
      "/images/press-coverage/news/1549876806_eema-logo-featured-image-min.jpg",
    link: "/press-coverage-eema/post/organising-events-expos-in-the-state-just-got-easier",
  },
  {
    date: "Aug 29, 2018",
    title:
      "EEMA - The Presenters Dialogue Brings Anchor community on one platform",
    image:
      "/images/press-coverage/news/1549876684_40285193_2106470349363480_7245474932019167232_o.jpg",
    link: "/press-coverage-eema/post/eema-the-presenters-dialogue-brings-anchor-community-on-one-platform",
  },
  {
    date: "Apr 25, 2018",
    title:
      "EEMA Members Come Together to Pledge for Safety at Event Show Asia Mumbai",
    image: "/images/press-coverage/news/1555586659_EVent-1.jpg",
    link: "/press-coverage-eema/post/eema-members-come-together-to-pledge-for-safety-at-event-show-asia-mumbai",
  },
  {
    date: "Feb 07, 2019",
    title: "OTM, the leading travel show in Asia-Pacific",
    image: "/images/press-coverage/news/1549877286_OTM1.jpeg",
    link: "/press-coverage-eema/post/otm-the-leading-travel-show-in-asia-pacific",
  },
  {
    date: "Aug 31, 2018",
    title: "EEMA WEST MEET",
    image: "/images/press-coverage/news/1549343219_eema-west-meet.jpg",
    link: "/press-coverage-eema/post/eema-west-meet",
  },
  {
    date: "May 21, 2018",
    title:
      "500+ event service providers convene for 3rd edition of Spotlight Awards 2018 in Jaipur",
    image: "/images/press-coverage/news/1549876369_eema.jpg",
    link: "/press-coverage-eema/post/500-event-service-providers-convene-for-3rd-edition-of-spotlight-awards-2018-in-jaipur",
  },
  {
    date: "Jul 09, 2018",
    title:
      "Sanjeev Pasricha, Himanshu Shah, KJS Gurna and others Win EEMA National Executive Council Elections",
    image: "/images/press-coverage/news/1555393157_lead-image123.jpg",
    link: "/press-coverage-eema/post/sanjeev-pasricha-himanshu-shah-kjs-gurna-and-others-win-eema-national-executive-council-elections",
  },
  {
    date: "May 21, 2018",
    title:
      "Sanjoy Roy Unanimously Nominated and Elected Next President of EEMA",
    image: "/images/press-coverage/news/1549284288_grid-img1.jpg",
    link: "/press-coverage-eema/post/sanjoy-roy-unanimously-nominated-and-elected-next-president-of-eema",
  },
  {
    date: "Mar 19, 2018",
    title:
      "EEMA Organises Workshop on 'Creating a World Class Award Winning Agency'",
    image: "/images/press-coverage/news/1555586377_Workshop.jpg",
    link: "/press-coverage-eema/post/eema-organises-workshop-on-creating-a-world-class-award-winning-agency",
  },
  {
    date: "Feb 26, 2018",
    title:
      "EEMA On the Path of Enhancing Knowledge With a Series of Informative Initiatives",
    image: "/images/press-coverage/news/1549875515_sushma-2.jpg",
    link: "/press-coverage-eema/post/eema-on-the-path-of-enhancing-knowledge-with-a-series-of-informative-initiatives",
  },
  {
    date: "Apr 20, 2018",
    title:
      "EEMA Hosts a Masterclass with Mandeep Malhotra to Enable Events Planners 'Get Future Ready'",
    image:
      "/images/press-coverage/news/1549876115_master-classmandeep-malhotra750x1200-1280x720.jpg",
    link: "/press-coverage-eema/post/eema-hosts-a-masterclass-with-mandeep-malhotra-to-enable-events-planners-get-future-ready",
  },
  {
    date: "Apr 10, 2018",
    title:
      "EEMA Continues its 10-Year Celebrations; Announces New Chapters in Goa and Pune",
    image: "/images/press-coverage/news/1555393647_eema26.jpg",
    link: "/press-coverage-eema/post/eema-continues-its-10-year-celebrations-announces-new-chapters-in-goa-and-pune-1",
  },
  {
    date: "May 26, 2016",
    title:
      "Road To Event Safety' to be discussed at EEMA PALM Conference Session 2016",
    image: "/images/press-coverage/news/1549874448_Untitled-1.jpg",
    link: "/press-coverage-eema/post/road-to-event-safety-to-be-discussed-at-eema-palm-conference-session-2016",
  },
  {
    date: "May 26, 2016",
    title: "EEMA ‘Road To Event Safety’ Conference Session @ PALM EXPO 2016",
    image: "/images/press-coverage/news/1549874534_lead58.jpg",
    link: "/press-coverage-eema/post/eema-road-to-event-safety-conference-session-palm-expo-2016",
  },
  {
    date: "Feb 24, 2018",
    title: "EEMA Futsal League: In A League Of Its Own",
    image:
      "/images/press-coverage/news/1549875298_winning-team-team-fountainhead.jpg",
    link: "/press-coverage-eema/post/eema-futsal-league-in-a-league-of-its-own",
  },
  {
    date: "Dec 30, 2016",
    title:
      "High Court rejects plea to vacate injunction; asks copyright licensors to prove their ownership",
    image: "/images/press-coverage/news/1549875115_3-4.jpg",
    link: "/press-coverage-eema/post/high-court-rejects-plea-to-vacate-injunction-asks-copyright-licensors-to-prove-their-ownership",
  },
  {
    date: "May 07, 2016",
    title: "‘We build bridges in the spirit of one-people-one world’",
    image:
      "/images/press-coverage/news/1549871316_2016_5largeimg07_May_2016_063205307.jpg",
    link: "/press-coverage-eema/post/we-build-bridges-in-the-spirit-of-one-people-one-world",
  },
  {
    date: "May 03, 2016",
    title: "EEMAGINE '16 sets off to a heady start",
    image: "/images/press-coverage/news/1549870374_slider-image-2.jpg",
    link: "/press-coverage-eema/post/eemagine-16-sets-off-to-a-heady-start",
  },
  {
    date: "May 25, 2016",
    title: "‘Road To Event Safety’ At EEMA PALM Conference Session",
    image: "/images/press-coverage/news/1549871798_Untitled-1-Recovered.jpg",
    link: "/press-coverage-eema/post/road-to-event-safety-at-eema-palm-conference-session",
  },
  {
    date: "May 23, 2016",
    title:
      "EVENTS AND EXPERIENTIAL MARKETING INDUSTRY STALWARTS TO DISCUSS 'ROAD TO EVENT SAFETY' AT EEMA PALM CONFERENCE SESSION",
    image: "/images/press-coverage/news/1549871405_Untitled-12.jpg",
    link: "/press-coverage-eema/post/events-and-experiential-marketing-industry-stalwarts-to-discuss-road-to-event-safety-at-eema-palm-conference-session",
  },
  {
    date: "May 02, 2016",
    title:
      "The EEMA PALM Conference Session at the Palm Conference & Seminar 2016 to examine 'Road to Event Safety in India'",
    image: "/images/press-coverage/news/1549869618_palm-expo.jpg",
    link: "/press-coverage-eema/post/the-eema-palm-conference-session-at-the-palm-conference-amp-seminar-2016-to-examine-road-to-event-safety-in-india",
  },
];

export default function AllPressCoverage() {
  const [pressCoverageData, setPressCoverageData] = useState(() => {
    const tempPCData = totalPressCoverageData.slice(0, 3);
    return tempPCData;
  });

  const [displayDataLastIndex, setDisplayDataLastIndex] = useState(6);

  useEffect(() => {
    setPressCoverageData(totalPressCoverageData.slice(0, displayDataLastIndex));
  }, [displayDataLastIndex]);

  return (
    <section
      id="press-coverage"
      className=" bg-gray-50 text-black px-7 sm:px-24 relative py-11 "
    >
      <h2 className=" text-black text-5xl tracking-tight text-center py-20 ">
        Press Coverage
      </h2>

      <h4 className=" text-black text-right sticky top-40 z-10 ">
        Press Coverage
      </h4>

      {pressCoverageData.map((data, index) => (
        <motion.a
          href={data.link}
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ amount: 0.5, once: true }}
          key={index}
          className=" mb-4 block "
        >
          <div className=" grid grid-cols-1 md:grid-cols-8 gap-1 px-1 md:px-11 mb-16 ">
            <div className=" md:col-span-1 ">
              <p className=" mt-4 leading-relaxed font-semibold ">
                {data.date}
              </p>
            </div>

            <div className=" md:col-span-2  ">
              <h4 className=" mt-4 font-bold text-2xl ">{data.title}</h4>
            </div>

            <div className=" md:col-span-4  ">
              <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={400}
                className=" object-cover m-auto "
              />
            </div>

            <div className=" flex justify-center md:col-span-1 ">
              <span className=" bg-orange-600 inline-block h-4 w-4 mt-7 rotate-slow "></span>
            </div>
          </div>

          <div className=" h-[1.2px] bg-black w-1/2 mt-9 mb-9 ml-1 md:ml-11 "></div>
        </motion.a>
      ))}

      {displayDataLastIndex < totalPressCoverageData.length && (
        <div className=" py-20  ">
          <button
            onClick={() => setDisplayDataLastIndex((val) => val + 10)}
            className=" h-nav-link-container group relative h-1.5 w-fit flex items-center justify-between px-4 py-3 cursor-pointer text-orange-600 text-xl font-semibold transition-all duration-300 hover:text-white m-auto "
          >
            <span className="transition-all duration-300 group-hover:text-3xl text-nowrap ">
              Load More
            </span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
