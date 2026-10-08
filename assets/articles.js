// Resilient Futures Lab learning articles. Source links checked 7 October 2026.
// Fictional examples and fixed-rate scenarios are educational, not forecasts.
window.RFL_ARTICLES = [
  {
    "id": "check-the-answer",
    "title": "A confident answer still needs checking",
    "module": "ai",
    "minutes": 4,
    "summary": "An AI answer can sound polished and still get the important part wrong. Learn a quick way to check it.",
    "outcome": "Separate a claim, its source and the evidence that actually supports it.",
    "sections": [
      {
        "heading": "The scholarship that did not exist",
        "paragraphs": [
          "Imagine asking an AI assistant for a scholarship with a deadline next month. It gives you a title, a university name and a convincing link. The paragraph reads smoothly. But when you open the university website, the scholarship is nowhere to be found. Good writing made the answer feel researched, and it did not make the scholarship real.",
          "Generative AI can produce invented facts or references, often called hallucinations. It can also repeat outdated information or attach a real source to a claim that source does not support. A citation is an invitation to investigate, not the end of the investigation."
        ]
      },
      {
        "heading": "Check the part that changes your decision",
        "paragraphs": [
          "Start by underlining the claims you would act on: the deadline, eligibility rule, fee or required document. Open the original source yourself. Look for the relevant sentence and its date. A university admissions page is more useful for a scholarship deadline than an anonymous summary that mentions the university.",
          "Next, check whether the source says exactly what the answer claims. “Applications usually open in spring” does not establish a particular closing date. If the evidence is missing, write “not yet verified” beside the claim. Missing evidence is a reason to pause, even when the claim sounds plausible."
        ]
      },
      {
        "heading": "Use numbers as a second check",
        "paragraphs": [
          "Suppose a generated budget says that €180 rent, €90 food and €40 transport total €300. Add the numbers yourself: the total is €310. This small check can reveal an error without any specialist knowledge. For a longer calculation, use a calculator and make sure the units and time period match.",
          "For an unfamiliar topic, ask what would make the answer false. You might request a counterexample or an alternative explanation. That can expose weak reasoning, but another AI response is still not independent evidence."
        ]
      },
      {
        "heading": "Keep a short verification note",
        "paragraphs": [
          "A useful note has three parts: the claim, the source you checked and your conclusion. For example: “Deadline: 12 May. Checked the institution’s current application page. Confirmed.” If two reliable sources disagree, describe the disagreement instead of quietly choosing the nicer answer. The aim is to make your decision traceable."
        ]
      }
    ],
    "tryIt": "Take one factual sentence from an AI answer. Find an original source and write one sentence saying whether it supports the claim.",
    "question": {
      "prompt": "An AI provides a real article link. What should you do next?",
      "options": [
        "Accept the claim because the link works",
        "Check whether the article supports the exact claim",
        "Ask the same AI to promise it is correct"
      ],
      "correct": 1,
      "explanation": "A working link proves that a page exists. Reading the relevant passage tells you whether it supports the claim."
    },
    "sources": [
      {
        "label": "NIST: Generative AI risk profile",
        "url": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      }
    ]
  },
  {
    "id": "privacy-before-prompt",
    "title": "Before you paste: a privacy check",
    "module": "ai",
    "minutes": 4,
    "summary": "You can get useful help without giving a chatbot your whole life story.",
    "outcome": "Rewrite a request so it keeps useful context while removing unnecessary personal information.",
    "sections": [
      {
        "heading": "What does the task really need?",
        "paragraphs": [
          "You want help writing a complaint about a late delivery. The AI needs to know what happened, what outcome you want and the tone you prefer. It does not need your full address, card number or the password to your shopping account. Give it the problem, not every document connected to the problem.",
          "Try a simple question before uploading anything: would the answer still be useful if I removed this detail? If yes, remove it. You can replace names with “Customer A,” exact dates with a month, and an account number with “[account reference].” Add the real details yourself afterwards."
        ]
      },
      {
        "heading": "A name is only one identifier",
        "paragraphs": [
          "Removing a name does not always make a story anonymous. “The only student from my village in the robotics final last Tuesday” may identify someone perfectly. Photos, location details, document properties and combinations of ordinary facts can also reveal a person.",
          "Imagine asking for a study plan for a classmate. “A learner has three weeks and finds fractions difficult” is usually enough. Their diagnosis, school, family situation and full timetable may add risk without improving the exercise. When the information belongs to someone else, be especially careful about your authority to share it."
        ]
      },
      {
        "heading": "Settings are part of the decision",
        "paragraphs": [
          "AI services differ in what they retain, who can access conversations and whether content may be used to improve their systems. An educational or workplace account may have different arrangements from a personal account. Read the actual settings and policy for the service you are using, and do not assume that a reassuring interface means a private conversation.",
          "For school or work, follow the approved process for confidential information. If you cannot establish that a document may be uploaded, use a made-up example or ask an authorised person. A convenient shortcut is not a reason to disclose someone else’s records."
        ]
      },
      {
        "heading": "Practice with safer examples",
        "paragraphs": [
          "Compare these prompts: “Here is my bank statement,and fix my spending” and “Create a fictional monthly budget with €900 income, €420 rent and €180 groceries.” The second can teach the same budgeting method without sharing transaction history. Keep passwords, one-time codes and private identity documents out of general AI chats. Good privacy often starts with leaving things out."
        ]
      }
    ],
    "tryIt": "Rewrite a request for help with a job application. Replace identifying details with placeholders while keeping the skills and job requirements.",
    "question": {
      "prompt": "Which prompt shares the least unnecessary personal information?",
      "options": [
        "Here is my passport and full bank statement",
        "Here is my friend’s medical letter",
        "Help a fictional learner plan three study sessions each week"
      ],
      "correct": 2,
      "explanation": "The fictional example supplies the context needed for the task without exposing private records."
    },
    "sources": [
      {
        "label": "UNESCO: Generative AI in education and research",
        "url": "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
      },
      {
        "label": "NIST: Generative AI risk profile",
        "url": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      }
    ]
  },
  {
    "id": "prompts-that-help",
    "title": "Ask for the help you actually need",
    "module": "ai",
    "minutes": 4,
    "summary": "A useful prompt explains the job, the audience and what a good result would look like.",
    "outcome": "Build a prompt with a clear task, relevant context, constraints and a checkable output.",
    "sections": [
      {
        "heading": "Start with the job",
        "paragraphs": [
          "“Tell me about money” could produce almost anything. “Explain the difference between a discount and a percentage-point change to a beginner, using a €50 example” gives the assistant something concrete to do. You do not need a secret phrase. You need to know what you are trying to learn.",
          "Think of the prompt as instructions for a helpful classmate who missed the first half of the lesson. State the task, give the information they need and explain what the finished work should contain. If there is a word limit, a reading level or a format requirement, say so."
        ]
      },
      {
        "heading": "A prompt you can improve",
        "paragraphs": [
          "Here is a starting point: “I am learning about inflation. Explain purchasing power in everyday language. Use a fictional €100 shopping basket and 5% annual inflation. Show the calculation for two years, state the assumptions and finish with one practice question. Do not use current inflation figures.”",
          "This prompt has a subject, an audience, an example, a boundary and an output. You can check whether the response did those things. You can also check the maths: after two years the basket costs €100 × 1.05 × 1.05 = €110.25. A precise prompt makes review easier, and it cannot guarantee accuracy."
        ]
      },
      {
        "heading": "Ask for learning, not just completion",
        "paragraphs": [
          "If the goal is to learn, ask for a hint before the full answer. Try: “Give me one clue, let me attempt the problem, then explain the first mistake you find.” Or ask for two different examples that use the same rule. That makes you work with the idea rather than simply reading a finished solution.",
          "When an answer misses the point, change one instruction at a time. “Use shorter sentences” and “include a worked calculation” are more useful than “make it better.” Keep the parts that worked so you can tell whether the change helped."
        ]
      },
      {
        "heading": "Give uncertainty somewhere to go",
        "paragraphs": [
          "Ask the assistant to distinguish supplied facts from assumptions, and to identify what information is missing. If you need sources, verify them yourself. Instructions such as “do not invent references” can express your preference, but they are not a technical guarantee. Your final check should ask whether the answer is useful, accurate and appropriate for the task."
        ]
      }
    ],
    "tryIt": "Write a vague prompt and a clear version about the same topic. Predict one specific difference in the answers before you compare them.",
    "question": {
      "prompt": "Which change is most likely to make a vague prompt easier to evaluate?",
      "options": [
        "Add “be brilliant” five times",
        "Specify an audience, example and required output",
        "Ask for the longest possible answer"
      ],
      "correct": 1,
      "explanation": "Concrete requirements give you observable criteria for judging whether the response met the task."
    },
    "sources": [
      {
        "label": "UNESCO: Generative AI in education and research",
        "url": "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
      }
    ]
  },
  {
    "id": "data-is-not-neutral",
    "title": "What a tiny AI learns from its examples",
    "module": "ai",
    "minutes": 4,
    "summary": "A model can learn the wrong lesson from data that looks perfectly tidy.",
    "outcome": "Explain how missing examples and unsuitable labels can create uneven errors.",
    "sections": [
      {
        "heading": "The lunch classifier",
        "paragraphs": [
          "Suppose you train a tiny model to recognise apples and oranges. Every apple photo has a blue background. Every orange photo has a yellow background. The model performs beautifully on similar photographs. Then you put an apple on a yellow table and it calls the fruit an orange.",
          "The model found a pattern that worked in the examples. It did not necessarily learn the concept you intended. This is why a good training score does not settle whether an AI system will work in the real situation where people use it."
        ]
      },
      {
        "heading": "Count the errors that matter",
        "paragraphs": [
          "Now imagine a fictional study-support tool tested on 100 learners. It makes 10 mistakes overall, so its accuracy is 90%. But suppose 20 learners use a second language and 8 of the mistakes concern those learners. Its accuracy for that group is 12 out of 20, or 60%. For the other 80 learners, it is 78 out of 80, or 97.5%.",
          "The single headline score hides a large difference. This example does not tell us why the difference occurred. It tells us what to investigate: the examples, the language coverage, the labels, the task and the way success was measured."
        ]
      },
      {
        "heading": "More data is not the whole answer",
        "paragraphs": [
          "Adding another thousand examples from the same narrow source may reproduce the same problem. A dataset can omit relevant people, contain mistaken labels or describe a past process that already treated people unfairly. The choice of what to predict can also be wrong: predicting who previously received help is different from predicting who needs help.",
          "Ask who appears in the examples, who is missing and how the labels were produced. Also ask what happens after an error. A mistaken fruit label is inconvenient. A mistaken decision about a person’s access to support can have much greater consequences."
        ]
      },
      {
        "heading": "Test a change before celebrating it",
        "paragraphs": [
          "In the fruit exercise, collect apples and oranges on several backgrounds. Keep some photographs out of training and use them only for testing. Include unfamiliar lighting and camera angles. If performance improves, say precisely where it improved. Do not conclude that the model is “unbiased” because one test passed. Fairness requires choices about context, consequences and whose experience counts."
        ]
      }
    ],
    "tryIt": "Draw ten training examples for a fruit classifier. Deliberately add a misleading pattern, then design three test examples that would reveal it.",
    "question": {
      "prompt": "A model has 90% accuracy overall. Does that show it works equally well for everyone?",
      "options": [
        "Yes, because 90% is high",
        "No, errors may differ across relevant groups",
        "Yes, if the dataset is large"
      ],
      "correct": 1,
      "explanation": "An average can hide uneven error rates. Examine relevant groups and consequences as well as the overall score."
    },
    "sources": [
      {
        "label": "NIST: The sources of AI bias",
        "url": "https://www.nist.gov/news-events/news/2022/03/theres-more-ai-bias-biased-data-nist-report-highlights"
      }
    ]
  },
  {
    "id": "keep-the-decision",
    "title": "Keep a person in charge of the decision",
    "module": "ai",
    "minutes": 4,
    "summary": "AI can help you prepare a decision. Someone still needs to understand it and take responsibility for it.",
    "outcome": "Choose a level of review that matches the consequences of an AI error.",
    "sections": [
      {
        "heading": "Three tasks, three kinds of checking",
        "paragraphs": [
          "Consider three requests: suggest names for a school club, summarise a scholarship’s eligibility rules, and decide which applicant should receive funding. They all involve text, but the consequences are different. A dull club name is easy to replace. A wrong eligibility rule can make someone miss an opportunity. An unfair funding decision can harm a person directly.",
          "The amount of review should follow those consequences. For club names, taste and appropriateness may be enough. For eligibility, compare the summary with the official rules. For funding, the responsible people need a transparent process, relevant evidence and a way to challenge mistakes."
        ]
      },
      {
        "heading": "Review means more than clicking approve",
        "paragraphs": [
          "Imagine receiving an AI-generated shortlist with a score beside every applicant. If you do not know what the scores measure, you cannot meaningfully review the ranking. A human signature at the bottom does not repair a process nobody understands.",
          "A reviewer needs enough time, information and authority to disagree. That includes access to the underlying evidence, an explanation of relevant limitations and permission to stop the process. Ask yourself: could I explain this decision without saying “the computer said so”? If not, more work is needed."
        ]
      },
      {
        "heading": "Use AI to open options",
        "paragraphs": [
          "For a personal study decision, AI might compare two schedules, identify a clash or suggest questions to ask a teacher. You can then check those suggestions against your actual commitments. It is often useful to request alternatives: “What would change if I had only three hours?” or “Which assumption matters most?”",
          "Keep facts, suggestions and choices separate. A timetable deadline is a fact to verify. Studying in the morning is a suggestion to test. Choosing a plan is your decision. Mixing these categories makes an opinion look like a requirement."
        ]
      },
      {
        "heading": "Know when to bring in expertise",
        "paragraphs": [
          "For decisions affecting health, legal rights or major financial commitments, a fluent explanation cannot replace appropriate professional input. You can still use an assistant to organise questions or translate unfamiliar language into a first draft. Take the checked information and remaining uncertainties to someone qualified for the decision. Responsible use includes noticing when the task has become bigger than a convenient chat."
        ]
      }
    ],
    "tryIt": "Choose a task you might give AI. Write what could go wrong, who would be affected and the evidence a reviewer would need.",
    "question": {
      "prompt": "What makes human review meaningful?",
      "options": [
        "A person approves every output quickly",
        "A person can inspect evidence and has authority to change or stop the decision",
        "A person is mentioned in the policy"
      ],
      "correct": 1,
      "explanation": "Oversight needs information, time and the practical ability to intervene."
    },
    "sources": [
      {
        "label": "UNESCO: Generative AI in education and research",
        "url": "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
      },
      {
        "label": "NIST: Generative AI risk profile",
        "url": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      }
    ]
  },
  {
    "id": "ai-or-human",
    "title": "AI or human? Ask a better question",
    "module": "ai",
    "minutes": 4,
    "summary": "Guessing who made a paragraph is less useful than checking where it came from and whether it is trustworthy.",
    "outcome": "Distinguish authorship, authenticity and accuracy when evaluating digital material.",
    "sections": [
      {
        "heading": "Three questions that are easily confused",
        "paragraphs": [
          "A photograph can be genuine and presented with a false caption. A human can write an inaccurate explanation. An AI-assisted diagram can illustrate a mathematical rule correctly. “Was AI involved?” is therefore a different question from “Is this true?” and a different question again from “Who is responsible for publishing it?”",
          "Imagine a picture of a flooded street shared as breaking news about your town. Before studying the hands or shadows, ask who first published it, when it appeared and whether local reliable sources confirm the event. An old real photograph may mislead just as effectively as a newly generated one."
        ]
      },
      {
        "heading": "Style is a clue, not a verdict",
        "paragraphs": [
          "People sometimes associate tidy paragraphs, certain words or an unusually smooth voice with AI. None of those features proves how a text was produced. A person may write formally. A machine-generated draft may be heavily edited. Translation and accessibility tools can also change how someone’s writing sounds.",
          "Do not accuse a classmate of cheating because a paragraph feels unfamiliar. A fair discussion looks at the assignment rules and relevant evidence of the work process. Notes, drafts, cited sources and an explanation of the argument are more informative than a confident guess based on style alone."
        ]
      },
      {
        "heading": "Follow the material back",
        "paragraphs": [
          "Look for the original upload or publication, the named creator and the context around the extract. Does a quotation appear in the full interview? Was a graph cropped to hide the axis? Does the publisher explain how an illustration was made? A provenance record describes where material came from, and it does not automatically establish that every claim is accurate.",
          "If the origin cannot be established, you can say that. “Source not verified” is a useful conclusion. It leaves room for later evidence without repeating the material as a fact."
        ]
      },
      {
        "heading": "Be clear about your own process",
        "paragraphs": [
          "When using AI in a project, follow the relevant disclosure rules and describe its role accurately. “I used AI to suggest an outline, and I wrote the analysis and checked the sources” is more informative than a vague badge. Keep records where the task requires them. Your responsibility is to make the work understandable and honest, including the parts where tools helped."
        ]
      }
    ],
    "tryIt": "Find a public image with a factual caption. Identify its earliest reliable source and explain what that source does and does not establish.",
    "question": {
      "prompt": "Which statement is correct?",
      "options": [
        "Human-made material is always true",
        "Knowing who made something settles every factual question",
        "Authorship and accuracy are separate questions"
      ],
      "correct": 2,
      "explanation": "A source can help establish origin, but its claims still need appropriate evidence."
    },
    "sources": [
      {
        "label": "NIST: Generative AI risk profile",
        "url": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
      },
      {
        "label": "UNESCO: Generative AI in education and research",
        "url": "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
      }
    ]
  },
  {
    "id": "pause-check-verify",
    "title": "The message wants you to hurry",
    "module": "safety",
    "minutes": 4,
    "summary": "Phishing works by turning a believable message into a rushed decision. Give yourself a better route.",
    "outcome": "Respond to an unexpected message by verifying the request through an independent channel.",
    "sections": [
      {
        "heading": "A small payment with a big consequence",
        "paragraphs": [
          "Your phone buzzes: “Your parcel could not be delivered. Pay €1.80 now to rearrange delivery.” You are expecting a parcel, and €1.80 sounds harmless. But the payment page may be collecting card details. The amount is part of the story that makes the request feel ordinary.",
          "Phishing is an attempt to trick you into revealing information or taking an unsafe action by pretending to be a trusted sender. It can arrive by email, text, social media or another messaging service. The sender may use a familiar logo and write without a single spelling mistake."
        ]
      },
      {
        "heading": "Read the action, not just the greeting",
        "paragraphs": [
          "Ask what the message wants you to do. Enter a password? Share a verification code? Download a file? Pay a fee? An urgent request involving access or money deserves a pause, even when the greeting uses your real name.",
          "Consider a fictional message from “Student Support” saying your grant will disappear unless you sign in within ten minutes. You do not need to prove that the message is fake before choosing a safer route. Open the institution’s website yourself, or contact its support office using details you already know are genuine."
        ]
      },
      {
        "heading": "An independent route matters",
        "paragraphs": [
          "Replying to the message or calling the number inside it keeps you in the sender’s system. Instead, use a saved official app, a trusted bookmark or contact details obtained separately. Check the account there. If the request is real, the organisation should be able to confirm it.",
          "The padlock or HTTPS in a browser means the connection is encrypted. It does not certify that the organisation behind the page is honest. A familiar-looking address can also contain an extra word or a misleading subdomain. Careful reading helps, but independent verification is the more dependable habit."
        ]
      },
      {
        "heading": "What a good response looks like",
        "paragraphs": [
          "You might say to yourself: “I am expecting a parcel, but I will check in the delivery company’s app.” If there is no request there, report the suspicious message using the service’s reporting option and delete it. If you already entered details, move straight to recovery steps. The useful skill is a calm next action, not perfect detection or feeling embarrassed about a convincing message."
        ]
      }
    ],
    "tryIt": "Invent a suspicious parcel text. Underline the requested action, then write the independent route you would use to verify it.",
    "question": {
      "prompt": "A bank text says your account will close unless you sign in using its link. What is the best first move?",
      "options": [
        "Use the link because the message knows your name",
        "Open the bank’s official app independently",
        "Reply with your password so they can check"
      ],
      "correct": 1,
      "explanation": "An independently opened official app lets you check the situation without trusting the message’s link."
    },
    "sources": [
      {
        "label": "FTC: Recognising and avoiding phishing",
        "url": "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams"
      }
    ]
  },
  {
    "id": "protect-your-accounts",
    "title": "Give your accounts a second lock",
    "module": "safety",
    "minutes": 4,
    "summary": "Unique passwords and another sign-in factor can stop one mistake becoming several lost accounts.",
    "outcome": "Explain why password reuse is risky and choose practical account protection steps.",
    "sections": [
      {
        "heading": "One password, several doors",
        "paragraphs": [
          "Imagine using the same password for a game, your email and an online shop. If that password is exposed by one service, someone can try it at the others. They do not need to guess your whole life story. They need only test a combination that has already worked somewhere.",
          "Using a different password for each account limits that chain reaction. Long, randomly generated passwords stored in a reputable password manager are a practical option. Protect the manager itself carefully, and follow its recovery instructions before you need them. Never use a real password in a classroom exercise."
        ]
      },
      {
        "heading": "What the extra factor does",
        "paragraphs": [
          "Multi-factor authentication, or MFA, asks for another kind of evidence when you sign in. For example, you might use a password and a code from an authenticator app. A stolen password alone is then less useful to an attacker.",
          "Not every method offers the same protection. Where supported, security keys and suitable passkeys can provide strong protection against phishing. An authenticator app is another useful option. Text-message codes can still add protection when that is the available choice, but control of a phone number is not the same as control of a dedicated security key."
        ]
      },
      {
        "heading": "Do not approve a login you did not start",
        "paragraphs": [
          "Suppose your phone asks you to approve a login while you are eating lunch and not using the account. Do not tap approve just to make the notification disappear. Open the account’s security settings through its official app or website and investigate. An unexpected prompt may mean someone has your password.",
          "One-time codes are not ordinary customer-service information. A caller may say they need a code to “stop fraud,” while actually trying to complete a login. Only enter a code into the genuine process you deliberately started. Do not read it to an unexpected caller."
        ]
      },
      {
        "heading": "Make recovery possible",
        "paragraphs": [
          "Protect your main email account because it often receives password-reset messages for other accounts. Check that recovery contact details are yours and current. Store backup codes securely, away from public notes or shared folders. Think through what you would do if your phone were lost. Account protection works best when normal sign-in and recovery are both considered, rather than when a strong lock has no usable spare key."
        ]
      }
    ],
    "tryIt": "Without writing any passwords down here, identify your three most important accounts and check which extra sign-in methods they offer.",
    "question": {
      "prompt": "Why does using a unique password for every account help?",
      "options": [
        "It makes every website trustworthy",
        "A password exposed at one service will not unlock your other accounts",
        "It means recovery settings are unnecessary"
      ],
      "correct": 1,
      "explanation": "Unique passwords limit the damage from a single password leak. They work alongside MFA and secure recovery settings."
    },
    "sources": [
      {
        "label": "FTC: Two-factor authentication",
        "url": "https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts"
      },
      {
        "label": "NCSC: Managing passwords and passkeys",
        "url": "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers"
      },
      {
        "label": "NCSC: Setting up two-step verification",
        "url": "https://www.ncsc.gov.uk/guidance/setting-2-step-verification-2sv"
      }
    ]
  },
  {
    "id": "voice-is-not-proof",
    "title": "It sounds like your friend. Check anyway.",
    "module": "safety",
    "minutes": 4,
    "summary": "An urgent voice message can feel more convincing than text. Identity still needs verification.",
    "outcome": "Verify an unexpected request for money without relying on a familiar voice or profile.",
    "sections": [
      {
        "heading": "A believable emergency",
        "paragraphs": [
          "A voice message arrives from a new number: “It is me. My phone is broken. I need €80 for the train, and I cannot talk.” The voice sounds familiar. Your first reaction is to help. That reaction makes sense, and the message is designed around a situation in which helping feels urgent.",
          "A voice can be imitated with AI, and a real account can be taken over. A profile photograph, caller name or familiar writing style is therefore not enough to establish who is making the request. You do not have to identify the technology used before deciding to verify."
        ]
      },
      {
        "heading": "Change the channel",
        "paragraphs": [
          "Contact your friend using a number or route you already trust. If you cannot reach them, try someone who can check their situation. Avoid using a new number supplied by the same message as your only confirmation. You are looking for evidence outside the suspicious conversation.",
          "A simple reply might be: “I will call you on the number I have saved.” You are not being unkind. You are making sure help reaches the right person. A genuine emergency may still need a quick response, but quick does not have to mean unverified."
        ]
      },
      {
        "heading": "Look at the whole request",
        "paragraphs": [
          "Secrecy and pressure deserve attention: “Do not tell anyone,” “You have two minutes,” or “The bank must not know.” So do unusual payment routes and instructions to move money to a supposedly safe account. Those features matter more than whether a video has an odd blink.",
          "Imagine the same message came from a stranger. Would you still send the money? This question helps separate the emotional pull of the identity from the actual evidence. Discuss a family or household verification plan in advance, especially for urgent requests involving money. A private check phrase may help, but use it alongside independent contact."
        ]
      },
      {
        "heading": "Do not make suspicion contagious",
        "paragraphs": [
          "If a friend’s account may be compromised, warn them through another route and report the account to the platform. Avoid publicly reposting the suspicious audio with the person’s private details. If the request turns out to be genuine, explain that you checked because impersonation is possible. The goal is reliable contact and useful help, not treating every message as a lie."
        ]
      }
    ],
    "tryIt": "Write a two-sentence response to an urgent money request from a “new number.” Include how you will verify it independently.",
    "question": {
      "prompt": "Which evidence is strongest for an unexpected emergency request?",
      "options": [
        "The voice sounds familiar",
        "The profile has a family photograph",
        "You reach the person through an already trusted contact route"
      ],
      "correct": 2,
      "explanation": "Independent contact is stronger than features that can be copied or accounts that may have been compromised."
    },
    "sources": [
      {
        "label": "FTC: AI voice impersonation scams",
        "url": "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes"
      }
    ]
  },
  {
    "id": "opportunity-or-trap",
    "title": "A job offer should survive a careful check",
    "module": "safety",
    "minutes": 4,
    "summary": "A promising job or scholarship can still be a trap. Follow the organisation, the money and the paperwork.",
    "outcome": "Identify warning signs in an opportunity and verify the provider before sharing information or paying.",
    "sections": [
      {
        "heading": "The offer arrives at the right moment",
        "paragraphs": [
          "You are looking for part-time work. A message offers flexible hours, easy tasks and excellent pay. The interview happens by chat. Then comes the catch: pay a registration charge, buy equipment from a particular website, or deposit money to unlock your earnings. The attractive offer has become a demand for your money.",
          "Pause when earning money requires you to send money first. Also question jobs that ask you to receive and forward transfers or packages for strangers. A professional logo and an apparently friendly recruiter do not establish that the work is legitimate."
        ]
      },
      {
        "heading": "Verify the opportunity separately",
        "paragraphs": [
          "Find the organisation’s official website independently and look for the vacancy or programme. Contact a published office address or number to ask whether the offer is genuine. A real organisation can be impersonated, so discovering that the organisation exists is only the beginning.",
          "For a scholarship, identify who awards it, the written eligibility conditions, the selection process and the official application route. Be wary of a guaranteed award that requires an urgent “release fee.” Where a legitimate application process has any charge, confirm it directly with the institution and understand exactly what it buys before paying."
        ]
      },
      {
        "heading": "Keep the first application proportionate",
        "paragraphs": [
          "An early conversation may need a CV and a description of your skills. It should not require your banking password, verification codes or access to your accounts. Identity and payroll checks may occur later in a genuine hiring process, but verify the employer and the secure submission route before sending sensitive documents.",
          "Consider a fictional offer: two hours of work each week for €1,500 a month, no experience needed, acceptance required tonight. No single number proves fraud, but the combination deserves serious scrutiny. Ask for written duties, a contract and a verifiable contact. Discuss the offer with someone you trust."
        ]
      },
      {
        "heading": "Promises are not payments",
        "paragraphs": [
          "A dashboard showing “earnings” does not prove that you can withdraw real money. A payment appearing temporarily in an account does not always mean it cannot be reversed. Do not send money onward merely because someone claims an overpayment. If you have already paid or shared sensitive information, contact the relevant bank or service promptly through its official channel and preserve the conversation."
        ]
      }
    ],
    "tryIt": "List five facts you would verify before accepting an online job. For each fact, name a source outside the recruiter’s messages.",
    "question": {
      "prompt": "A task platform says you must deposit €50 to withdraw €200 in earnings. What should you do?",
      "options": [
        "Pay quickly to protect the earnings",
        "Stop and independently verify the platform before sending money",
        "Borrow €50 from a friend"
      ],
      "correct": 1,
      "explanation": "A request to pay money to release supposed earnings is a serious warning sign. Do not rely on the platform’s own balance display."
    },
    "sources": [
      {
        "label": "FTC: Job scams",
        "url": "https://consumer.ftc.gov/articles/job-scams"
      }
    ]
  },
  {
    "id": "small-print-big-cost",
    "title": "The real price is bigger than the button",
    "module": "safety",
    "minutes": 4,
    "summary": "Delivery fees, renewals and cancellation rules can change what a good deal actually costs.",
    "outcome": "Compare the total cost of an online purchase or subscription before agreeing.",
    "sections": [
      {
        "heading": "A monthly price hides a yearly decision",
        "paragraphs": [
          "A study app advertises €6.99 a month. That sounds smaller than €83.88 a year, but the arithmetic describes the same twelve monthly payments. If the advertised rate requires annual billing, you may have to pay the whole amount at once. Read the payment schedule as well as the price.",
          "Write down four things before subscribing: what you pay today, what you will pay later, when it renews and how to cancel. “Free trial” describes the starting period, not necessarily the whole agreement. Set a reminder early enough to make a considered choice."
        ]
      },
      {
        "heading": "Compare like with like",
        "paragraphs": [
          "Suppose Shop A sells headphones for €32 with €8 delivery. Shop B sells them for €37 with delivery included. If the products and other terms are equivalent, the totals are €40 and €37. The cheaper headline price does not produce the cheaper purchase.",
          "Now add the practical details. Is the seller identifiable? What happens if the product is faulty? Who pays return postage? When should delivery happen? A price comparison becomes useful only after you know what you are buying and from whom. Keep a copy of the description and order confirmation."
        ]
      },
      {
        "heading": "A review is another claim to evaluate",
        "paragraphs": [
          "A wall of five-star reviews can feel reassuring. Look for specific experiences, a range of dates and information beyond the seller’s own page. Search for the seller’s name and complaints, while remembering that an absence of complaints is not a guarantee. Reviews may be misleading, paid for or about a different product.",
          "Countdown timers and “only one left” notices encourage an immediate decision. Step away for a moment and ask whether you wanted the product before the timer appeared. A discount does not create a need, and a deal that cannot survive a short check may not deserve your money."
        ]
      },
      {
        "heading": "Make future-you’s job easier",
        "paragraphs": [
          "Save the cancellation instructions when you sign up, rather than searching for them on the renewal date. Check statements for payments you do not recognise and use the provider’s official support route for disputes. Consumer rights and payment protections depend on the jurisdiction and transaction, so consult your local consumer authority when needed. For everyday decisions, a written total and a clear exit route prevent many unpleasant surprises."
        ]
      }
    ],
    "tryIt": "Compare two fictional subscriptions: €9 each month, or €90 billed annually. Calculate the yearly difference and identify one reason the monthly option might still suit someone.",
    "question": {
      "prompt": "Which figure best describes a €25 item with €7 delivery?",
      "options": [
        "€25, because that is the product price",
        "€32 before any other applicable charges",
        "€18, because delivery is separate"
      ],
      "correct": 1,
      "explanation": "Add all unavoidable charges when comparing total prices. Payment timing and return conditions also matter."
    },
    "sources": [
      {
        "label": "FTC: Online shopping",
        "url": "https://consumer.ftc.gov/articles/online-shopping"
      }
    ]
  },
  {
    "id": "after-a-scam",
    "title": "If something went wrong, start here",
    "module": "safety",
    "minutes": 4,
    "summary": "A calm response can limit the damage. You do not need to solve everything at once.",
    "outcome": "Choose recovery actions according to whether money, account access or device security was affected.",
    "sections": [
      {
        "heading": "First, work out what happened",
        "paragraphs": [
          "Did you only read a suspicious message, click a link, enter a password, send money or install software? These are different situations. Write down what you did and when, while it is fresh in your mind. You do not need a perfect technical explanation before asking for help.",
          "Being deceived is not a character flaw. Scams are built to exploit urgency, trust and ordinary distractions. If you are young or unsure what to do, bring in a trusted adult or your organisation’s support team. A second person can help you take practical steps without panic."
        ]
      },
      {
        "heading": "If money or account details were involved",
        "paragraphs": [
          "Contact your bank or payment provider immediately through its official app, website or a trusted phone number. Explain the payment and ask what can be stopped, secured or recovered. Keep transaction details. A refund is not guaranteed, and options vary, but delay can reduce the available options.",
          "If you entered a password, change it through the genuine service using a trusted device. Change it anywhere else you reused it. Review recovery details and active sessions, sign out unfamiliar sessions where possible, and enable stronger sign-in protection. Start with the email account if it controls password resets for your other accounts."
        ]
      },
      {
        "heading": "If you installed something",
        "paragraphs": [
          "If someone persuaded you to install remote-access software or you suspect malware, stop interacting with them. Disconnect the affected device from the network if you suspect continuing access, and seek help from a trusted IT professional or your organisation’s support team. Use a separate trusted device for sensitive recovery tasks.",
          "Keep relevant messages, receipts and screenshots when you can do so safely. Record the sender’s details and the site address without revisiting a suspicious page unnecessarily. Report the incident to the platform and the appropriate local fraud, police or consumer-protection service. Follow the guidance appropriate to your country and situation."
        ]
      },
      {
        "heading": "Watch for the second approach",
        "paragraphs": [
          "After a scam, another person may promise to recover everything for an upfront fee. Treat unsolicited recovery offers with the same caution as the original request. Use verified institutions and official support routes. Tell close contacts if an account was used to impersonate you. Finally, make one concrete change, such as replacing a reused password or agreeing an independent check for money requests. Recovery is a sequence of manageable actions."
        ]
      }
    ],
    "tryIt": "Make a fictional incident note with four fields: what happened, when, what was shared and which official service to contact first.",
    "question": {
      "prompt": "You sent money to a scammer. What should you do promptly?",
      "options": [
        "Wait several days in case it resolves itself",
        "Pay a stranger who guarantees recovery",
        "Contact the payment provider through an official channel"
      ],
      "correct": 2,
      "explanation": "The payment provider can explain available actions. Act promptly, preserve evidence and do not assume recovery is guaranteed."
    },
    "sources": [
      {
        "label": "FTC: What to do after a scam",
        "url": "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed"
      },
      {
        "label": "FTC: Two-factor authentication",
        "url": "https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts"
      }
    ]
  },
  {
    "id": "budget-with-room",
    "title": "A budget that leaves room for real life",
    "module": "money",
    "minutes": 4,
    "summary": "A budget is a plan for the money you have, including the days when things do not go to plan.",
    "outcome": "Balance a monthly budget and distinguish regular spending, irregular costs and emergency savings.",
    "sections": [
      {
        "heading": "Start with money that actually arrives",
        "paragraphs": [
          "In a fictional month, Sam receives €1,000 after deductions. Rent is €400, groceries €180, transport €60, phone and internet €30, and other regular bills €80. Those costs total €750. Sam has €250 left to allocate, not €250 that has somehow become free of responsibilities.",
          "A budget gives that remainder a job. Sam sets aside €80 for unexpected costs, €70 for a course, and €100 for flexible spending. The total allocation is €1,000. These are example choices, not a recommended formula for everyone. Real needs depend on circumstances, income and responsibilities."
        ]
      },
      {
        "heading": "Some surprises are predictable",
        "paragraphs": [
          "An annual €120 subscription is not a €120 monthly cost. Setting aside €10 each month prepares for the renewal. A winter coat or bicycle repair may not have an exact date, but you can still make room for irregular expenses. This is different from pretending that every month will look like the last one.",
          "An emergency buffer covers genuinely unexpected needs. There is no single amount that fits every household. Start by identifying one realistic disruption and the money it would require. Even a small reserve can create options, but a low income may leave little room to save. That is a constraint to recognise, not a personal failure."
        ]
      },
      {
        "heading": "Timing matters as much as totals",
        "paragraphs": [
          "Suppose Sam’s income arrives on the 20th, while rent is due on the 1st. A monthly total that balances does not guarantee enough cash on the right day. Put payment dates on a simple calendar and carry forward the balance after each item.",
          "Needs and wants are useful categories, but context matters. Internet may be necessary for work or study. A low-cost social activity may support wellbeing. Ask what can be changed, by how much and with what consequence, rather than treating every enjoyable expense as a mistake."
        ]
      },
      {
        "heading": "Review without judging yourself",
        "paragraphs": [
          "If groceries cost €195 instead of €180, the difference is €15. Decide whether another flexible category can absorb it or whether next month’s estimate should change. A budget is information for the next decision. Track only enough detail to make that decision clearer. When income is uncertain, compare a cautious month with a better month and avoid committing money that has not yet arrived."
        ]
      }
    ],
    "tryIt": "Using Sam’s example, add a €45 unexpected repair. Find two different ways to rebalance the plan and explain the trade-off in each.",
    "question": {
      "prompt": "You expect a €240 annual bill. How much would you set aside monthly over twelve months, ignoring interest?",
      "options": [
        "€12",
        "€20",
        "€24"
      ],
      "correct": 1,
      "explanation": "€240 ÷ 12 = €20 each month. Planning for a known annual bill is different from an unexpected emergency."
    },
    "sources": [
      {
        "label": "CFPB: Budgeting and money tools",
        "url": "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"
      }
    ]
  },
  {
    "id": "percentages-in-the-wild",
    "title": "Percentages you can use in a shop",
    "module": "money",
    "minutes": 4,
    "summary": "Discounts, price increases and percentage points become easier when you keep track of the starting amount.",
    "outcome": "Calculate a percentage change and explain why equal percentage rises and falls do not cancel.",
    "sections": [
      {
        "heading": "A percentage is a share of something",
        "paragraphs": [
          "Twenty per cent means twenty out of a hundred, or 0.20. A 20% discount on a €50 jacket saves 0.20 × €50 = €10. You pay €40. The important question is “twenty per cent of what?” Here the base is the original €50 price.",
          "If a €40 item rises to €50, the increase is €10 divided by the original €40: 25%. The same €10 difference can represent different percentages because the starting amount changes. Write the base beside your calculation before using a calculator."
        ]
      },
      {
        "heading": "Two discounts do not simply add",
        "paragraphs": [
          "A shop offers 20% off a €100 bag, then another 10% off the reduced price. After the first discount the price is €80. The second discount saves €8, so you pay €72. The combined discount is 28%, not 30%. Each percentage acts on the amount at that stage.",
          "The same idea explains why a 20% loss followed by a 20% gain does not restore the starting value. €100 becomes €80, then €96. To return from €80 to €100 requires a €20 gain, which is 25% of €80. This is arithmetic, whether the example concerns prices, savings or a game score."
        ]
      },
      {
        "heading": "Per cent or percentage points?",
        "paragraphs": [
          "Suppose an annual rate changes from 2% to 3%. It rises by one percentage point. Relative to the original rate, it rises by 50%, because (3 − 2) ÷ 2 = 0.50. Both statements are correct, but they answer different questions.",
          "When reading a headline, ask whether it describes the difference between two percentages or a percentage change in the rate itself. Writing “from 2% to 3%” is often the clearest way to communicate what happened. The dramatic-sounding version is not always the most informative one."
        ]
      },
      {
        "heading": "Check the euro amount too",
        "paragraphs": [
          "A 50% discount on €4 saves €2. A 10% discount on €100 saves €10. A bigger percentage does not automatically mean a bigger saving. Also compare the final price with alternatives and ask whether you need the item. Percentage arithmetic helps you evaluate an offer, and it does not tell you that making the purchase is worthwhile."
        ]
      }
    ],
    "tryIt": "A €60 item is reduced by 15%, then a €4 delivery fee is added. Calculate the final cost and compare it with a €56 delivered offer.",
    "question": {
      "prompt": "A €100 balance falls by 10%, then rises by 10%. What is the final balance?",
      "options": [
        "€100",
        "€99",
        "€101"
      ],
      "correct": 1,
      "explanation": "€100 × 0.90 × 1.10 = €99. The gain applies to the smaller €90 base."
    },
    "sources": [
      {
        "label": "FTC: Online shopping",
        "url": "https://consumer.ftc.gov/articles/online-shopping"
      }
    ]
  },
  {
    "id": "compound-interest",
    "title": "When interest starts earning interest",
    "module": "money",
    "minutes": 4,
    "summary": "Compound interest is repeated multiplication. Time and contributions both matter, but a smooth curve is not a promise.",
    "outcome": "Calculate compound growth and distinguish deposited money from interest in a projection.",
    "sections": [
      {
        "heading": "Follow one hundred euros",
        "paragraphs": [
          "Imagine €100 earning a fixed 5% a year, with interest added once at the end of each year. After year one you have €105. In year two, 5% applies to €105, producing €5.25 interest and a total of €110.25. That extra €0.25 is interest earned on earlier interest.",
          "After three years the balance is €100 × 1.05 × 1.05 × 1.05 = €115.76, rounded to cents. With simple interest on the original €100 only, the total would be €115. Compounding changes the amount on which the next round of interest is calculated."
        ]
      },
      {
        "heading": "The rule behind the curve",
        "paragraphs": [
          "For an initial amount P, a fixed annual rate r written as a decimal, and n years, annual compounding gives P × (1 + r)ⁿ. The formula assumes no deposits, withdrawals, taxes or fees. If a calculator uses monthly compounding, it must say how the annual rate is converted into a monthly rate.",
          "A nominal annual rate of 12% divided into monthly rates gives 1% per month. Over a year the growth factor is 1.01¹², about 1.1268, so the effective annual growth is about 12.68%. An effective annual rate of 12% is a different input. Labels matter."
        ]
      },
      {
        "heading": "Add regular saving carefully",
        "paragraphs": [
          "Suppose you start with €100 and add €20 at the end of every month for one year. With no interest, the final amount is €340: €100 + 12 × €20. Any calculator should reproduce that result when the rate is zero. It is a useful check on a complicated-looking graph.",
          "If interest is positive, earlier deposits earn interest for longer than later ones. Moving a deposit from the end to the beginning of each month therefore changes the answer. Contributions and timing can matter more than a small difference in the assumed rate."
        ]
      },
      {
        "heading": "Read a projection honestly",
        "paragraphs": [
          "A constant-rate curve shows what follows from an assumption. It does not forecast an investment’s actual path. Rates may change, returns may be negative, and fees, taxes and inflation affect the result. Try a lower rate and a shorter saving period. Ask which part of the final balance is your own contributions and which part depends on growth. A useful projection makes its assumptions visible."
        ]
      }
    ],
    "tryIt": "Calculate €200 growing at 4% with annual compounding for two years. Then calculate the result with no growth and €10 added at each month-end for two years.",
    "question": {
      "prompt": "At 5% annual compounding, what does €100 become after two years, without other payments?",
      "options": [
        "€110.00",
        "€110.25",
        "€125.00"
      ],
      "correct": 1,
      "explanation": "The calculation is €100 × 1.05² = €110.25. The second year earns interest on €105."
    },
    "sources": [
      {
        "label": "SEC Investor.gov: Compound interest calculator",
        "url": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
      }
    ]
  },
  {
    "id": "inflation-and-you",
    "title": "More euros, less buying power?",
    "module": "money",
    "minutes": 4,
    "summary": "Your balance can grow while the amount it buys shrinks. Inflation explains how both can happen.",
    "outcome": "Distinguish nominal amounts from purchasing power and calculate a simple real return.",
    "sections": [
      {
        "heading": "Follow the shopping basket",
        "paragraphs": [
          "A fictional basket of everyday items costs €100 today. If its price rises by 5% over a year, it costs €105 next year. Your unchanged €100 no longer buys the whole basket. This is the basic idea of lost purchasing power.",
          "Inflation measures a broad change in prices, rather than the change in one item. Published measures use a weighted basket. Your own experience may differ because your spending is different: someone paying a large energy bill is affected differently from someone whose largest expense is a fixed rent."
        ]
      },
      {
        "heading": "A lower rate is not a lower price",
        "paragraphs": [
          "Suppose the €100 basket rises by 10% in year one and 2% in year two. It costs €110 after year one and €112.20 after year two. Inflation has slowed, but the basket is still more expensive. Prices would need to fall for that basket’s price level to move down.",
          "When comparing a headline with your memory of prices several years ago, make sure the periods match. A one-year rate does not describe the entire increase since you first bought an item. Repeated changes compound because each year starts from the previous year’s price."
        ]
      },
      {
        "heading": "Nominal and real returns",
        "paragraphs": [
          "Suppose €100 in savings grows by 3% to €103 while the basket price rises by 5% to €105. The balance has increased in nominal terms: there are more euros. But it buys 103 ÷ 105, or about 0.981, of the original basket. Purchasing power has fallen by about 1.90%.",
          "The exact one-year real return is (1 + nominal return) ÷ (1 + inflation) − 1. Here that is 1.03 ÷ 1.05 − 1. Subtracting inflation from the nominal return gives a useful approximation at modest rates: 3% − 5% = −2%. It is close, not exact."
        ]
      },
      {
        "heading": "Use the idea without predicting the future",
        "paragraphs": [
          "In the Inflation Time Machine, treat the rate as a hypothetical scenario. A constant 3% for ten years is an assumption, not a claim about future prices. Compare the cost of a future goal with the purchasing power of a future balance. Keeping both in the same year’s money makes the comparison fair and prevents a large-looking number from hiding a smaller real improvement."
        ]
      }
    ],
    "tryIt": "A €200 goal becomes 4% more expensive after one year. Your €200 grows by 2%. Calculate both amounts and the remaining gap.",
    "question": {
      "prompt": "Inflation falls from 8% to 3%, with both rates positive. What does that mean?",
      "options": [
        "The general price level is falling",
        "Prices are rising more slowly",
        "Everything now costs 5% less"
      ],
      "correct": 1,
      "explanation": "A lower positive inflation rate means slower price increases. It does not mean the previous increases have been reversed."
    },
    "sources": [
      {
        "label": "European Central Bank: What is inflation?",
        "url": "https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_inflation.en.html"
      }
    ]
  },
  {
    "id": "borrowing-cost",
    "title": "The monthly payment is only part of the story",
    "module": "money",
    "minutes": 4,
    "summary": "Borrowing has a price, a timetable and conditions. Read all three before comparing offers.",
    "outcome": "Explain interest, fees, APR and repayment timing using a simple debt example.",
    "sections": [
      {
        "heading": "What happens to a debt balance?",
        "paragraphs": [
          "Imagine a fictional €1,000 debt with interest charged at 1% each month. At the end of the first month, before payment, the balance is €1,010. If you then pay €50, it falls to €960. The next month’s interest is €9.60, and another €50 payment leaves €919.60.",
          "This simplified example assumes no fees, no new borrowing and payments after interest is added. It shows why the order matters. A payment first covers the interest in the example, with the remainder reducing the balance. Paying €5 in the first month would leave €1,005, so the debt would grow despite a payment."
        ]
      },
      {
        "heading": "A small payment can mean a long commitment",
        "paragraphs": [
          "Without payments, the same €1,000 would become €1,000 × 1.01¹² = about €1,126.83 after a year. That is 12.68% effective annual growth in the debt. The monthly rate of 1% is not an annual rate of 1%. Always compare rates over the same period.",
          "A lower required monthly payment may help short-term cash flow but extend repayment and increase total interest. Compare the total amount repayable, the number of payments and what happens if a payment is late. “Affordable this month” and “low total cost” are different questions."
        ]
      },
      {
        "heading": "Interest rate and APR",
        "paragraphs": [
          "An interest rate describes the charge for borrowing the principal. An annual percentage rate, or APR, is a standardised annual cost measure that can include relevant fees under the applicable rules. The exact definition and disclosures depend on the product and jurisdiction. Do not assume that every charge is captured by a headline number.",
          "For a deliberately simple one-year example, you receive €1,000 and repay €1,080 at the end, with no other payments or charges. The cost is €80, or 8% of the amount received. If €40 is deducted upfront but €1,080 is still due, you receive only €960. The cost relative to that amount is €120 ÷ €960 = 12.5%."
        ]
      },
      {
        "heading": "Know what the calculator leaves out",
        "paragraphs": [
          "A borrowing simulator is useful for exploring payment size and timing. A real agreement may include variable rates, grace periods, daily interest, penalties or other conditions. Read the schedule and ask for unclear terms to be explained. These examples teach the mathematics, and they do not recommend a loan or replace the terms of an actual contract."
        ]
      }
    ],
    "tryIt": "In the 1%-per-month example, compare a first payment of €20 with a first payment of €80. Calculate each remaining balance.",
    "question": {
      "prompt": "Why can a loan’s APR differ from its advertised interest rate?",
      "options": [
        "APR always ignores fees",
        "Relevant fees and the timing of payments affect the annual cost measure",
        "APR is the monthly payment in euros"
      ],
      "correct": 1,
      "explanation": "APR helps express borrowing costs annually and may include relevant fees. Check the product’s disclosures and applicable rules."
    },
    "sources": [
      {
        "label": "CFPB: Interest rate and APR",
        "url": "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/"
      },
      {
        "label": "SEC Investor.gov: Compound interest calculator",
        "url": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
      }
    ]
  },
  {
    "id": "spread-the-risk",
    "title": "Spread risk, then ask what is still shared",
    "module": "money",
    "minutes": 4,
    "summary": "Owning several things helps only if you understand how their risks connect.",
    "outcome": "Calculate an expected payoff and explain both the usefulness and limits of diversification.",
    "sections": [
      {
        "heading": "Two stalls at a fictional fair",
        "paragraphs": [
          "Imagine a one-day fair with two possible weather outcomes: sunny or rainy, each with a 50% chance. A cold-drinks stall earns €120 on a sunny day and €40 on a rainy day. Its expected earning is 0.5 × €120 + 0.5 × €40 = €80. Expected means a probability-weighted average, not a promised result.",
          "An indoor hot-drinks stall earns €40 if it is sunny and €120 if it rains. Its expected earning is also €80. If you own half of each stall, your combined earning is €80 in either weather outcome. In this intentionally tidy example, opposite weather exposure removes that particular uncertainty."
        ]
      },
      {
        "heading": "Count different risks, not just different names",
        "paragraphs": [
          "Now replace the hot-drinks stall with another outdoor cold-drinks stall that has the same earnings in each weather condition. Owning half of each still gives €120 in sun and €40 in rain. Two stalls have not diversified the weather risk.",
          "Real investments can share exposure to an industry, a country, interest rates or the broader economy. A collection of many similar companies may be less varied than it first appears. Diversification can reduce some risks, but it cannot guarantee a profit or eliminate losses during a broad downturn."
        ]
      },
      {
        "heading": "An average leaves out the uncomfortable part",
        "paragraphs": [
          "Consider a fictional game with a 50% chance of gaining €30 and a 50% chance of losing €20. The expected change is 0.5 × €30 + 0.5 × (−€20) = €5. That positive average does not remove the possibility of losing €20 on a single play.",
          "Whether a loss is tolerable depends on circumstances. Losing money needed for next week’s rent has different consequences from a fluctuation in money set aside for a distant goal. Willingness to take risk, ability to absorb a loss and time until the money is needed are separate considerations. A personality quiz cannot settle them for you."
        ]
      },
      {
        "heading": "Use a sandbox to test assumptions",
        "paragraphs": [
          "Change the probability of rain or add a third outcome in which the fair is cancelled. The apparently safe combination now behaves differently. This is a useful lesson: a model protects you only against the risks it contains. In the Diversification Sandbox, treat returns and probabilities as teaching assumptions. Explain the range of outcomes as well as the average, and ask what the simplified model leaves out."
        ]
      }
    ],
    "tryIt": "Change the chance of sunshine to 75%. Calculate the expected earnings of each stall and the half-and-half combination.",
    "question": {
      "prompt": "Does owning ten companies from one narrow industry guarantee strong diversification?",
      "options": [
        "Yes, ten names remove all risk",
        "No, the companies may share important risks",
        "Yes, if their logos look different"
      ],
      "correct": 1,
      "explanation": "Diversification depends on the relationship between risks, not just the number of holdings. Some risks remain shared."
    },
    "sources": [
      {
        "label": "SEC Investor.gov: Asset allocation and diversification",
        "url": "https://www.investor.gov/introduction-investing/getting-started/asset-allocation"
      }
    ]
  }
];
