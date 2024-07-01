document.getElementById('personality-test').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const personalityTypes = [
        {
            name: "Adaptive Performer",
            description: "You are known for your adaptability and growth-oriented mindset, combined with a balanced approach to spirituality and rationality. Your ability to navigate different situations with grace and flexibility makes you a natural leader and innovator. You inspire others with your resilience and positivity, often finding creative solutions to challenges. Your balanced perspective allows you to see the big picture while managing details effectively.",
            traits: "Adaptable, growth-oriented, balanced, innovative.",
            behavior: "You engage confidently and inspire others with your adaptable and positive nature.",
            employment: "You may thrive in dynamic environments that require quick thinking and problem-solving, such as entrepreneurship, consulting, or creative industries.",
            leisure: "You enjoy activities that challenge your adaptability and creativity, like travel, arts, and new hobbies.",
            avoid: "Overcommitting and spreading yourself too thin.",
            perception: "You see yourself as a resilient and innovative individual.",
            strengths: "Adaptability, creativity, balanced perspective.",
            weaknesses: "Risk of overcommitting and burnout.",
            obstacles: "Managing stress and maintaining balance.",
            spiritual: "You integrate spirituality and rationality, seeking practical benefits from your spiritual practices.",
            howOthersSeeYou: "People admire your resilience and positive outlook, often looking to you for guidance and inspiration."
        },
        {
            name: "Balanced Pragmatist",
            description: "You have a pragmatic approach to life, focusing on tangible benefits and practical solutions. Your balanced nature allows you to weigh the pros and cons of situations effectively, making sound decisions. You value stability and consistency, often serving as a reliable anchor for others. Your grounded perspective is complemented by a willingness to explore new ideas when they offer clear advantages.",
            traits: "Pragmatic, balanced, reliable, consistent.",
            behavior: "You are seen as dependable and level-headed, often providing practical advice.",
            employment: "You excel in roles that require analytical thinking and problem-solving, such as management, engineering, or finance.",
            leisure: "You enjoy activities that offer tangible benefits or improvements, such as DIY projects, gardening, or fitness.",
            avoid: "Getting stuck in routines and resisting necessary change.",
            perception: "You see yourself as practical and dependable.",
            strengths: "Reliability, practicality, balanced perspective.",
            weaknesses: "Risk of becoming too rigid and resistant to change.",
            obstacles: "Adapting to unexpected changes and staying open to new ideas.",
            spiritual: "You may have a pragmatic approach, focusing on tangible benefits.",
            howOthersSeeYou: "Others appreciate your practicality and reliability, often seeking your advice in challenging situations."
        },
        {
            name: "Analytical Explorer",
            description: "You have a keen analytical mind and a thirst for knowledge. Your curiosity drives you to explore new ideas and concepts, often delving deep into subjects that interest you. You value logic and evidence, applying your analytical skills to understand and solve complex problems. Your explorative nature is balanced by a methodical approach, ensuring thorough and well-reasoned conclusions.",
            traits: "Analytical, curious, methodical, logical.",
            behavior: "You engage in intellectual discussions and enjoy sharing your knowledge.",
            employment: "You excel in roles that require deep analysis and research, such as science, academia, or technology.",
            leisure: "You enjoy activities that stimulate your mind, like puzzles, reading, or learning new skills.",
            avoid: "Overanalyzing and becoming detached from emotions.",
            perception: "You see yourself as a thinker and problem-solver.",
            strengths: "Analytical skills, curiosity, logical thinking.",
            weaknesses: "Risk of overanalyzing and emotional detachment.",
            obstacles: "Balancing logic with emotional understanding.",
            spiritual: "You explore spiritual concepts with a critical and analytical approach.",
            howOthersSeeYou: "People admire your intellect and curiosity, often seeking your insights on complex issues."
        },
        {
            name: "Rational Introvert",
            description: "Sensitive and introspective, you approach life with a rational mindset. You value logic and reason, often reflecting deeply on your experiences and emotions. Your introspective nature allows you to understand yourself and others on a profound level. While you may be reserved in social settings, your thoughtful and considered approach is appreciated by those who know you well.",
            traits: "Sensitive, introspective, logical, emotionally stable.",
            behavior: "You may be reserved but engage deeply in meaningful conversations.",
            employment: "You thrive in roles that require introspection and careful analysis, such as writing, research, or counseling.",
            leisure: "You enjoy solitary activities that allow for reflection, like reading, journaling, or meditating.",
            avoid: "Overthinking and social isolation.",
            perception: "You see yourself as thoughtful and rational.",
            strengths: "Introspection, emotional stability, logical thinking.",
            weaknesses: "Risk of overthinking and isolation.",
            obstacles: "Balancing introspection with social engagement.",
            spiritual: "You approach spirituality with a rational and reflective mindset.",
            howOthersSeeYou: "Others appreciate your thoughtfulness and deep understanding, often seeking your perspective on personal matters."
        },
        {
            name: "Balanced Connector",
            description: "Empathetic with a balanced approach to spirituality and practicality, you connect deeply with others and provide balanced insights. Your ability to understand and empathize with different perspectives makes you a natural mediator and counselor. You value personal growth and strive to maintain harmony in your relationships, often guiding others towards a balanced and fulfilling life.",
            traits: "Empathetic, connected, balanced, growth-oriented.",
            behavior: "You engage in deep and meaningful conversations, often providing balanced insights.",
            employment: "You may seek careers in research, counseling, or fields that allow you to explore new ideas and help others.",
            leisure: "You enjoy intellectual discussions, exploring different philosophies, and engaging in activities that promote personal growth.",
            avoid: "Becoming overly skeptical and dismissing ideas too quickly.",
            perception: "You see yourself as a thoughtful and inquisitive individual.",
            strengths: "Empathy, connection, balanced perspective.",
            weaknesses: "Risk of becoming overly analytical and emotionally detached.",
            obstacles: "Balancing skepticism with emotional understanding.",
            spiritual: "Regularly explores and questions different beliefs, seeking a deeper understanding.",
            howOthersSeeYou: "People appreciate your empathetic and balanced approach, often turning to you for guidance and support."
        },
        {
            name: "Ethereal Optimist",
            description: "Your optimistic outlook and ethereal nature make you a source of inspiration for others. You view life through a spiritual lens, finding joy and meaning in everyday experiences. Your positivity and hopefulness are infectious, often lifting the spirits of those around you. While you may have your head in the clouds at times, your optimism helps you navigate challenges with grace and resilience.",
            traits: "Optimistic, spiritual, inspiring, resilient.",
            behavior: "You bring positivity and hope to social interactions, inspiring others with your outlook.",
            employment: "You thrive in roles that allow you to inspire and uplift others, such as coaching, teaching, or creative arts.",
            leisure: "You enjoy activities that nurture your spirit and spread positivity, like volunteering, art, or nature walks.",
            avoid: "Ignoring practical concerns and becoming overly idealistic.",
            perception: "You see yourself as a beacon of hope and positivity.",
            strengths: "Optimism, resilience, inspirational.",
            weaknesses: "Risk of ignoring practical concerns and becoming overly idealistic.",
            obstacles: "Balancing idealism with practicality.",
            spiritual: "Deeply connected to spiritual practices that bring joy and meaning to your life.",
            howOthersSeeYou: "People admire your positivity and resilience, often looking to you for inspiration and hope."
        },
        {
            name: "Pragmatic Seeker",
            description: "You approach life with a blend of practicality and spiritual seeking, always looking for tangible benefits from your spiritual practices. Your curiosity drives you to explore different spiritual paths, integrating what works best into your daily life. You value efficiency and effectiveness, often finding practical applications for spiritual concepts.",
            traits: "Practical, curious, efficient, spiritually seeking.",
            behavior: "You engage in discussions about practical applications of spirituality, sharing your insights and discoveries.",
            employment: "You excel in roles that combine practicality with exploration, such as consulting, research, or entrepreneurship.",
            leisure: "You enjoy activities that offer both practical benefits and spiritual growth, like yoga, meditation, or self-improvement courses.",
            avoid: "Becoming too focused on tangible outcomes and losing sight of deeper spiritual meanings.",
            perception: "You see yourself as a practical and curious seeker.",
            strengths: "Practicality, curiosity, efficiency.",
            weaknesses: "Risk of focusing too much on tangible outcomes and losing sight of deeper spiritual meanings.",
            obstacles: "Balancing practicality with spiritual depth.",
            spiritual: "You seek tangible benefits from your spiritual practices, integrating them into your daily life.",
            howOthersSeeYou: "People appreciate your practical approach to spirituality, often seeking your advice on integrating spiritual practices into their lives."
        },
        {
            name: "Grounded Visionary",
                        description: "You have a unique ability to blend visionary ideas with grounded practicality. Your creative mind and forward-thinking nature allow you to see possibilities that others might miss. At the same time, your practical approach ensures that your ideas are feasible and actionable. You inspire others with your vision while providing practical steps to achieve it. Your balanced perspective helps turn dreams into reality, making you a valuable asset in any team.",
            traits: "Visionary, practical, creative, forward-thinking.",
            behavior: "You engage others with your visionary ideas and practical plans, inspiring and motivating them.",
            employment: "You thrive in roles that require both creativity and practicality, such as project management, innovation, or strategic planning.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to plan, such as designing, writing, or strategic games.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical thinker.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
            howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on projects and plans."
        },
        {
            name: "Reflective Idealist",
            description: "You are deeply introspective and idealistic, often contemplating the larger meaning of life and your place in it. Your reflective nature allows you to understand complex concepts and see the world from multiple perspectives. While you have high ideals, you also recognize the importance of practical steps to achieve them. Your thoughtful approach makes you a wise counselor and mentor.",
            traits: "Introspective, idealistic, thoughtful, wise.",
            behavior: "You engage in deep, meaningful conversations, often offering wise and thoughtful advice.",
            employment: "You excel in roles that require deep thinking and reflection, such as academia, counseling, or writing.",
            leisure: "You enjoy solitary and reflective activities, like reading, meditating, or journaling.",
            avoid: "Becoming too absorbed in thoughts and losing touch with reality.",
            perception: "You see yourself as a deep thinker and idealist.",
            strengths: "Wisdom, introspection, idealism.",
            weaknesses: "Risk of becoming too detached from practical concerns.",
            obstacles: "Balancing idealism with practical action.",
            spiritual: "You seek deeper understanding and meaning in your spiritual practices.",
            howOthersSeeYou: "People value your wisdom and thoughtfulness, often turning to you for guidance and insight."
        },
        {
            name: "Resilient Optimist",
            description: "Your resilience and optimism are your defining traits, allowing you to bounce back from setbacks and inspire others with your positive outlook. You see challenges as opportunities for growth and remain hopeful even in difficult times. Your infectious positivity helps uplift those around you, making you a beacon of hope and encouragement.",
            traits: "Resilient, optimistic, hopeful, inspiring.",
            behavior: "You bring a positive and uplifting energy to social interactions, encouraging and supporting others.",
            employment: "You thrive in roles that require resilience and positivity, such as coaching, teaching, or motivational speaking.",
            leisure: "You enjoy activities that boost your mood and resilience, like exercise, socializing, or creative pursuits.",
            avoid: "Ignoring difficult emotions and overly relying on positivity.",
            perception: "You see yourself as a resilient and positive individual.",
            strengths: "Resilience, positivity, inspiration.",
            weaknesses: "Risk of ignoring difficult emotions and challenges.",
            obstacles: "Balancing positivity with acknowledging challenges.",
            spiritual: "You incorporate positivity and resilience into your spiritual practices, finding hope and strength in your beliefs.",
            howOthersSeeYou: "People admire your resilience and positivity, often seeking your support and encouragement in tough times."
        },
        {
            name: "Creative Dreamer",
            description: "Your creativity and imagination set you apart, allowing you to dream big and see possibilities where others may not. You thrive on expressing yourself through various forms of art and creativity. While your head may often be in the clouds, your dreams and ideas inspire those around you. Balancing your creative pursuits with practical responsibilities can be a challenge, but your passion drives you forward.",
            traits: "Creative, imaginative, passionate, inspirational.",
            behavior: "You engage others with your creative ideas and inspire them with your passion.",
            employment: "You excel in roles that allow for creative expression, such as the arts, design, or marketing.",
            leisure: "You enjoy creative activities like painting, writing, or performing.",
            avoid: "Neglecting practical responsibilities in pursuit of creative passions.",
            perception: "You see yourself as a creative and passionate individual.",
            strengths: "Creativity, imagination, passion.",
            weaknesses: "Risk of becoming too absorbed in dreams and neglecting practical matters.",
            obstacles: "Balancing creative pursuits with practical responsibilities.",
            spiritual: "You integrate creativity and imagination into your spiritual practices, finding inspiration and meaning in your beliefs.",
            howOthersSeeYou: "People admire your creativity and passion, often looking to you for inspiration and new ideas."
        },
        {
            name: "Practical Realist",
            description: "Grounded and realistic, you approach life with a no-nonsense attitude. You value practicality and efficiency, often finding the most straightforward solutions to problems. Your realistic perspective helps you navigate challenges with clarity and determination. While you may not be the most imaginative, your practical approach ensures that you get things done.",
            traits: "Realistic, practical, efficient, determined.",
            behavior: "You are seen as dependable and straightforward, often providing practical advice.",
            employment: "You thrive in roles that require efficiency and problem-solving, such as management, operations, or engineering.",
            leisure: "You enjoy activities that offer practical benefits, like DIY projects, fitness, or home improvement.",
            avoid: "Becoming too rigid and resistant to new ideas.",
            perception: "You see yourself as practical and dependable.",
            strengths: "Realism, efficiency, determination.",
            weaknesses: "Risk of becoming too rigid and resistant to change.",
            obstacles: "Balancing practicality with openness to new ideas.",
            spiritual: "You approach spirituality with a practical mindset, seeking tangible benefits from your practices.",
            howOthersSeeYou: "People appreciate your practicality and efficiency, often seeking your advice on practical matters."
        },
        {
            name: "Intuitive Healer",
            description: "You possess a strong intuition and a natural ability to heal and support others. Your empathetic nature allows you to connect deeply with people, often sensing their needs and emotions. You are drawn to helping others find balance and well-being, whether through emotional support, physical healing, or spiritual guidance. Your intuition guides you in your interactions and decisions.",
            traits: "Intuitive, empathetic, healing, supportive.",
            behavior: "You connect deeply with others, offering support and understanding.",
            employment: "You excel in roles that involve healing and support, such as counseling, healthcare, or spiritual guidance.",
            leisure: "You enjoy activities that nurture your intuition and healing abilities, like meditation, energy work, or caring for others.",
            avoid: "Ignoring your own needs while helping others.",
            perception: "You see yourself as an intuitive and supportive healer.",
            strengths: "Intuition, empathy, healing abilities.",
            weaknesses: "Risk of neglecting self-care while helping others.",
            obstacles: "Balancing self-care with caring for others.",
            spiritual: "You integrate your intuition and healing abilities into your spiritual practices, often feeling guided by a higher power.",
            howOthersSeeYou: "People admire your empathy and healing abilities, often turning to you for support and guidance."
        },
        {
            name: "Logical Thinker",
            description: "You approach life with a logical and analytical mindset, valuing reason and evidence above all else. Your ability to think critically and solve complex problems makes you a valuable asset in any analytical or technical field. While you may struggle with emotional expression, your logical approach ensures that you make well-informed decisions.",
            traits: "Logical, analytical, critical thinker, evidence-based.",
            behavior: "You engage in intellectual discussions and provide logical insights.",
            employment: "You thrive in roles that require critical thinking and analysis, such as science, technology, or finance.",
            leisure: "You enjoy activities that stimulate your mind, like puzzles, strategy games, or research.",
            avoid: "Neglecting emotional expression and connection.",
            perception: "You see yourself as a rational and logical thinker.",
            strengths: "Logical thinking, analytical skills, problem-solving.",
            weaknesses: "Risk of neglecting emotions and interpersonal connections.",
            obstacles: "Balancing logic with emotional understanding.",
            spiritual: "You approach spirituality with a critical and analytical mindset, seeking logical explanations for spiritual experiences.",
            howOthersSeeYou: "People admire your intellect and logical insights, often seeking your advice on complex issues."
        },
        {
            name: "Empathetic Listener",
            description: "Your empathy and ability to listen deeply make you a compassionate and understanding individual. You connect with others on an emotional level, often providing comfort and support. Your empathetic nature allows you to understand and validate others' feelings, making you a trusted confidant. While you may sometimes take on others' emotions, your compassion and understanding are invaluable in helping others feel heard and valued.",
            traits: "Empathetic, compassionate, understanding, supportive.",
            behavior: "You provide emotional support and understanding, often being the one people turn to for comfort.",
            employment: "You excel in roles that involve listening and supporting others, such as counseling, social work, or healthcare.",
                        leisure: "You enjoy activities that nurture your empathetic nature, like volunteering, reading, or spending time with loved ones.",
            avoid: "Taking on too much emotional burden from others.",
            perception: "You see yourself as a compassionate and understanding person.",
            strengths: "Empathy, compassion, listening skills.",
            weaknesses: "Risk of emotional burnout and taking on others' burdens.",
            obstacles: "Balancing empathy with self-care.",
            spiritual: "You integrate your empathetic nature into your spiritual practices, often feeling connected to others on a deep level.",
            howOthersSeeYou: "People appreciate your empathy and support, often seeking your understanding and comfort."
        },
        {
            name: "Determined Achiever",
            description: "You are driven and determined, always striving to achieve your goals. Your perseverance and strong work ethic enable you to overcome obstacles and achieve success. You set high standards for yourself and work diligently to meet them. While your determination is a strength, it's important to balance it with self-care and avoid burnout.",
            traits: "Determined, goal-oriented, hardworking, persistent.",
            behavior: "You inspire others with your determination and work ethic, often leading by example.",
            employment: "You thrive in roles that require perseverance and goal-setting, such as business, project management, or athletics.",
            leisure: "You enjoy activities that challenge you and help you achieve your goals, like fitness, competitive sports, or personal development.",
            avoid: "Overworking and neglecting self-care.",
            perception: "You see yourself as driven and goal-oriented.",
            strengths: "Determination, work ethic, perseverance.",
            weaknesses: "Risk of burnout and neglecting self-care.",
            obstacles: "Balancing determination with relaxation and self-care.",
            spiritual: "You approach spirituality with the same determination, seeking to achieve spiritual growth and enlightenment.",
            howOthersSeeYou: "People admire your determination and drive, often looking to you for motivation and inspiration."
        },
        {
            name: "Spiritual Seeker",
            description: "You are deeply curious about spiritual matters and constantly seek deeper understanding and enlightenment. Your open-mindedness and willingness to explore different spiritual paths make you a lifelong learner. You value experiences and insights that broaden your spiritual perspective, often integrating various beliefs and practices into your life.",
            traits: "Curious, open-minded, spiritual, lifelong learner.",
            behavior: "You engage in discussions about spirituality and share your experiences and insights with others.",
            employment: "You excel in roles that allow for exploration and learning, such as teaching, writing, or spiritual guidance.",
            leisure: "You enjoy activities that expand your spiritual understanding, like reading, meditation, or attending spiritual retreats.",
            avoid: "Becoming overwhelmed by too many spiritual practices.",
            perception: "You see yourself as a seeker of spiritual knowledge and enlightenment.",
            strengths: "Curiosity, open-mindedness, spiritual insight.",
            weaknesses: "Risk of becoming overwhelmed and losing focus.",
            obstacles: "Balancing exploration with integration of spiritual practices.",
            spiritual: "You constantly seek deeper understanding and enlightenment, integrating various spiritual beliefs and practices.",
            howOthersSeeYou: "People admire your curiosity and spiritual insight, often seeking your guidance on spiritual matters."
        },
        {
            name: "Compassionate Guide",
            description: "Your compassion and desire to help others make you a natural guide and mentor. You provide support and guidance to those in need, often helping them navigate their challenges and find their path. Your empathetic nature allows you to connect deeply with others and understand their struggles. While helping others is fulfilling, it's important to remember to take care of yourself as well.",
            traits: "Compassionate, supportive, empathetic, guiding.",
            behavior: "You provide guidance and support, often being the one people turn to for help and advice.",
            employment: "You excel in roles that involve mentoring and guiding others, such as counseling, teaching, or coaching.",
            leisure: "You enjoy activities that allow you to support and guide others, like volunteering, mentoring, or community involvement.",
            avoid: "Neglecting your own needs while helping others.",
            perception: "You see yourself as a compassionate and supportive guide.",
            strengths: "Compassion, empathy, guidance.",
            weaknesses: "Risk of neglecting self-care while helping others.",
            obstacles: "Balancing self-care with helping others.",
            spiritual: "You integrate your compassionate nature into your spiritual practices, often feeling called to help others on their spiritual journey.",
            howOthersSeeYou: "People admire your compassion and guidance, often turning to you for support and advice."
        },
        {
            name: "Innovative Thinker",
            description: "Your innovative mind and creative thinking set you apart, allowing you to come up with unique solutions to problems. You thrive on exploring new ideas and pushing the boundaries of what is possible. Your ability to think outside the box makes you a valuable asset in any field that requires innovation and creativity.",
            traits: "Innovative, creative, forward-thinking, problem-solver.",
            behavior: "You engage others with your creative ideas and inspire them with your innovative thinking.",
            employment: "You thrive in roles that require innovation and creativity, such as design, technology, or entrepreneurship.",
            leisure: "You enjoy activities that challenge your creativity and allow you to explore new ideas, like inventing, designing, or brainstorming.",
            avoid: "Becoming too focused on ideas without taking action.",
            perception: "You see yourself as an innovative and creative thinker.",
            strengths: "Creativity, innovation, problem-solving.",
            weaknesses: "Risk of becoming too absorbed in ideas and neglecting practical matters.",
            obstacles: "Balancing creativity with practical action.",
            spiritual: "You integrate your innovative thinking into your spiritual practices, often exploring new and unique spiritual paths.",
            howOthersSeeYou: "People admire your creativity and innovative thinking, often looking to you for new ideas and solutions."
        },
        {
            name: "Grounded Leader",
            description: "Your grounded nature and strong leadership skills make you a reliable and effective leader. You approach challenges with a calm and steady demeanor, providing stability and direction for those around you. Your practical approach ensures that goals are met and tasks are completed efficiently. While you value stability, you are also open to new ideas and improvements.",
            traits: "Grounded, reliable, practical, leader.",
            behavior: "You provide stability and direction, often taking on leadership roles and guiding others.",
            employment: "You excel in roles that require strong leadership and practical problem-solving, such as management, operations, or project management.",
            leisure: "You enjoy activities that allow you to lead and organize, like team sports, community projects, or planning events.",
            avoid: "Becoming too rigid and resistant to change.",
            perception: "You see yourself as a reliable and practical leader.",
            strengths: "Leadership, reliability, practical thinking.",
            weaknesses: "Risk of becoming too rigid and resistant to new ideas.",
            obstacles: "Balancing stability with openness to change.",
            spiritual: "You approach spirituality with a grounded and practical mindset, integrating spiritual practices into your daily life.",
            howOthersSeeYou: "People admire your leadership and reliability, often looking to you for guidance and direction."
        },
        {
            name: "Compassionate Advocate",
            description: "You are driven by a deep sense of compassion and a desire to advocate for those in need. Your empathetic nature allows you to connect with others and understand their struggles. You are passionate about making a positive impact and often take on causes that align with your values. Your advocacy is rooted in a genuine desire to help others and create a better world.",
            traits: "Compassionate, empathetic, advocate, passionate.",
            behavior: "You engage others with your passion for advocacy and inspire them to take action.",
            employment: "You excel in roles that involve advocating for others, such as social work, activism, or nonprofit work.",
            leisure: "You enjoy activities that align with your advocacy, like volunteering, organizing events, or raising awareness.",
            avoid: "Becoming overwhelmed by the weight of advocacy work.",
            perception: "You see yourself as a compassionate advocate for change.",
            strengths: "Compassion, empathy, advocacy.",
            weaknesses: "Risk of burnout and emotional exhaustion.",
            obstacles: "Balancing advocacy with self-care.",
            spiritual: "You integrate your advocacy into your spiritual practices, often feeling called to create positive change.",
            howOthersSeeYou: "People admire your compassion and dedication, often joining you in your advocacy efforts."
        },
        {
            name: "Visionary Leader",
            description: "Your visionary ideas and strong leadership skills make you a dynamic and inspiring leader. You have the ability to see the big picture and create a compelling vision for the future. Your charisma and passion inspire others to follow your lead and work towards common goals. While you are focused on the future, you also ensure that practical steps are taken to achieve your vision.",
            traits: "Visionary, charismatic, leader, inspiring.",
            behavior: "You engage others with your vision and inspire them to take action.",
            employment: "You thrive in roles that require both creativity and practicality, such as project management, innovation, or strategic planning.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to plan, such as designing, writing, or strategic games.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical thinker.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
                        howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on projects and plans."
        },
        {
            name: "Practical Visionary",
            description: "You have the ability to balance visionary thinking with practical execution. Your innovative ideas are grounded in reality, making them both inspiring and feasible. You often find yourself leading projects where your unique blend of creativity and practicality is valued. Your vision for the future is complemented by your ability to devise actionable steps to achieve it.",
            traits: "Visionary, practical, innovative, action-oriented.",
            behavior: "You inspire others with your visionary ideas while providing practical steps to achieve them.",
            employment: "You excel in roles that require both creativity and practical execution, such as project management, innovation, or strategic planning.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to plan, such as designing, writing, or strategic games.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical thinker.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
            howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on projects and plans."
        },
        {
            name: "Empathetic Leader",
            description: "You lead with empathy and understanding, making you a compassionate and effective leader. Your ability to connect with others on an emotional level allows you to inspire and motivate your team. You value collaboration and strive to create an inclusive and supportive environment. Your leadership style is marked by your ability to listen and respond to the needs of those you lead.",
            traits: "Empathetic, understanding, collaborative, supportive.",
            behavior: "You inspire and motivate others with your empathetic leadership style.",
            employment: "You excel in leadership roles that require empathy and collaboration, such as team management, counseling, or community organizing.",
            leisure: "You enjoy activities that allow you to connect with others and build supportive relationships, like team sports, volunteering, or social events.",
            avoid: "Taking on too much emotional burden from others.",
            perception: "You see yourself as a compassionate and effective leader.",
            strengths: "Empathy, collaboration, leadership.",
            weaknesses: "Risk of emotional burnout and taking on others' burdens.",
            obstacles: "Balancing empathy with self-care.",
            spiritual: "You integrate your empathetic nature into your spiritual practices, often feeling called to lead and support others.",
            howOthersSeeYou: "People admire your empathy and leadership, often turning to you for guidance and support."
        },
        {
            name: "Introspective Thinker",
            description: "You have a deep and reflective nature, often contemplating the complexities of life and your place in it. Your introspective approach allows you to understand yourself and others on a profound level. You value thoughtful analysis and seek to understand the underlying causes of situations. While you may be reserved, your insights and reflections are highly valued by those who know you.",
            traits: "Introspective, thoughtful, analytical, reflective.",
            behavior: "You engage deeply in meaningful conversations, often offering thoughtful and considered insights.",
            employment: "You excel in roles that require deep thinking and reflection, such as research, writing, or counseling.",
            leisure: "You enjoy solitary and reflective activities, like reading, journaling, or meditating.",
            avoid: "Becoming too absorbed in thoughts and losing touch with reality.",
            perception: "You see yourself as a deep thinker and reflective individual.",
            strengths: "Wisdom, introspection, analytical thinking.",
            weaknesses: "Risk of becoming too detached from practical concerns.",
            obstacles: "Balancing introspection with practical action.",
            spiritual: "You seek deeper understanding and meaning in your spiritual practices.",
            howOthersSeeYou: "People value your wisdom and thoughtfulness, often turning to you for guidance and insight."
        },
        {
            name: "Visionary Optimist",
            description: "You are a visionary with a positive outlook, often seeing the potential for greatness in any situation. Your optimism and forward-thinking nature inspire those around you to strive for their best. You combine your big-picture thinking with a hopeful attitude, making you a motivating force in any team. While your head may often be in the clouds, your optimism helps you navigate challenges with grace and resilience.",
            traits: "Visionary, optimistic, inspiring, resilient.",
            behavior: "You bring positivity and hope to social interactions, inspiring others with your outlook.",
            employment: "You thrive in roles that allow you to inspire and uplift others, such as coaching, teaching, or creative arts.",
            leisure: "You enjoy activities that nurture your spirit and spread positivity, like volunteering, art, or nature walks.",
            avoid: "Ignoring practical concerns and becoming overly idealistic.",
            perception: "You see yourself as a beacon of hope and positivity.",
            strengths: "Optimism, resilience, inspirational.",
            weaknesses: "Risk of ignoring practical concerns and becoming overly idealistic.",
            obstacles: "Balancing idealism with practicality.",
            spiritual: "Deeply connected to spiritual practices that bring joy and meaning to your life.",
            howOthersSeeYou: "People admire your positivity and resilience, often looking to you for inspiration and hope."
        },
        {
            name: "Creative Visionary",
            description: "Your creativity and visionary thinking set you apart, allowing you to dream big and see possibilities where others may not. You thrive on expressing yourself through various forms of art and creativity. While your head may often be in the clouds, your dreams and ideas inspire those around you. Balancing your creative pursuits with practical responsibilities can be a challenge, but your passion drives you forward.",
            traits: "Creative, imaginative, passionate, inspirational.",
            behavior: "You engage others with your creative ideas and inspire them with your passion.",
            employment: "You excel in roles that allow for creative expression, such as the arts, design, or marketing.",
            leisure: "You enjoy creative activities like painting, writing, or performing.",
            avoid: "Neglecting practical responsibilities in pursuit of creative passions.",
            perception: "You see yourself as a creative and passionate individual.",
            strengths: "Creativity, imagination, passion.",
            weaknesses: "Risk of becoming too absorbed in dreams and neglecting practical matters.",
            obstacles: "Balancing creative pursuits with practical responsibilities.",
            spiritual: "You integrate creativity and imagination into your spiritual practices, finding inspiration and meaning in your beliefs.",
            howOthersSeeYou: "People admire your creativity and passion, often looking to you for inspiration and new ideas."
        },
        {
            name: "Practical Innovator",
            description: "You have a unique ability to blend innovative ideas with practical execution. Your creative mind and forward-thinking nature allow you to see possibilities that others might miss. At the same time, your practical approach ensures that your ideas are feasible and actionable. You inspire others with your vision while providing practical steps to achieve it. Your balanced perspective helps turn dreams into reality, making you a valuable asset in any team.",
            traits: "Innovative, practical, creative, forward-thinking.",
            behavior: "You engage others with your visionary ideas and practical plans, inspiring and motivating them.",
            employment: "You thrive in roles that require both creativity and practicality, such as project management, innovation, or strategic planning.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to plan, such as designing, writing, or strategic games.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical thinker.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
            howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on projects and plans."
        },
        {
            name: "Resilient Leader",
            description: "Your resilience and strong leadership skills make you a reliable and effective leader. You approach challenges with a calm and steady demeanor, providing stability and direction for those around you. Your practical approach ensures that goals are met and tasks are completed efficiently. While you value stability, you are also open to new ideas and improvements.",
            traits: "Resilient, reliable, practical, leader.",
            behavior: "You provide stability and direction, often taking on leadership roles and guiding others.",
            employment: "You excel in roles that require strong leadership and practical problem-solving, such as management, operations, or project management.",
            leisure: "You enjoy activities that allow you to lead and organize, like team sports, community projects, or planning events.",
            avoid: "Becoming too rigid and resistant to change.",
            perception: "You see yourself as a reliable and practical leader.",
            strengths: "Leadership, reliability, practical thinking.",
            weaknesses: "Risk of becoming too rigid and resistant to new ideas.",
            obstacles: "Balancing stability with openness to change.",
            spiritual: "You approach spirituality with a grounded and practical mindset, integrating spiritual practices into your daily life.",
            howOthersSeeYou: "People admire your leadership and reliability, often looking to you for guidance and direction."
        },
        {
            name: "Compassionate Innovator",
            description: "Your compassion and innovative thinking allow you to create solutions that help others. You are driven by a desire to make a positive impact and often come up with creative ways to address challenges. Your empathetic nature enables you to             understand the needs of others, and your innovative mindset helps you devise practical solutions. While you strive to help others, it's important to ensure your ideas are actionable and not just idealistic.",
            traits: "Compassionate, innovative, empathetic, practical.",
            behavior: "You engage others with your creative ideas and inspire them with your compassion.",
            employment: "You excel in roles that combine innovation with helping others, such as social entrepreneurship, counseling, or community projects.",
            leisure: "You enjoy activities that allow you to help others and innovate, like volunteering, designing, or brainstorming solutions to social issues.",
            avoid: "Becoming too idealistic without taking practical steps.",
            perception: "You see yourself as a compassionate and innovative thinker.",
            strengths: "Compassion, creativity, empathy.",
            weaknesses: "Risk of becoming too idealistic and not taking action.",
            obstacles: "Balancing innovative ideas with practical execution.",
            spiritual: "You integrate your compassionate nature and innovative thinking into your spiritual practices, often seeking to create positive change.",
            howOthersSeeYou: "People admire your compassion and creativity, often looking to you for innovative solutions and support."
        },
        {
            name: "Grounded Innovator",
            description: "You have a unique ability to blend innovative ideas with grounded practicality. Your creative mind and forward-thinking nature allow you to see possibilities that others might miss. At the same time, your practical approach ensures that your ideas are feasible and actionable. You inspire others with your vision while providing practical steps to achieve it. Your balanced perspective helps turn dreams into reality, making you a valuable asset in any team.",
            traits: "Innovative, practical, creative, forward-thinking.",
            behavior: "You engage others with your visionary ideas and practical plans, inspiring and motivating them.",
            employment: "You thrive in roles that require both creativity and practicality, such as project management, innovation, or strategic planning.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to plan, such as designing, writing, or strategic games.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical thinker.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
            howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on projects and plans."
        },
        {
            name: "Resilient Advocate",
            description: "Your resilience and strong sense of advocacy make you a powerful voice for change. You approach challenges with a calm and steady demeanor, providing stability and direction for those around you. Your practical approach ensures that goals are met and tasks are completed efficiently. While you value stability, you are also open to new ideas and improvements.",
            traits: "Resilient, reliable, practical, advocate.",
            behavior: "You provide stability and direction, often taking on advocacy roles and guiding others.",
            employment: "You excel in roles that require strong advocacy and practical problem-solving, such as social work, activism, or nonprofit management.",
            leisure: "You enjoy activities that allow you to advocate and organize, like community projects, volunteering, or planning events.",
            avoid: "Becoming too rigid and resistant to change.",
            perception: "You see yourself as a reliable and practical advocate.",
            strengths: "Leadership, reliability, practical thinking.",
            weaknesses: "Risk of becoming too rigid and resistant to new ideas.",
            obstacles: "Balancing stability with openness to change.",
            spiritual: "You approach spirituality with a grounded and practical mindset, integrating spiritual practices into your daily life.",
            howOthersSeeYou: "People admire your leadership and advocacy, often looking to you for guidance and direction."
        },
        {
            name: "Visionary Advocate",
            description: "Your visionary ideas and strong sense of advocacy make you a dynamic and inspiring advocate for change. You have the ability to see the big picture and create a compelling vision for the future. Your charisma and passion inspire others to follow your lead and work towards common goals. While you are focused on the future, you also ensure that practical steps are taken to achieve your vision.",
            traits: "Visionary, charismatic, advocate, inspiring.",
            behavior: "You engage others with your vision and inspire them to take action.",
            employment: "You thrive in roles that require both creativity and advocacy, such as social entrepreneurship, activism, or nonprofit management.",
            leisure: "You enjoy activities that stimulate your creativity and allow you to advocate, such as designing campaigns, writing, or community organizing.",
            avoid: "Getting lost in ideas without taking action.",
            perception: "You see yourself as a creative and practical advocate.",
            strengths: "Vision, practicality, creativity.",
            weaknesses: "Risk of becoming overwhelmed by ideas and not following through.",
            obstacles: "Balancing visionary ideas with practical steps.",
            spiritual: "You incorporate visionary insights into your spiritual practices, grounding them in daily life.",
            howOthersSeeYou: "People admire your ability to turn ideas into action, often seeking your guidance on advocacy projects and plans."
        },
        {
            name: "Compassionate Visionary",
            description: "Your compassion and visionary thinking allow you to create solutions that help others. You are driven by a desire to make a positive impact and often come up with creative ways to address challenges. Your empathetic nature enables you to understand the needs of others, and your innovative mindset helps you devise practical solutions. While you strive to help others, it's important to ensure your ideas are actionable and not just idealistic.",
            traits: "Compassionate, innovative, empathetic, practical.",
            behavior: "You engage others with your creative ideas and inspire them with your compassion.",
            employment: "You excel in roles that combine innovation with helping others, such as social entrepreneurship, counseling, or community projects.",
            leisure: "You enjoy activities that allow you to help others and innovate, like volunteering, designing, or brainstorming solutions to social issues.",
            avoid: "Becoming too idealistic without taking practical steps.",
            perception: "You see yourself as a compassionate and innovative thinker.",
            strengths: "Compassion, creativity, empathy.",
            weaknesses: "Risk of becoming too idealistic and not taking action.",
            obstacles: "Balancing innovative ideas with practical execution.",
            spiritual: "You integrate your compassionate nature and innovative thinking into your spiritual practices, often seeking to create positive change.",
            howOthersSeeYou: "People admire your compassion and creativity, often looking to you for innovative solutions and support."
        }
    ];

    // Example calculation (replace with your own logic)
    const score = Object.values(data).reduce((acc, val) => acc + parseInt(val), 0);

    // Determine personality type based on score
    let personalityType;
    if (score >= 200) {
        personalityType = personalityTypes[0]; // Example: Adaptive Performer
    } else if (score >= 180) {
        personalityType = personalityTypes[1]; // Example: Balanced Pragmatist
    } // Add more conditions for other personality types

    // Display results
    const resultsDiv = document.getElementById('results');
    if (personalityType) {
        resultsDiv.innerHTML = `
            <h2>${personalityType.name}</h2>
            <p>${personalityType.description}</p>
            <p><strong>Traits:</strong> ${personalityType.traits}</p>
            <p><strong>Behavior in Social Settings:</strong> ${personalityType.behavior}</p>
            <p><strong>Employment:</strong> ${personalityType.employment}</p>
            <p><strong>Leisure Activities:</strong> ${personalityType.leisure}</p>
            <p><strong>Things to Avoid:</strong> ${personalityType.avoid}</p>
            <p><strong>Self-Perception:</strong> ${personalityType.perception}</p>
            <p><strong>Strengths:</strong> ${personalityType.strengths}</p>
            <p><strong>Weaknesses:</strong> ${personalityType.weaknesses}</p>
            <p><strong>Obstacles:</strong> ${personalityType.obstacles}</p>
            <p><strong>Spiritual Life:</strong> ${personalityType.spiritual}</p>
            <p><strong>How Others See You:</strong> ${personalityType.howOthersSeeYou}</p>
        `;
    } else {
        resultsDiv.innerHTML = `<p>Unable to determine personality type. Please check your responses and try again.</p>`;
    }
});


