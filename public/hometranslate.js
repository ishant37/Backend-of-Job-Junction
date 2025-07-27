// Object to store the translations in both English and Hindi
const translations = {
  en: {
    title: "Job Junction",
    home: "HOME",
    learning: "LEARNING",
    guidance: "GUIDANCE",
    aiResumeBuilder: "AI RESUME BUILDER",
    job: "Job",
    internship: "Internship",
    freelancing: "Freelancing",
    community: "Community",
    hello: "Hello",
    jobsInternships:
      "Get Jobs and Internships as per your Skills and Preferences",
    searchPlaceholder: "Search Jobs and Internships",
    whatWeProvide: "What we provide",
    learningSectionTitle: "Learning Section",
    learningSectionText:
      "Learning section includes courses, tests and certifications, which will help improve your skills for the market.",
    guidanceSectionTitle: "Guidance & Support",
    guidanceSectionText:
      "Our mentorship program connects you with industry leaders to provide one-on-one guidance and support. Gain insights and advice to boost your career.",
    resumeSectionTitle: "Resume Building Tool",
    resumeSectionText:
      "A strong resume is tailored to the specific job you're applying for, using relevant keywords and emphasizing your strengths.",
    interviewSectionTitle: "Interview preparation",
    interviewSectionText:
      "It involves researching the company, practicing answers to common interview questions, and presenting your skills confidently.",
    takeTestTitle: "Take a Test",
    takeTestText: "Give a test and increase your skills.",
  },
  hi: {
    title: "नौकरी जंक्शन",
    home: "होम",
    learning: "शिक्षा",
    guidance: "मार्गदर्शन",
    aiResumeBuilder: "एआई रिज़्यूमे बिल्डर",
    job: "नौकरी",
    internship: "इंटर्नशिप",
    freelancing: "फ्रीलांसिंग",
    community: "समुदाय",
    hello: "नमस्ते",
    jobsInternships:
      "अपनी कौशल और प्राथमिकताओं के अनुसार नौकरियां और इंटर्नशिप प्राप्त करें",
    searchPlaceholder: "नौकरियां और इंटर्नशिप खोजें",
    whatWeProvide: "हम क्या प्रदान करते हैं",
    learningSectionTitle: "शिक्षा अनुभाग",
    learningSectionText:
      "शिक्षा अनुभाग में पाठ्यक्रम, परीक्षण और प्रमाणपत्र शामिल हैं, जो बाजार के लिए आपकी कौशल को बेहतर बनाने में मदद करेंगे।",
    guidanceSectionTitle: "मार्गदर्शन और समर्थन",
    guidanceSectionText:
      "हमारा मेंटरशिप कार्यक्रम आपको करियर को बढ़ावा देने के लिए एक-पर-एक मार्गदर्शन और समर्थन प्रदान करता है।",
    resumeSectionTitle: "रिज़्यूमे निर्माण उपकरण",
    resumeSectionText:
      "एक मजबूत रिज़्यूमे उस विशेष नौकरी के अनुसार बनाया गया है जिसके लिए आप आवेदन कर रहे हैं।",
    interviewSectionTitle: "साक्षात्कार की तैयारी",
    interviewSectionText:
      "कंपनी का शोध करना, सामान्य साक्षात्कार प्रश्नों का अभ्यास करना और आत्मविश्वास से अपनी कौशल प्रस्तुत करना शामिल है।",
    takeTestTitle: "एक टेस्ट दें",
    takeTestText: "टेस्ट दें और अपनी कौशल बढ़ाएं।",
    trending: "ट्रेंडिंग",
  },
};

// Function to change the language of the page
function changeLanguage(lang) {
  // Updating the logo and menu items
  document.querySelector(".logo").innerHTML = translations[lang].title;
  document.querySelector(".menu a:nth-child(1)").innerHTML =
    translations[lang].home;
  document.querySelector(".menu a:nth-child(2)").innerHTML =
    translations[lang].learning;
  document.querySelector(".menu a:nth-child(3)").innerHTML =
    translations[lang].guidance;
  document.querySelector(".menu a:nth-child(4)").innerHTML =
    translations[lang].aiResumeBuilder;

  // Updating job icon text
  document.querySelector("#jobIcon").nextSibling.textContent =
    translations[lang].job;
  document.querySelector("#Internshipicon").nextSibling.textContent =
    translations[lang].internship;

  document.querySelector("#Communityicon").nextSibling.textContent =
    translations[lang].community;

  document.querySelector("#Freelancingicon").nextSibling.textContent =
    translations[lang].freelancing;
  // Updating main heading and text
  document.querySelector(".main h1").innerHTML = translations[lang].hello;
  document.querySelector(".main p").innerHTML =
    translations[lang].jobsInternships;

  // Updating search bar placeholder
  document
    .querySelector(".search-bar input")
    .setAttribute("placeholder", translations[lang].searchPlaceholder);

  // Updating "What We Provide" section
  document.querySelector(".sections h2").innerHTML =
    translations[lang].whatWeProvide;

  // Updating content sections
  document.querySelector(".section:nth-child(1) .text-section h2").innerHTML =
    translations[lang].learningSectionTitle;
  document.querySelector(".section:nth-child(1) .text-section p").innerHTML =
    translations[lang].learningSectionText;

  document.querySelector(".section:nth-child(2) .text-section h2").innerHTML =
    translations[lang].guidanceSectionTitle;
  document.querySelector(".section:nth-child(2) .text-section p").innerHTML =
    translations[lang].guidanceSectionText;

  document.querySelector(".section:nth-child(3) .text-section h2").innerHTML =
    translations[lang].resumeSectionTitle;
  document.querySelector(".section:nth-child(3) .text-section p").innerHTML =
    translations[lang].resumeSectionText;

  document.querySelector(".section:nth-child(4) .text-section h2").innerHTML =
    translations[lang].interviewSectionTitle;
  document.querySelector(".section:nth-child(4) .text-section p").innerHTML =
    translations[lang].interviewSectionText;

  document.querySelector(".section:nth-child(5) .text-section h2").innerHTML =
    translations[lang].takeTestTitle;
  document.querySelector(".section:nth-child(5) .text-section p").innerHTML =
    translations[lang].takeTestText;

  // NEW: Updating Internship, Community, and Freelancing sections
}

// Adding event listeners to language buttons
document
  .getElementById("language-en")
  .addEventListener("click", () => changeLanguage("en"));
document
  .getElementById("language-hi")
  .addEventListener("click", () => changeLanguage("hi"));
