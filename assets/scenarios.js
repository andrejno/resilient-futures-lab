/* Resilient Futures Lab: fictional learning scenarios, no personal data needed. */
window.RFL_SCENARIOS = {
  scam: [
    {
      title: 'The parcel that costs €1.90',
      context: 'A text says: “Your parcel is waiting. Pay a €1.90 customs fee today at parcel-help.example or we return it.” You are expecting a delivery, but the message gives no order number. What is the best next step?',
      options: ['Pay because the amount is small.', 'Open your retailer’s app or the courier’s official website independently and check the delivery.', 'Reply with your address so the sender can find the parcel.'],
      correct: 1,
      explanation: 'The message is suspicious, but this text alone does not prove fraud. A real expected delivery makes the story feel plausible. Check through a route you already trust, and a small payment can still expose card details.',
      lesson: 'Verify the claim somewhere other than the message that made it.'
    },
    {
      title: 'A friend with a new number',
      context: 'A new number texts: “It’s me. Phone broke. Can you send €80 for my train? Please do it now.” The sender uses your friend’s first name but avoids a call.',
      options: ['Ask a private question and send money if the answer sounds right.', 'Send a smaller amount first as a test.', 'Call your friend on the number already in your contacts, or reach them another trusted way.'],
      correct: 2,
      explanation: 'Urgency and a new number are warning signs, not conclusive proof. A scammer may know personal facts from social posts, so a trivia question is a weak check. An independent conversation is stronger.',
      lesson: 'Check the person before you check the payment details.'
    },
    {
      title: 'The perfect summer job',
      context: 'A social account offers you remote work for €200 a day. There is no interview. You must pay €35 for “activation” and send an identity document through a chat account today.',
      options: ['Pause and verify the employer through its independently found official recruitment channel.', 'Pay the activation fee, but cover part of the document.', 'Send the document first and negotiate the fee later.'],
      correct: 0,
      explanation: 'Upfront fees, little detail and pressure are strong warning signs. Do not send money or identity documents while you investigate. Even a real company name or copied logo would not show that the account belongs to that company.',
      lesson: 'A familiar brand name is a claim, not proof of identity.'
    },
    {
      title: 'The code on your phone',
      context: 'A caller claims to work for your bank. Your phone then receives a one-time code. The caller says: “Read it to me so I can cancel a payment you did not make.” You did not initiate a call or payment.',
      options: ['Read the code because cancelling a payment sounds protective.', 'End the call and contact the bank through its app or the number on your card.', 'Give only the last three digits.'],
      correct: 1,
      explanation: 'An unsolicited caller asking for an authentication code is a serious warning sign. Codes can authorise access or transactions. Do not share any part of the code, and check with the bank using contact details you already trust.',
      lesson: 'Someone asking to “protect” your account may be trying to enter it.'
    },
    {
      title: 'A scholarship with a deadline',
      context: 'An email says you have won a scholarship. It knows your university and contains a polished PDF. The form at awards-office.example asks for your card number to “confirm eligibility”. You did apply for a scholarship last month.',
      options: ['The correct university name makes it safe.', 'The attachment proves this is an official decision.', 'Check the award directly with the scholarship office using contact details from your original application.'],
      correct: 2,
      explanation: 'The matching application is worth checking, but it does not authenticate the email. Personal information and document design can be copied. A request for card details is unrelated to establishing scholarship eligibility and deserves particular caution.',
      lesson: 'A convincing detail should prompt a check, not replace one.'
    },
    {
      title: 'The invoice has changed',
      context: 'Your club receives an email apparently from its venue: “Our bank account has changed. Please use these new details for the €600 deposit.” The wording and sender name look familiar.',
      options: ['Call your established venue contact on the number in the original agreement before changing the payment details.', 'Reply to the email asking whether it is genuine.', 'Transfer €1 first, if it arrives, pay the rest.'],
      correct: 0,
      explanation: 'This could be a genuine change or a compromised email thread. Replying stays inside the same potentially compromised channel. A €1 test only shows that an account can receive money, not that it belongs to the venue.',
      lesson: 'Verify changed payment details using an existing, independent contact.'
    },
    {
      title: 'Now there is direct evidence',
      context: 'You asked your university’s IT team through the official help desk about a “reset your password” email. IT confirms it is a phishing campaign and tells students not to use the link. You have not opened it.',
      options: ['Open it in private browsing to investigate.', 'Report it through the university’s reporting route, then delete it, and do not use its link.', 'Forward the live link to classmates and ask them to test it.'],
      correct: 1,
      explanation: 'Here you have verification from the responsible team, not just a suspicious appearance. Follow the reporting process and avoid spreading a working lure. Private browsing does not make a phishing site safe.',
      lesson: 'Distinguish a warning sign from independent confirmation.'
    },
    {
      title: 'You already entered your password',
      context: 'You entered a password on a page reached from an unexpected “account locked” message. Minutes later, the real service shows a login from an unfamiliar device. What should you do first?',
      options: ['Wait until money or files go missing.', 'Ask the original sender to undo the login.', 'Use the real service through a trusted route, change the password and revoke unfamiliar sessions, and contact its support if access is blocked.'],
      correct: 2,
      explanation: 'Treat this as a possible compromise and act promptly. Follow the service’s recovery steps, enable stronger authentication and change that password anywhere you reused it. If you shared payment details, contact your payment provider through a trusted route too.',
      lesson: 'After a mistake, timely recovery matters more than embarrassment.'
    }
  ],
  privacy: [
    {
      title: 'A timetable without names',
      context: 'In this fictional exercise, you want an AI tool to improve a study timetable. It contains subject names, made-up times and no names, locations or account information. Which version is sensible to use?',
      options: ['Use the invented timetable and check the tool’s data settings before pasting.', 'Add your full name and exact commute so the AI understands you.', 'A timetable can never raise privacy questions.'],
      correct: 0,
      explanation: 'The invented example already gives the tool what it needs. Real schedules can reveal routines and locations, so keep only details needed for the task. “No name” does not automatically mean “no personal information”.',
      lesson: 'Start with the smallest useful amount of information.'
    },
    {
      title: 'The class list',
      context: 'A fictional teacher wants to generate discussion groups. Their real class list would contain student names, grades and support needs. What should they put into an unapproved public AI chat?',
      options: ['The whole list, because it helps produce balanced groups.', 'Only the support needs, with names deleted.', 'A synthetic example to design a grouping method, and handle real student information only in an approved process.'],
      correct: 2,
      explanation: 'Grades and support needs can be sensitive, and combinations of details may identify a student without a name. A public chat is not automatically an approved school system. The useful first task is designing the method, which can use invented records.',
      lesson: 'Removing names is not a substitute for permission and an appropriate tool.'
    },
    {
      title: 'A budget screenshot',
      context: 'You want help understanding spending categories. A fictional bank screenshot would show purchases alongside an account number, balance and transaction references. Which input is best?',
      options: ['Upload the screenshot, and the AI will ignore account details.', 'Use invented or carefully generalised category totals, with unnecessary identifiers and revealing details removed.', 'Hide your name but leave every transaction and reference visible.'],
      correct: 1,
      explanation: 'The task needs category amounts, not banking identifiers. Detailed purchases can reveal health, beliefs or routines, and unusual combinations can still identify someone. Use a simplified example where possible and review the tool’s handling of uploads.',
      lesson: 'Share the financial question, not your banking identity.'
    },
    {
      title: 'A message from someone else',
      context: 'A fictional friend has sent you a private message about a family problem. You want help writing a thoughtful reply. What is the least intrusive approach?',
      options: ['Describe the situation broadly with invented details, or ask your friend before sharing any private text.', 'Paste the message because it was sent to you.', 'Replace the name with an initial and paste all the details.'],
      correct: 0,
      explanation: 'Receiving a message does not automatically give you permission to send it to another service. Initials may not protect someone if the story is distinctive. You can request a supportive tone using a broad, fictional scenario.',
      lesson: 'Other people’s information deserves the same care as your own.'
    },
    {
      title: 'The password in the prompt',
      context: 'In a simulated task, an AI assistant asks you to paste an account password so it can troubleshoot a login. What should your next step be?',
      options: ['Share it, then change it next month.', 'Refuse to share the password and use the service’s official login-recovery process.', 'Share half the password and ask the model to guess the rest.'],
      correct: 1,
      explanation: 'A general chat should not need your password, one-time code or recovery key to explain troubleshooting steps. If a credential has already been disclosed, follow the service’s recovery guidance and replace it promptly.',
      lesson: 'Credentials belong in the authorised login flow, not in a prompt.'
    },
    {
      title: 'The “anonymous” story',
      context: 'A fictional survey response names no one, but describes the only 17-year-old violinist in a small village, their school and a particular medical appointment. Is it anonymous enough to upload freely?',
      options: ['Yes, there is no full name.', 'Yes, an AI cannot connect clues.', 'No: the combination of details may identify the person, so use a synthetic version and follow the relevant consent and data-handling rules.'],
      correct: 2,
      explanation: 'Identity can emerge from several ordinary facts combined. Replacing a name is pseudonymisation at best in many situations, it does not guarantee anonymity. For this learning task, an invented story avoids exposing the real one.',
      lesson: 'Ask what someone could infer from the whole story.'
    },
    {
      title: 'A useful public paragraph',
      context: 'You wrote a short public event announcement with no personal contact details. You want an AI tool to make the sentences clearer. What is a reasonable approach?',
      options: ['Paste the relevant public paragraph, check the tool’s settings and review the suggested changes.', 'Upload all your private planning notes as extra context.', 'Assume that public text can never have copyright or context concerns.'],
      correct: 0,
      explanation: 'Using a limited paragraph you wrote can be appropriate. There is no need to add private planning material. “Public” does not erase authorship, accuracy or context, so keep control of the final wording.',
      lesson: 'Responsible use is about proportionate choices, not avoiding every tool.'
    },
    {
      title: 'A retention toggle',
      context: 'A fictional AI service has a setting labelled “Do not use my chats for model training”. Does switching it on make every upload private and safe?',
      options: ['Yes, that means no one can store or access the chat.', 'No: training use, retention, access and sharing are different questions, and check the relevant policy and still minimise the data.', 'Yes, if you also use a nickname.'],
      correct: 1,
      explanation: 'A control for one purpose does not answer every data-handling question. The service may still keep data for other stated reasons. Check what the setting actually covers and use an approved tool when school or work information is involved.',
      lesson: 'Read privacy settings as specific controls, not blanket guarantees.'
    }
  ],
  influencer: [
    {
      title: '“€20 a day, guaranteed”',
      context: 'A fictional creator promises that a €200 deposit will produce €20 every day, with “no risk”. A countdown says the offer ends in ten minutes.',
      options: ['The countdown is evidence that demand is high.', 'The promised certainty and very high return are warning signs, and pause and independently verify the offer and provider.', 'A small first deposit removes the risk.'],
      options: ['The countdown is evidence that demand is high.', 'The promised certainty and very high return are warning signs, and pause and independently verify the offer and provider.', 'A small first deposit removes the risk.'],
      correct: 1,
      explanation: '€20 per day is 10% of the initial €200 each day, before any compounding. That extraordinary promise, paired with no-risk language and time pressure, should trigger scrutiny. A first payout would not prove the arrangement is sustainable or legitimate.',
      lesson: 'Translate a catchy promise into numbers before believing it.'
    },
    {
      title: 'The referral link',
      context: 'A fictional influencer praises a trading app and says: “I earn a fee if you sign up through my link.” What can you conclude?',
      options: ['The disclosure proves the recommendation is false.', 'The disclosure guarantees the recommendation is fair.', 'There is a financial incentive,  assess the claims, fees and risks independently.'],
      options: ['The disclosure proves the recommendation is false.', 'The disclosure guarantees the recommendation is fair.', 'There is a financial incentive,  assess the claims, fees and risks independently.'],
      correct: 2,
      explanation: 'Disclosure gives you useful context, but it does not settle the quality of the product or advice. Ask what the creator gets paid for and whether drawbacks receive the same attention as benefits.',
      lesson: 'Follow the incentive, then check the evidence.'
    },
    {
      title: 'One winning screenshot',
      context: 'A fictional video displays one trade that gained 60%. The creator says: “This proves my strategy beats the market.” There is no complete record.',
      options: ['Ask for the complete time period, losing trades, costs and a suitable comparison.', 'Treat 60% as the expected result of the next trade.', 'Assume the screenshot must be edited.'],
      correct: 0,
      explanation: 'A screenshot may be real and still be misleading. Selected winners hide losses, timing and the amount at risk. A strategy claim needs a complete, relevant record, and even a good past record does not guarantee future performance.',
      lesson: 'A selected success is not a performance history.'
    },
    {
      title: 'The borrowed authority',
      context: 'A fictional account calls itself a “financial expert”, wears a suit and posts photos outside office buildings. No qualifications or business details can be checked.',
      options: ['The professional setting is enough.', 'Check the specific expertise, verifiable identity and relevant official registers where applicable.', 'Anyone who posts online cannot know finance.'],
      correct: 1,
      explanation: 'Style can make a claim feel credible without adding evidence. Check what kind of expertise is relevant to the claim. Registration, where required, is one check rather than a promise that an investment is safe or suitable.',
      lesson: 'Check a person’s basis for a claim, not their wardrobe.'
    },
    {
      title: 'Everyone in the comments agrees',
      context: 'A fictional investment post has 8,000 likes and hundreds of near-identical “I doubled my money!” comments. Is that enough evidence to act?',
      options: ['No, popularity and repeated testimonials do not verify returns, ownership or risks.', 'Yes, so many people cannot all be wrong.', 'Yes, repeated wording makes the result more consistent.'],
      correct: 0,
      explanation: 'Comments can be selected, coordinated or fake, and genuine people can be mistaken. The pattern raises questions but does not by itself prove manipulation. Look for evidence independent of the seller and the promotional thread.',
      lesson: 'Social proof is not financial proof.'
    },
    {
      title: 'A forecast presented as a fact',
      context: 'A fictional creator says: “This share will be worth twice as much by December. I know because an AI predicted it.” No method, assumptions or uncertainty are shown.',
      options: ['AI forecasts remove uncertainty.', 'A precise date makes the forecast more reliable.', 'Treat it as an unsupported forecast and ask for assumptions, evidence and downside scenarios.'],
      correct: 2,
      explanation: 'A model output is not knowledge of the future. Forecasts depend on data, assumptions and changing conditions. Even a documented method needs validation, and the label “AI” adds no automatic credibility.',
      lesson: 'Certainty in the wording is not certainty in the outcome.'
    },
    {
      title: 'A fair-sounding comparison',
      context: 'A fictional creator compares Account A’s 4% annual rate with Account B’s 5% annual rate and declares B better. The post does not mention fees, eligibility, rate duration or access to money.',
      options: ['The higher headline rate always wins.', 'Compare the same time period and include charges, conditions, access and relevant protections before deciding.', 'Choose the one with the larger advertising budget.'],
      correct: 1,
      explanation: 'A headline rate is one part of a product. A temporary offer, account fee or withdrawal restriction can change the comparison. This is a prompt to inspect the full terms, not a recommendation of either fictional account.',
      lesson: 'Make comparisons on matching terms.'
    }
  ],
  adviser: [
    {
      title: 'The emergency fund question',
      context: 'A fictional user asks an AI: “I may need my €500 savings for rent next month. Where should I put them?” Which answer is best calibrated?',
      options: ['“Put everything into a volatile asset, and the possible gain is worth it.”', '“A near-term essential payment makes access and avoiding loss central. Let’s first map the due date, existing commitments and available safe-access options without assuming an investment is suitable.”', '“Every person needs exactly six months of expenses before paying any bills.”'],
      correct: 1,
      explanation: 'The useful answer recognises a short time horizon and an essential obligation. It explains the decision factors instead of predicting a return or imposing a universal number. Real product choices require current terms and the person’s circumstances.',
      lesson: 'A helpful adviser starts with the purpose of the money.'
    },
    {
      title: 'A loan that looks cheap',
      context: 'A fictional AI is comparing two loans. One advertises a low interest rate but includes an arrangement fee. Which reply deserves trust?',
      options: ['“Choose the lowest headline rate.”', '“Fees are too small to matter.”', '“Compare the same borrowed amount and term, required payments, total amount repaid, fees and the applicable APR measure. We need the full terms before ranking them.”'],
      correct: 2,
      explanation: 'Borrowing cost is more than an advertised rate. A useful comparison holds the amount and term constant and checks what is included in the disclosed cost measure. Repayment timing and conditions also affect affordability.',
      lesson: 'A low rate can sit inside an expensive contract.'
    },
    {
      title: 'The confident missing fact',
      context: 'A fictional user asks for the fee on a named financial product. The AI has no current product document. Which answer handles the gap responsibly?',
      options: ['“I cannot verify the current fee from what you provided. Check the provider’s current fee document, and I can help interpret it.”', '“It is probably €2, so use that.”', '“There are definitely no fees because the brand is well known.”'],
      correct: 0,
      explanation: 'A clear limit is useful information. Product terms can change, and a plausible number is still an invented number. Help with interpretation can follow once the relevant document is available.',
      lesson: 'An honest gap is better than a fabricated detail.'
    },
    {
      title: 'The missing downside',
      context: 'A fictional AI says: “This investment could grow by 15%, so it is a good place for your tuition money.” What is the strongest critique?',
      options: ['It should use a more exciting percentage.', 'It ignores the possibility of loss, timing, costs and the need to pay tuition.', 'Any positive growth scenario proves suitability.'],
      correct: 1,
      explanation: 'A possible gain says little about the chance or size of loss. Tuition has a purpose and deadline. Responsible help considers adverse outcomes and liquidity alongside potential returns.',
      lesson: 'Ask what happens if the attractive scenario does not happen.'
    },
    {
      title: 'A budget with no breathing room',
      context: 'A fictional AI builds a monthly plan with €1,000 income and €1,000 planned spending. It says: “Perfect: the budget balances.” Which improvement matters most?',
      options: ['Use brighter colours in the table.', 'Assume that all unplanned costs will be zero.', 'Check irregular costs and uncertainty, and discuss a feasible buffer or adjustment rather than calling the plan perfect.'],
      correct: 2,
      explanation: 'A balanced arithmetic total does not establish that a plan will work. Repairs, annual bills or fluctuating income can create gaps. If there is no room for a buffer, acknowledge the constraint and examine practical options rather than blame the person.',
      lesson: 'A useful budget must survive an ordinary surprise.'
    },
    {
      title: 'A request for a winning prediction',
      context: 'A fictional user asks: “Tell me which asset will definitely rise next week.” Which AI response is most responsible?',
      options: ['“I cannot know that. I can explain uncertainty, compare evidence and help you identify what would make a claim testable.”', '“My top pick is guaranteed because I use a large model.”', '“Choose the asset that rose most last week.”'],
      correct: 0,
      explanation: 'No wording can turn an uncertain market outcome into a guaranteed fact. A useful assistant can support understanding and checking without pretending to see the future.',
      lesson: 'Use AI to strengthen a decision process, not to borrow certainty.'
    }
  ],
  provenance: [
    {
      title: 'The polished explanation',
      context: 'Authored fictional sample for this exercise: “A resilient budget gives every euro a purpose and leaves room for surprises.” The sentence is smooth and tidy. What can you responsibly conclude about whether AI or a human wrote it?',
      options: ['Smooth prose proves AI authorship.', 'Nothing reliable from style alone, ask about the writing process and check any factual claims on their evidence.', 'A warm tone proves human authorship.'],
      correct: 1,
      explanation: 'People can write polished prose, and AI can imitate rough or warm prose. Authorship needs evidence such as disclosed workflow or provenance records. Accuracy is a separate question and still requires checking.',
      lesson: 'Visual style and tone cannot prove who wrote a text.'
    },
    {
      title: 'The deliberate typo',
      context: 'Authored fictional sample for this exercise: “Inflation means prices go up on avrage, but not every single price moves together.” There is a typo. What is the soundest response?',
      options: ['A typo means a human wrote it.', 'The typo makes the economic claim false.', 'Correct the typo and evaluate the claim separately, the typo does not establish origin.'],
      correct: 2,
      explanation: 'An author or a model can produce a typo, intentionally or otherwise. The explanation concerns an average price measure, and that can be checked regardless of who wrote it. Do not confuse presentation with provenance or truth.',
      lesson: 'An error in spelling is not an authorship test.'
    },
    {
      title: 'A confident citation',
      context: 'Authored fictional sample for this exercise: “The 2025 International Pocket Money Review proves that every teenager saves 18% of income.” No link, authors or publisher are given. What should you do?',
      options: ['Look for the claimed publication and check whether its evidence supports that exact statement.', 'Assume that a formal title proves the source exists.', 'Decide it is AI-written because it includes a percentage.'],
      correct: 0,
      explanation: 'A plausible title can be invented or misquoted by anyone. First verify that the source exists, then inspect the population, measure and findings. The sweeping word “every” deserves particular scrutiny.',
      lesson: 'Trace the evidence instead of guessing the author.'
    },
    {
      title: 'A chart with no source',
      context: 'Authored fictional sample for this exercise: a glossy chart labelled “Young people are 80% more confident with money” has no axis definition, sample size, comparison group or source. Which check comes first?',
      options: ['Decide whether its colours look AI-generated.', 'Ask what was measured, compared and sampled, and request the underlying source.', 'Share it because professional charts are usually checked.'],
      correct: 1,
      explanation: 'The design cannot establish the origin or reliability of a claim. “80% more” needs a baseline and a defined measure, and confidence is not the same as skill. Source details would let you judge what the figure can support.',
      lesson: 'A chart needs a measurement story, not just a good appearance.'
    },
    {
      title: 'The detector score',
      context: 'Authored fictional sample for this exercise: a short budgeting paragraph is accompanied by a screenshot saying “93% AI”. No detector method or error rates are given. How should you interpret it?',
      options: ['It proves that 93% of the words came from AI.', 'It is enough to accuse the writer of dishonesty.', 'It is an unverified tool output, not proof; seek process evidence and avoid treating the score as an authorship verdict.'],
      correct: 2,
      explanation: 'A detector score is not automatically a calibrated probability, and a screenshot says nothing about false positives in this context. Responsible evaluation needs more than surface signals, especially when a person could be penalised.',
      lesson: 'A numerical label can create false certainty about origin.'
    },
    {
      title: '“I used AI to draft this”',
      context: 'Authored fictional sample for this exercise: a writer adds, “I used an AI tool for a first draft, checked the figures and rewrote the examples.” What does this disclosure establish?',
      options: ['It describes a claimed process,and it does not by itself verify the facts, so check important claims and sources.', 'It means the final text cannot contain errors.', 'It means nothing in the text can be useful.'],
      correct: 0,
      explanation: 'A disclosure is useful provenance information but remains a claim about the workflow. AI assistance and factual quality are different dimensions. Assess the evidence and the final work, with the relevant authorship rules in mind.',
      lesson: 'Know how a text was made, then check what it says.'
    }
  ],
  risk: [
    {
      title: 'A calm €20 or a coin toss?',
      context: 'Fictional one-round choice: take €20 for certain, or receive €50 with a 50% chance and €0 otherwise. There is no entry cost. Which would you choose?',
      options: ['Take €20 for certain.', 'Take the 50% chance of €50.'],
      correct: null,
      sure: 20,
      high: 50,
      probability: 0.5,
      explanation: 'The uncertain option has expected value 0.50 × €50 + 0.50 × €0 = €25. That is €5 above the certain amount. In this one round, however, you receive €50 or €0, never the expected value itself. Either choice can reflect a reasonable preference.',
      lesson: 'Expected value is a probability-weighted average, not a promised result.'
    },
    {
      title: 'The ticket you need tomorrow',
      context: 'Fictional one-round choice: you need €30 for a ticket tomorrow. Choose €30 for certain, or an 80% chance of €40 and a 20% chance of €0. There is no other money in this scenario.',
      options: ['Take the certain €30 and cover the ticket.', 'Take the 80% chance of €40.'],
      correct: null,
      sure: 30,
      high: 40,
      probability: 0.8,
      explanation: 'The uncertain option has expected value 0.80 × €40 = €32, €2 above the certain option. It also has a 20% chance of leaving the ticket unpaid. A deadline and essential need can make certainty especially valuable.',
      lesson: 'The purpose of the money matters as well as the average payoff.'
    },
    {
      title: 'Same average, different experience',
      context: 'Fictional one-round choice: receive €15 for certain, or a 25% chance of €60 and a 75% chance of €0. There is no entry cost.',
      options: ['Take €15 for certain.', 'Take the 25% chance of €60.'],
      correct: null,
      sure: 15,
      high: 60,
      probability: 0.25,
      explanation: 'The uncertain option has expected value 0.25 × €60 = €15, the same as the certain payment. Equal expected values can still feel very different: the uncertain option pays nothing in three out of four possible cases on average over many repetitions.',
      lesson: 'Equal averages do not mean equal uncertainty.'
    },
    {
      title: 'A tiny chance at a big number',
      context: 'Fictional one-round choice: take €10 for certain, or a 1% chance of €800 and a 99% chance of €0. There is no entry cost.',
      options: ['Take €10 for certain.', 'Take the 1% chance of €800.'],
      correct: null,
      sure: 10,
      high: 800,
      probability: 0.01,
      explanation: 'The uncertain option has expected value 0.01 × €800 = €8, below the certain €10. The eye-catching prize can distract from its small probability. Choosing it is a preference in this fictional game, not evidence of a financial personality.',
      lesson: 'A large possible reward can still have a small expected value.'
    },
    {
      title: 'Almost certain is not certain',
      context: 'Fictional one-round choice: take €45 for certain, or a 95% chance of €50 and a 5% chance of €0. There is no entry cost.',
      options: ['Take €45 for certain.', 'Take the 95% chance of €50.'],
      correct: null,
      sure: 45,
      high: 50,
      probability: 0.95,
      explanation: 'The uncertain option has expected value 0.95 × €50 = €47.50, €2.50 above the certain payment. There remains a one-in-twenty chance of €0. Whether that downside is acceptable depends on the context, not just the average.',
      lesson: 'A high probability does not remove the downside outcome.'
    },
    {
      title: 'A choice for a group',
      context: 'Fictional one-round choice for a club activity: accept €100 for certain, or a 50% chance of €240 and a 50% chance of €0. You are deciding on behalf of the group.',
      options: ['Take €100 for certain.', 'Take the 50% chance of €240.'],
      correct: null,
      sure: 100,
      high: 240,
      probability: 0.5,
      explanation: 'The uncertain option has expected value 0.50 × €240 = €120, €20 above the certain amount. But the group may receive nothing. When others bear the consequences, explain both outcomes and agree how the decision should be made.',
      lesson: 'Risk decisions also involve responsibility to the people affected.'
    }
  ],
  hallucination: [
    {
      title: 'Two years of price rises',
      context: 'A fictional AI answer says: “A €100 basket rises by 10% this year and 10% next year, so it costs €120.” What is the correction?',
      options: ['It costs €121: €100 × 1.10 × 1.10.', 'It costs €110 because the same rate is repeated.', 'It costs €120, percentages always add.'],
      correct: 0,
      explanation: 'The second 10% applies to €110, so it adds €11. The result is €121, a total increase of 21%. Repeated percentage changes multiply their growth factors.',
      lesson: 'Check the base to which each percentage applies.'
    },
    {
      title: 'A discount and a price rise',
      context: 'A fictional AI answer says: “A €50 item gets a 20% discount, then a 20% increase. It returns to €50.” What is correct?',
      options: ['It becomes €52.', 'It becomes €48: €50 × 0.80 × 1.20.', 'It returns to €50 because the changes cancel.'],
      correct: 1,
      explanation: 'The discount takes the price to €40. The later 20% increase is €8 because it is calculated from €40, not €50. Equal percentage decreases and increases do not cancel when their bases differ.',
      lesson: 'Opposite percentage changes are not necessarily inverse operations.'
    },
    {
      title: 'The monthly rate mistake',
      context: 'A fictional AI answer says: “A balance that grows by 1% each month grows by exactly 12% in a year, with monthly compounding.” Which correction fits that stated model?',
      options: ['It grows by exactly 1% annually.', 'It grows by 24% annually.', 'Its effective annual growth is (1.01¹² − 1) × 100%, approximately 12.68%.'],
      correct: 2,
      explanation: 'Each month’s growth joins the balance before the next month. The twelve growth factors multiply: 1.01¹² ≈ 1.126825. This calculation uses a fixed monthly rate and no fees or cash flows, and real products need their own terms checked.',
      lesson: 'Distinguish a stated annual rate from an effective compounded result.'
    },
    {
      title: 'An average without weights',
      context: 'A fictional AI answer says: “You place €900 in an option returning 2% and €100 in one returning 10%, so your total return is 6%.” Assume both returns occur over the same year with no fees. What is correct?',
      options: ['The total gain is €28, or 2.8% of €1,000.', 'The total return is 12% because 2 + 10 = 12.', 'The total return is 6% because there are two options.'],
      correct: 0,
      explanation: '€900 × 0.02 = €18 and €100 × 0.10 = €10. Together that is €28 on €1,000, or 2.8%. The average must reflect the amounts assigned to each option.',
      lesson: 'Use weights when the underlying amounts are unequal.'
    },
    {
      title: 'A source that is not supplied',
      context: 'A fictional AI answer says: “A 2025 Global Teen Money Study proves that budgeting apps cut everyone’s spending by 40%.” It supplies no authors, publisher, link or study details. What is the most responsible correction?',
      options: ['Change 40% to a more believable 15%.', 'Mark the claim unverified, request a traceable source and remove the numerical claim unless the evidence supports it.', 'Keep it because a named study sounds authoritative.'],
      correct: 1,
      explanation: 'There is no supplied evidence to verify the number, and “everyone” is an exceptionally broad claim. Do not replace one invented figure with another. If a study is found, check its population, comparison and whether the design supports a causal conclusion.',
      lesson: 'Plausible citations and precise numbers still need traceable evidence.'
    },
    {
      title: 'Money grows, prices grow too',
      context: 'A fictional AI answer says: “Your €100 grows to €105 while the price of a €100 basket grows to €110, so you are 5% richer in purchasing power.” What is correct?',
      options: ['Purchasing power rose by 15%.', 'Purchasing power is unchanged because both numbers increased.', 'The money buys 105/110 ≈ 0.9545 baskets, a purchasing-power decrease of about 4.55%.'],
      correct: 2,
      explanation: 'You started with enough for one basket. After the changes, your €105 buys about 95.45% of a basket priced at €110. The exact real change is 1.05/1.10 − 1 ≈ −4.55%, and subtracting 10% from 5% is a rough approximation.',
      lesson: 'Compare what money can buy, not just the number on the balance.'
    }
  ]
};
