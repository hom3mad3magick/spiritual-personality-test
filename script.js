document.getElementById("personality-test").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    let selfWorthScore = 0;
    let resilienceScore = 0;
    let flexibilityScore = 0;
    let emotionalStabilityScore = 0;
    let socialConfidenceScore = 0;
    let interpersonalRelationshipsScore = 0;
    let personalGrowthScore = 0;
    let stressManagementScore = 0;
    let spiritualScore = 0;

    for (let [name, value] of formData.entries()) {
        let questionNumber = parseInt(name.substring(1));
        let score = parseInt(value);

        if (questionNumber <= 8) {
            selfWorthScore += score;
        } else if (questionNumber <= 16) {
            resilienceScore += score;
        } else if (questionNumber <= 23) {
            flexibilityScore += score;
        } else if (questionNumber <= 29) {
            emotionalStabilityScore += score;
        } else if (questionNumber <= 36) {
            socialConfidenceScore += score;
        } else if (questionNumber <= 43) {
            interpersonalRelationshipsScore += score;
        } else if (questionNumber <= 49) {
            personalGrowthScore += score;
        } else if (questionNumber <= 55) {
            stressManagementScore += score;
        } else {
            spiritualScore += score;
        }
    }

    const totalScore = selfWorthScore + resilienceScore + flexibilityScore + emotionalStabilityScore + socialConfidenceScore + interpersonalRelationshipsScore + personalGrowthScore + stressManagementScore;

    let personalityType;
    if (totalScore <= 168) {
        personalityType = 1; // Anxious Introvert
    } else if (totalScore <= 216) {
        personalityType = 2; // Sensitive Helper
    } else if (totalScore <= 264) {
        personalityType = 3; // Cautious Thinker
    } else if (totalScore <= 312) {
        personalityType = 4; // Practical Achiever
    } else if (totalScore <= 360) {
        personalityType = 5; // Social Butterfly
    } else if (totalScore <= 408) {
        personalityType = 6; // Balanced Connector
    } else if (totalScore <= 456) {
        personalityType = 7; // Analytical Explorer
    } else {
        personalityType = 8; // Empathetic Healer
    }

    let subtype;
    if (spiritualScore >= 25) {
        subtype = 'a'; // Spiritual
    } else if (spiritualScore >= 13) {
        subtype = 'b'; // Balanced
    } else {
        subtype = 'c'; // Rational
    }

    const personalityDescriptions = {
        '1a': `**Type 1a: Anxious Introvert (Spiritual)**\n
        **Description:** You tend to be introverted and prefer solitude over social gatherings. You often feel anxious in new or unfamiliar situations. Despite this, you have a deep spiritual side that guides you through life's challenges. Your introspective nature allows you to connect with your inner self and find peace in solitude.
        **Behavior in Social Settings:** You may feel uncomfortable and prefer to observe rather than participate actively.
        **Employment:** You may excel in roles that allow for independent work and deep focus.
        **Leisure Activities:** You enjoy quiet activities such as reading, writing, or meditating.
        **Things to Avoid:** Overcommitting to social obligations that cause stress.
        **Self-Perception:** You see yourself as thoughtful and introspective.
        **Strengths:** Self-awareness, introspection, deep connection with spirituality.
        **Weaknesses:** Social anxiety, tendency to avoid social interactions.
        **Obstacles:** Overcoming social anxiety and building confidence.
        **Spiritual Life:** Your spirituality provides you with comfort and guidance in your introspective journey.`,

        '1b': `**Type 1b: Anxious Introvert (Balanced)**\n
        **Description:** You are introverted and often feel anxious in social situations, but you maintain a balance between solitude and social interaction. You understand the importance of social connections and make an effort to engage with others despite your anxieties. Your balanced approach helps you navigate life's challenges more effectively.
        **Behavior in Social Settings:** You may feel anxious but try to engage in conversations and activities.
        **Employment:** You may excel in roles that allow for independent work with occasional collaboration.
        **Leisure Activities:** You enjoy a mix of quiet activities and occasional social events.
        **Things to Avoid:** Isolating yourself completely from social interactions.
        **Self-Perception:** You see yourself as thoughtful and striving for balance.
        **Strengths:** Self-awareness, balanced approach to social interactions, introspection.
        **Weaknesses:** Social anxiety, tendency to avoid social interactions at times.
        **Obstacles:** Overcoming social anxiety and building confidence.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '1c': `**Type 1c: Anxious Introvert (Rational)**\n
        **Description:** You are introverted and prefer solitude over social gatherings. You often feel anxious in new or unfamiliar situations and rely on logic and reason to navigate life's challenges. Your rational approach helps you analyze and understand your anxieties, allowing you to manage them more effectively.
        **Behavior in Social Settings:** You may feel uncomfortable and prefer to observe rather than participate actively.
        **Employment:** You may excel in roles that allow for independent work and deep focus.
        **Leisure Activities:** You enjoy quiet activities such as reading, writing, or solving puzzles.
        **Things to Avoid:** Overcommitting to social obligations that cause stress.
        **Self-Perception:** You see yourself as thoughtful and rational.
        **Strengths:** Self-awareness, logical thinking, introspection.
        **Weaknesses:** Social anxiety, tendency to avoid social interactions.
        **Obstacles:** Overcoming social anxiety and building confidence.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '2a': `**Type 2a: Sensitive Helper (Spiritual)**\n
        **Description:** You are compassionate and empathetic, often putting others' needs before your own. You have a deep spiritual side that guides you in your efforts to help and support others. Your sensitivity allows you to connect with people on a profound level, making you a natural caregiver.
        **Behavior in Social Settings:** You are warm and approachable, often providing support and comfort to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or social work.
        **Leisure Activities:** You enjoy activities that allow you to help others and connect with your spiritual side.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and nurturing.
        **Strengths:** Empathy, compassion, deep connection with spirituality.
        **Weaknesses:** Tendency to neglect self-care, sensitivity to others' emotions.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** Your spirituality provides you with a sense of purpose and guidance in your efforts to help others.`,

        '2b': `**Type 2b: Sensitive Helper (Balanced)**\n
        **Description:** You are compassionate and empathetic, often putting others' needs before your own. You maintain a balance between helping others and taking care of yourself. Your balanced approach allows you to provide support without neglecting your own well-being.
        **Behavior in Social Settings:** You are warm and approachable, often providing support and comfort to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or social work.
        **Leisure Activities:** You enjoy activities that allow you to help others and relax.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and balanced.
        **Strengths:** Empathy, compassion, balanced approach to caregiving.
        **Weaknesses:** Sensitivity to others' emotions, tendency to neglect self-care at times.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '2c': `**Type 2c: Sensitive Helper (Rational)**\n
        **Description:** You are compassionate and empathetic, often putting others' needs before your own. You rely on logic and reason to navigate your caregiving efforts, ensuring that your support is practical and effective. Your rational approach helps you provide support without becoming overwhelmed by emotions.
        **Behavior in Social Settings:** You are warm and approachable, often providing support and comfort to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or social work.
        **Leisure Activities:** You enjoy activities that allow you to help others and engage your mind.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and rational.
        **Strengths:** Empathy, compassion, logical thinking.
                **Weaknesses:** Sensitivity to others' emotions, tendency to neglect self-care.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '3a': `**Type 3a: Cautious Thinker (Spiritual)**\n
        **Description:** You are thoughtful and analytical, often approaching situations with caution and careful consideration. You have a deep spiritual side that provides you with insight and guidance. Your introspective nature allows you to connect with your inner self and make well-informed decisions.
        **Behavior in Social Settings:** You are reserved and prefer meaningful conversations over small talk.
        **Employment:** You may excel in roles that require analysis, research, or strategic planning.
        **Leisure Activities:** You enjoy quiet activities such as reading, meditating, or exploring spiritual concepts.
        **Things to Avoid:** Overthinking and becoming paralyzed by analysis.
        **Self-Perception:** You see yourself as thoughtful and introspective.
        **Strengths:** Analytical thinking, introspection, deep connection with spirituality.
        **Weaknesses:** Tendency to overthink, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** Your spirituality provides you with comfort and guidance in your analytical journey.`,

        '3b': `**Type 3b: Cautious Thinker (Balanced)**\n
        **Description:** You are thoughtful and analytical, often approaching situations with caution and careful consideration. You maintain a balance between logic and intuition, allowing you to make well-rounded decisions. Your balanced approach helps you navigate complex situations with confidence.
        **Behavior in Social Settings:** You are reserved but open to engaging in meaningful conversations.
        **Employment:** You may excel in roles that require analysis, research, or strategic planning.
        **Leisure Activities:** You enjoy activities that stimulate your mind and provide relaxation.
        **Things to Avoid:** Overthinking and becoming paralyzed by analysis.
        **Self-Perception:** You see yourself as thoughtful and balanced.
        **Strengths:** Analytical thinking, balanced approach to decision-making, introspection.
        **Weaknesses:** Tendency to overthink, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '3c': `**Type 3c: Cautious Thinker (Rational)**\n
        **Description:** You are thoughtful and analytical, often approaching situations with caution and careful consideration. You rely heavily on logic and reason to navigate life's challenges, ensuring that your decisions are well-informed and practical. Your rational approach helps you manage uncertainties with confidence.
        **Behavior in Social Settings:** You are reserved and prefer meaningful conversations over small talk.
        **Employment:** You may excel in roles that require analysis, research, or strategic planning.
        **Leisure Activities:** You enjoy activities that stimulate your mind, such as reading, puzzles, or learning new skills.
        **Things to Avoid:** Overthinking and becoming paralyzed by analysis.
        **Self-Perception:** You see yourself as thoughtful and rational.
        **Strengths:** Analytical thinking, logical decision-making, introspection.
        **Weaknesses:** Tendency to overthink, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '4a': `**Type 4a: Practical Achiever (Spiritual)**\n
        **Description:** You are driven and goal-oriented, often focusing on practical achievements and success. You have a deep spiritual side that provides you with motivation and purpose in your pursuits. Your practical approach, combined with your spiritual insights, helps you achieve your goals with integrity.
        **Behavior in Social Settings:** You are confident and often take on leadership roles.
        **Employment:** You may excel in roles that require goal-setting, strategic planning, and execution.
        **Leisure Activities:** You enjoy activities that help you grow personally and professionally, such as workshops or spiritual retreats.
        **Things to Avoid:** Overworking and neglecting your spiritual needs.
        **Self-Perception:** You see yourself as ambitious and purpose-driven.
        **Strengths:** Goal-oriented, practical, deep connection with spirituality.
        **Weaknesses:** Tendency to overwork, difficulty relaxing.
        **Obstacles:** Balancing ambition with self-care and spiritual growth.
        **Spiritual Life:** Your spirituality provides you with motivation and a sense of purpose in your achievements.`,

        '4b': `**Type 4b: Practical Achiever (Balanced)**\n
        **Description:** You are driven and goal-oriented, often focusing on practical achievements and success. You maintain a balance between your professional and personal life, ensuring that you achieve your goals without neglecting your well-being. Your balanced approach helps you navigate challenges with resilience.
        **Behavior in Social Settings:** You are confident and often take on leadership roles.
        **Employment:** You may excel in roles that require goal-setting, strategic planning, and execution.
        **Leisure Activities:** You enjoy activities that help you grow personally and professionally, as well as relaxing hobbies.
        **Things to Avoid:** Overworking and neglecting your well-being.
        **Self-Perception:** You see yourself as ambitious and balanced.
        **Strengths:** Goal-oriented, practical, balanced approach to life.
        **Weaknesses:** Tendency to overwork, difficulty relaxing at times.
        **Obstacles:** Balancing ambition with self-care and personal growth.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '4c': `**Type 4c: Practical Achiever (Rational)**\n
        **Description:** You are driven and goal-oriented, often focusing on practical achievements and success. You rely on logic and reason to navigate your pursuits, ensuring that your efforts are efficient and effective. Your rational approach helps you achieve your goals with precision and clarity.
        **Behavior in Social Settings:** You are confident and often take on leadership roles.
        **Employment:** You may excel in roles that require goal-setting, strategic planning, and execution.
        **Leisure Activities:** You enjoy activities that help you grow personally and professionally, such as reading, learning new skills, or strategic games.
        **Things to Avoid:** Overworking and neglecting your well-being.
        **Self-Perception:** You see yourself as ambitious and rational.
        **Strengths:** Goal-oriented, practical, logical decision-making.
        **Weaknesses:** Tendency to overwork, difficulty relaxing at times.
        **Obstacles:** Balancing ambition with self-care and personal growth.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '5a': `**Type 5a: Social Butterfly (Spiritual)**\n
        **Description:** You are outgoing and enjoy social interactions, often thriving in social settings. You have a deep spiritual side that provides you with a sense of connection and purpose in your interactions. Your sociable nature, combined with your spiritual insights, helps you build meaningful relationships.
        **Behavior in Social Settings:** You are enthusiastic and enjoy engaging with others.
        **Employment:** You may excel in roles that involve networking, public relations, or event planning.
        **Leisure Activities:** You enjoy social activities, such as gatherings, parties, and spiritual events.
        **Things to Avoid:** Overcommitting to social obligations and neglecting self-care.
        **Self-Perception:** You see yourself as sociable and connected.
        **Strengths:** Outgoing, sociable, deep connection with spirituality.
        **Weaknesses:** Tendency to overcommit, difficulty finding alone time.
        **Obstacles:** Balancing social interactions with self-care and spiritual growth.
        **Spiritual Life:** Your spirituality provides you with a sense of connection and purpose in your social interactions.`,

        '5b': `**Type 5b: Social Butterfly (Balanced)**\n
        **Description:** You are outgoing and enjoy social interactions, often thriving in social settings. You maintain a balance between your social life and personal well-being, ensuring that you engage with others without neglecting yourself. Your balanced approach helps you build meaningful relationships with ease.
        **Behavior in Social Settings:** You are enthusiastic and enjoy engaging with others.
        **Employment:** You may excel in roles that involve networking, public relations, or event planning.
        **Leisure Activities:** You enjoy social activities, such as gatherings, parties, and hobbies that involve others.
        **Things to Avoid:** Overcommitting to social obligations and neglecting self-care.
        **Self-Perception:** You see yourself as sociable and balanced.
        **Strengths:** Outgoing, sociable, balanced approach to social interactions.
        **Weaknesses:** Tendency to overcommit, difficulty finding alone time at times.
        **Obstacles:** Balancing social interactions with self-care and personal growth.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '5c': `**Type 5c: Social Butterfly (Rational)**\n
        **Description:** You are outgoing and enjoy social interactions, often thriving in social settings. You rely on logic and reason to navigate your social interactions, ensuring that your engagements are meaningful and effective. Your rational approach helps you build strong, practical relationships.
        **Behavior in Social Settings:** You are enthusiastic and enjoy engaging with others.
        **Employment:** You may excel in roles that involve networking, public relations, or event planning.
                **Leisure Activities:** You enjoy social activities, such as gatherings, parties, and strategic games.
        **Things to Avoid:** Overcommitting to social obligations and neglecting self-care.
        **Self-Perception:** You see yourself as sociable and rational.
        **Strengths:** Outgoing, sociable, logical approach to social interactions.
        **Weaknesses:** Tendency to overcommit, difficulty finding alone time.
        **Obstacles:** Balancing social interactions with self-care and personal growth.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '6a': `**Type 6a: Balanced Connector (Spiritual)**\n
        **Description:** You are a balanced individual who values harmony and connection with others. You have a deep spiritual side that guides you in maintaining balance and building meaningful relationships. Your balanced approach, combined with your spiritual insights, helps you navigate life's challenges with grace.
        **Behavior in Social Settings:** You are approachable and enjoy fostering connections.
        **Employment:** You may excel in roles that require teamwork, mediation, or counseling.
        **Leisure Activities:** You enjoy activities that promote balance and well-being, such as yoga or meditation.
        **Things to Avoid:** Overextending yourself in trying to maintain balance.
        **Self-Perception:** You see yourself as harmonious and connected.
        **Strengths:** Balanced approach to life, strong connections, deep spirituality.
        **Weaknesses:** Tendency to overextend in maintaining harmony.
        **Obstacles:** Maintaining balance without neglecting your own needs.
        **Spiritual Life:** Your spirituality provides you with a sense of harmony and purpose in your connections.`,

        '6b': `**Type 6b: Balanced Connector (Balanced)**\n
        **Description:** You are a balanced individual who values harmony and connection with others. You maintain a balance between your personal needs and your social connections, ensuring that you build meaningful relationships without neglecting yourself. Your balanced approach helps you navigate life's challenges with ease.
        **Behavior in Social Settings:** You are approachable and enjoy fostering connections.
        **Employment:** You may excel in roles that require teamwork, mediation, or counseling.
        **Leisure Activities:** You enjoy activities that promote balance and well-being, such as yoga, group activities, or hobbies.
        **Things to Avoid:** Overextending yourself in trying to maintain balance.
        **Self-Perception:** You see yourself as harmonious and balanced.
        **Strengths:** Balanced approach to life, strong connections.
        **Weaknesses:** Tendency to overextend in maintaining harmony.
        **Obstacles:** Maintaining balance without neglecting your own needs.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '6c': `**Type 6c: Balanced Connector (Rational)**\n
        **Description:** You are a balanced individual who values harmony and connection with others. You rely on logic and reason to maintain balance and build meaningful relationships. Your rational approach helps you navigate life's challenges with clarity and precision.
        **Behavior in Social Settings:** You are approachable and enjoy fostering connections.
        **Employment:** You may excel in roles that require teamwork, mediation, or counseling.
        **Leisure Activities:** You enjoy activities that promote balance and well-being, such as strategic games, discussions, or learning.
        **Things to Avoid:** Overextending yourself in trying to maintain balance.
        **Self-Perception:** You see yourself as harmonious and rational.
        **Strengths:** Balanced approach to life, strong connections, logical thinking.
        **Weaknesses:** Tendency to overextend in maintaining harmony.
        **Obstacles:** Maintaining balance without neglecting your own needs.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '7a': `**Type 7a: Analytical Explorer (Spiritual)**\n
        **Description:** You are curious and analytical, always seeking to understand the world around you. You have a deep spiritual side that provides you with insight and guidance in your explorations. Your analytical approach, combined with your spiritual insights, helps you navigate life's mysteries with curiosity and clarity.
        **Behavior in Social Settings:** You are thoughtful and enjoy deep conversations.
        **Employment:** You may excel in roles that require research, analysis, or exploration.
        **Leisure Activities:** You enjoy activities that stimulate your mind and spirit, such as studying spiritual texts or exploring nature.
        **Things to Avoid:** Overanalyzing and becoming lost in details.
        **Self-Perception:** You see yourself as curious and insightful.
        **Strengths:** Analytical thinking, curiosity, deep spirituality.
        **Weaknesses:** Tendency to overanalyze, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** Your spirituality provides you with a sense of purpose and guidance in your explorations.`,

        '7b': `**Type 7b: Analytical Explorer (Balanced)**\n
        **Description:** You are curious and analytical, always seeking to understand the world around you. You maintain a balance between your analytical mind and your intuition, allowing you to explore life's mysteries with confidence and clarity. Your balanced approach helps you navigate complex situations with ease.
        **Behavior in Social Settings:** You are thoughtful and enjoy deep conversations.
        **Employment:** You may excel in roles that require research, analysis, or exploration.
        **Leisure Activities:** You enjoy activities that stimulate your mind, such as reading, learning new skills, or strategic games.
        **Things to Avoid:** Overanalyzing and becoming lost in details.
        **Self-Perception:** You see yourself as curious and balanced.
        **Strengths:** Analytical thinking, balanced approach to exploration, curiosity.
        **Weaknesses:** Tendency to overanalyze, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

        '7c': `**Type 7c: Analytical Explorer (Rational)**\n
        **Description:** You are curious and analytical, always seeking to understand the world around you. You rely heavily on logic and reason in your explorations, ensuring that your conclusions are well-informed and practical. Your rational approach helps you navigate life's mysteries with precision and clarity.
        **Behavior in Social Settings:** You are thoughtful and enjoy deep conversations.
        **Employment:** You may excel in roles that require research, analysis, or exploration.
        **Leisure Activities:** You enjoy activities that stimulate your mind, such as reading, learning new skills, or strategic games.
        **Things to Avoid:** Overanalyzing and becoming lost in details.
        **Self-Perception:** You see yourself as curious and rational.
        **Strengths:** Analytical thinking, logical decision-making, curiosity.
        **Weaknesses:** Tendency to overanalyze, social reservation.
        **Obstacles:** Balancing analysis with action and decision-making.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`,

        '8a': `**Type 8a: Empathetic Healer (Spiritual)**\n
        **Description:** You are empathetic and compassionate, often seeking to heal and support others. You have a deep spiritual side that guides you in your efforts to help and nurture those around you. Your empathetic nature, combined with your spiritual insights, allows you to connect deeply with others and provide meaningful support.
        **Behavior in Social Settings:** You are warm and approachable, often providing comfort and support to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or healing.
        **Leisure Activities:** You enjoy activities that promote healing and connection, such as meditation, spiritual practices, or volunteering.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and nurturing.
        **Strengths:** Empathy, compassion, deep connection with spirituality.
        **Weaknesses:** Tendency to neglect self-care, sensitivity to others' emotions.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** Your spirituality provides you with a sense of purpose and guidance in your healing efforts.`,

        '8b': `**Type 8b: Empathetic Healer (Balanced)**\n
        **Description:** You are empathetic and compassionate, often seeking to heal and support others. You maintain a balance between helping others and taking care of yourself, ensuring that your efforts are sustainable and effective. Your balanced approach allows you to provide meaningful support without becoming overwhelmed.
        **Behavior in Social Settings:** You are warm and approachable, often providing comfort and support to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or healing.
        **Leisure Activities:** You enjoy activities that promote healing and connection, such as meditation, yoga, or volunteering.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and balanced.
        **Strengths:** Empathy, compassion, balanced approach to caregiving.
        **Weaknesses:** Sensitivity to others' emotions, tendency to neglect self-care.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** You explore different beliefs and practices to find a balance that suits you.`,

                '8c': `**Type 8c: Empathetic Healer (Rational)**\n
        **Description:** You are empathetic and compassionate, often seeking to heal and support others. You rely on logic and reason to guide your caregiving efforts, ensuring that your support is practical and effective. Your rational approach helps you provide meaningful support without becoming overwhelmed by emotions.
        **Behavior in Social Settings:** You are warm and approachable, often providing comfort and support to others.
        **Employment:** You may excel in roles that involve caregiving, counseling, or healing.
        **Leisure Activities:** You enjoy activities that promote healing and connection, such as reading about psychology, participating in support groups, or strategic volunteering.
        **Things to Avoid:** Neglecting your own needs in favor of others.
        **Self-Perception:** You see yourself as compassionate and rational.
        **Strengths:** Empathy, compassion, logical decision-making.
        **Weaknesses:** Sensitivity to others' emotions, tendency to neglect self-care.
        **Obstacles:** Finding a balance between helping others and taking care of yourself.
        **Spiritual Life:** You may be skeptical of spiritual concepts and prefer evidence-based beliefs.`
    };

    const resultType = `${personalityType}${subtype}`;
    const resultDescription = personalityDescriptions[resultType];

    document.getElementById("result").innerText = resultDescription;
});
