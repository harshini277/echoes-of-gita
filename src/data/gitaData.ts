export interface GitaVerse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  explanation: string;
  topics: string[];
  keywords: string[];
  featured?: boolean;
}

export const GITA_VERSES: GitaVerse[] = [
  {
    id: "BG-2.47",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
    translation: "You have a right to perform your prescribed duty, but never to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
    explanation: "Focus completely on the process and dedication of your effort today rather than draining your mental energy worrying about future outcomes or rewards. Attachment to results breeds fear and paralysis.",
    topics: ["Duty", "Karma", "Failure", "Success", "Action", "Stress", "Academic Pressure"],
    keywords: ["karman", "phalesu", "duty", "result", "work", "outcome", "anxiety", "exam", "effort"],
    featured: true
  },
  {
    id: "BG-2.48",
    chapter: 2,
    verse: 48,
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya |\nsiddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate ||",
    translation: "Perform your duty steadfast in Yoga, O Arjuna, abandoning all attachment and remaining equal in success and failure. Equanimity of mind is called Yoga.",
    explanation: "True mental resilience comes from remaining balanced whether things turn out favorably or unfavorably. Success and failure are temporary waves; your inner composure is your true anchor.",
    topics: ["Equanimity", "Failure", "Success", "Stress", "Peace", "Overthinking"],
    keywords: ["samatvam", "equanimity", "balance", "success", "failure", "mindfulness", "resilience"],
    featured: true
  },
  {
    id: "BG-2.14",
    chapter: 2,
    verse: 14,
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ |\nāgamāpāyino 'nityās tāṁs titikṣasva bhārata ||",
    translation: "The contact of the senses with their objects gives rise to cold and heat, pleasure and pain. They come and go, and are impermanent. Endure them patiently, O descendant of Bharata.",
    explanation: "Difficult emotions, stress, and challenging phases are temporary by nature. Understanding that feelings fluctuate helps you develop fortitude and avoid over-reacting to momentary setbacks.",
    topics: ["Stress", "Fear", "Peace", "Overthinking", "Relationships"],
    keywords: ["titiksasva", "endurance", "pleasure", "pain", "impermanence", "patience", "anxiety"],
    featured: true
  },
  {
    id: "BG-6.5",
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "uddhered ātmanātmānaṁ nātmānam avasādayet |\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
    translation: "Elevate yourself by your own self, do not degrade yourself. For your own mind is your greatest friend, and your own mind can be your worst enemy.",
    explanation: "You have the inner agency to reshape your life. Your internal monologue can either empower you or tear you down; cultivate self-compassion and constructive self-talk.",
    topics: ["Self-discipline", "Mind", "Lack of Motivation", "Overthinking", "Finding Direction"],
    keywords: ["uddhered", "friend", "enemy", "self-motivation", "mind", "internal talk", "growth"],
    featured: true
  },
  {
    id: "BG-6.6",
    chapter: 6,
    verse: 6,
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    transliteration: "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ |\nanātmanas tu śatrutve vartetātmaiva śatruvat ||",
    translation: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
    explanation: "When you master your habits and attention, your mind becomes a disciplined instrument for clarity, focus, and creativity.",
    topics: ["Mind", "Self-discipline", "Overthinking", "Focus"],
    keywords: ["mind", "conquer", "friend", "enemy", "discipline", "distraction"],
    featured: false
  },
  {
    id: "BG-6.26",
    chapter: 6,
    verse: 26,
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    transliteration: "yato yato niścarati manaś cañcalam asthiram |\ntatas tato niyamyaitad ātmany eva vaśaṁ nayet ||",
    translation: "From whatever cause the restless and unsteady mind wanders away, from that it should be restrained and brought back under the control of the Self.",
    explanation: "It is natural for the mind to drift when facing difficult tasks or distraction. The practice is not to berate yourself, but to gently bring your focus back whenever you notice it wandering.",
    topics: ["Mind", "Overthinking", "Academic Pressure", "Focus", "Self-discipline"],
    keywords: ["cancalam", "restless", "focus", "wandering", "attention", "meditation", "study"],
    featured: true
  },
  {
    id: "BG-2.56",
    chapter: 2,
    verse: 56,
    sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥",
    transliteration: "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ |\nvīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate ||",
    translation: "One whose mind is undisturbed amidst misery, who does not crave pleasure, and who is free from attachment, fear, and anger, is called a sage of steady wisdom.",
    explanation: "Inner stability is cultivated when you are neither crushed by disappointment nor intoxicated by vanity. Freedom from chronic fear and anger allows wise choices.",
    topics: ["Fear", "Anger", "Peace", "Equanimity", "Stress"],
    keywords: ["sthita-dhir", "fear", "anger", "peace", "calm", "wisdom", "emotional intelligence"],
    featured: true
  },
  {
    id: "BG-2.62",
    chapter: 2,
    verse: 62,
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    transliteration: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate |\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate ||",
    translation: "While contemplating objects of the senses, a person develops attachment to them. From attachment comes desire, and from unfulfilled desire arises anger.",
    explanation: "Traces the psychological chain reaction of addiction, obsession, and rage. Obsessing over external expectations breeds frustration when reality doesn't match our desires.",
    topics: ["Anger", "Overthinking", "Attachment", "Mind"],
    keywords: ["krodha", "desire", "attachment", "anger", "obsession", "psychology"],
    featured: false
  },
  {
    id: "BG-2.63",
    chapter: 2,
    verse: 63,
    sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    transliteration: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ |\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||",
    translation: "From anger arises delusion, from delusion comes loss of memory; from loss of memory comes ruin of intellect, and from ruin of intellect one is destroyed.",
    explanation: "When anger takes over, clear reasoning collapses. Taking a pause before reacting preserves your intellect and prevents regrettable decisions.",
    topics: ["Anger", "Difficult Decisions", "Mind", "Stress"],
    keywords: ["buddhi", "intellect", "delusion", "anger", "regret", "decision making"],
    featured: true
  },
  {
    id: "BG-3.19",
    chapter: 3,
    verse: 19,
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara |\nasakto hy ācaran karma param āpnoti pūruṣaḥ ||",
    translation: "Therefore, without being attached to the fruits of activities, one should act as a matter of duty; for by working without attachment one attains the Supreme.",
    explanation: "Fulfill your daily responsibilities conscientiously simply because it is the right thing to do. Purposeful action without personal greed unlocks highest fulfillment.",
    topics: ["Duty", "Karma", "Action", "Finding Direction", "Lack of Motivation"],
    keywords: ["asaktah", "duty", "purpose", "responsibility", "work", "ethics"],
    featured: false
  },
  {
    id: "BG-3.35",
    chapter: 3,
    verse: 35,
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsva-dharme nidhanaṁ śreyaḥ para-dharmau bhayāvahaḥ ||",
    translation: "It is far better to perform one's own natural duty, even if imperfectly, than to attempt another's duty perfectly. Engagement in one's own natural calling brings ultimate growth.",
    explanation: "Honor your unique authentic path, gifts, and responsibilities instead of endlessly comparing yourself to others or mimicking someone else's journey.",
    topics: ["Dharma", "Duty", "Finding Direction", "Academic Pressure", "Relationships"],
    keywords: ["svadharma", "calling", "authentic", "comparison", "destiny", "path", "purpose"],
    featured: true
  },
  {
    id: "BG-4.38",
    chapter: 4,
    verse: 38,
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    transliteration: "na hi jñānena sadṛśaṁ pavitram iha vidyate |\ntat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati ||",
    translation: "In this world, there is nothing so sublime and pure as transcendental knowledge. One who has become accomplished in devotion experiences this truth within himself over time.",
    explanation: "Education, self-knowledge, and understanding are the ultimate purifiers of doubt and ignorance. True learning requires patience and consistent practice.",
    topics: ["Knowledge", "Self-knowledge", "Academic Pressure", "Finding Direction"],
    keywords: ["jnana", "knowledge", "learning", "wisdom", "purity", "growth"],
    featured: false
  },
  {
    id: "BG-4.39",
    chapter: 4,
    verse: 39,
    sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    transliteration: "śraddhāvāṁl labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ |\njñānaṁ labdhvā parāṁ śāntim acireṇādhigacchati ||",
    translation: "Those who possess deep commitment, who are devoted to truth, and who master their senses gain higher wisdom. Having attained wisdom, they swiftly attain supreme peace.",
    explanation: "Deep focus, sincere commitment, and self-restraint lead to genuine mastery and profound inner tranquility.",
    topics: ["Knowledge", "Peace", "Self-discipline", "Mind"],
    keywords: ["sraddha", "faith", "commitment", "peace", "focus", "dedication"],
    featured: false
  },
  {
    id: "BG-9.22",
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate |\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||",
    translation: "For those who always remember Me with undivided devotion, meditating on My transcendental form, I carry what they lack and preserve what they have.",
    explanation: "When you align your heart and actions with sincerity and trust, life provides the necessary spiritual protection and grace to sustain your journey.",
    topics: ["Devotion", "Peace", "Fear", "Stress"],
    keywords: ["yogaksema", "devotion", "protection", "grace", "trust", "surrender"],
    featured: true
  },
  {
    id: "BG-11.33",
    chapter: 11,
    verse: 33,
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्।\nमयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्॥",
    transliteration: "tasmāt tvam uttiṣṭha yaśo labhasva jitvā śatrūn bhuṅkṣva rājyaṁ samṛddham |\nmayaivaite nihatāḥ pūrvam eva nimitta-mātraṁ bhava savya-sācin ||",
    translation: "Therefore stand up and gain glory! Conquer your fears and fulfill your responsibility. Become merely an instrument for divine purposeful action.",
    explanation: "Recognize that your duty calls you to step up. When anxiety grips you, remember that you are an instrument of action; step forward with courage.",
    topics: ["Courage", "Lack of Motivation", "Action", "Duty"],
    keywords: ["nimitta", "instrument", "courage", "stand up", "motivation", "purpose"],
    featured: true
  },
  {
    id: "BG-12.13",
    chapter: 12,
    verse: 13,
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
    transliteration: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca |\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī ||",
    translation: "One who is non-envious, friendly and compassionate toward all living beings, free from possessiveness and ego, equal in sorrow and joy, and forgiving...",
    explanation: "Outlines the hallmarks of emotional maturity: empathy toward others, freedom from toxic ego, forgiveness, and unconditional kindness.",
    topics: ["Relationships", "Peace", "Devotion", "Anger"],
    keywords: ["maitra", "friendship", "compassion", "ego", "forgiveness", "empathy"],
    featured: true
  },
  {
    id: "BG-12.15",
    chapter: 12,
    verse: 15,
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    transliteration: "yasmān nodvijate loko lokān nodvijate ca yaḥ |\nharṣāmarṣa-bhayodvegair mukto yaḥ sa ca me priyaḥ ||",
    translation: "He by whom the world is not disturbed and who is not disturbed by the world, who is free from thrill, impatience, fear, and anxiety—he is dear to Me.",
    explanation: "A wise person neither creates distress for others nor allows external turmoil to shatter their inner calm.",
    topics: ["Peace", "Stress", "Relationships", "Fear"],
    keywords: ["anxiety", "calm", "world", "distress", "peace", "harmony"],
    featured: false
  },
  {
    id: "BG-18.47",
    chapter: 18,
    verse: 47,
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्॥",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsvabhāva-niyataṁ karma kurvan nāpnoti kilbiṣam ||",
    translation: "Better is one's own duty, though devoid of merit, than the duty of another well performed. By doing the work prescribed according to one's own nature, one incurs no sin.",
    explanation: "Authenticity over imitation. Performing work aligned with your intrinsic inclinations yields genuine fulfillment.",
    topics: ["Dharma", "Finding Direction", "Duty", "Academic Pressure"],
    keywords: ["nature", "svabhava", "authenticity", "career", "calling", "direction"],
    featured: false
  },
  {
    id: "BG-18.61",
    chapter: 18,
    verse: 61,
    sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    transliteration: "īśvaraḥ sarva-bhūtānāṁ hṛd-deśe 'rjuna tiṣṭhati |\nbhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā ||",
    translation: "The Supreme Lord resides in the hearts of all living beings, O Arjuna, directing all beings who are mounted as on a machine made of cosmic energy.",
    explanation: "Reminds us of the divine spark within every individual. Recognizing this sacred presence fosters reverence for yourself and all life.",
    topics: ["Self-knowledge", "Devotion", "Peace", "Relationships"],
    keywords: ["heart", "isvara", "inner guide", "soul", "interconnected"],
    featured: false
  },
  {
    id: "BG-18.66",
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja |\nahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
    translation: "Abandon all varieties of anxiety and rigid dogma, and simply surrender unto Me. I shall deliver you from all distress; do not fear.",
    explanation: "The ultimate assurance of peace: letting go of crippling self-reliance, releasing past burdens, and trusting the ultimate cosmic harmony.",
    topics: ["Devotion", "Fear", "Stress", "Peace", "Finding Direction"],
    keywords: ["sarana", "surrender", "fearless", "trust", "peace", "release"],
    featured: true
  },
  {
    id: "BG-18.78",
    chapter: 18,
    verse: 78,
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ |\ntatra śrīr vijayo bhūtir dhruvā nītir matir mama ||",
    translation: "Wherever there is Krishna, the Master of Yoga, and wherever there is Arjuna, the supreme archer, there will certainly be extraordinary grace, victory, prosperity, and moral clarity.",
    explanation: "When divine wisdom (spiritual vision) is combined with human effort (practical action), success, harmony, and virtue naturally follow.",
    topics: ["Success", "Action", "Courage", "Duty", "Knowledge"],
    keywords: ["victory", "krishna", "arjuna", "action and wisdom", "harmony", "success"],
    featured: true
  }
];
