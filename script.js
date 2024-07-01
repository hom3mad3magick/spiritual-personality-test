document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('personality-test');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let scoreSelfWorth = calculateScore([
            form.q1.value, form.q2.value, form.q3.value, form.q4.value,
            form.q5.value, form.q6.value, form.q7.value, form.q8.value
        ]);
        let scoreResilience = calculateScore([
            form.q9.value, form.q10.value, form.q11.value, form.q12.value,
            form.q13.value, form.q14.value, form.q15.value, form.q16.value
        ]);
        let scoreFlexibility = calculateScore([
            form.q17.value, form.q18.value, form.q19.value, form.q20.value,
            form.q21.value, form.q22.value, form.q23.value
        ]);
        let scoreEmotionalStability = calculateScore([
            form.q24.value, form.q25.value, form.q26.value, form.q27.value,
            form.q28.value, form.q29.value
        ]);
        let scoreSocialConfidence = calculateScore([
            form.q30.value, form.q31.value, form.q32.value, form.q33.value,
            form.q34.value, form.q35.value, form.q36.value
        ]);
        let scoreInterpersonalRelationships = calculateScore([
            form.q37.value, form.q38.value, form.q39.value, form.q40.value,
            form.q41.value, form.q42.value, form.q43.value
        ]);
        let scorePersonalGrowth = calculateScore([
            form.q44.value, form.q45.value, form.q46.value, form.q47.value,
            form.q48.value, form.q49.value, form.q50.value
        ]);
        let scoreStressManagement = calculateScore([
            form.q51.value, form.q52.value, form.q53.value, form.q54.value,
            form.q55.value, form.q56.value, form.q57.value
        ]);

        let personalityType = determinePersonalityType(
            scoreSelfWorth, scoreResilience, scoreFlexibility, scoreEmotionalStability,
            scoreSocialConfidence, scoreInterpersonalRelationships, scorePersonalGrowth, scoreStressManagement
        );

        resultDiv.innerHTML = `Your personality type is: ${personalityType}`;
    });

    function calculateScore(values) {
        return values.reduce((total, value) => total + parseInt(value, 10), 0);
    }

    function determinePersonalityType(
        scoreSelfWorth, scoreResilience, scoreFlexibility, scoreEmotionalStability,
        scoreSocialConfidence, scoreInterpersonalRelationships, scorePersonalGrowth, scoreStressManagement
    ) {
        if (scoreSelfWorth >= 38 && scoreResilience >= 38 && scoreFlexibility >= 33 && scoreEmotionalStability >= 22 && scoreSocialConfidence >= 33) {
            return "Mystical Healer";
        } else if (scoreSelfWorth >= 28 && scoreResilience >= 38 && scorePersonalGrowth >= 33 && scoreFlexibility >= 7 && scoreEmotionalStability >= 29) {
            return "Spiritual Seeker";
        } else if (scoreSelfWorth >= 28 && scoreResilience >= 28 && scorePersonalGrowth >= 33 && scoreFlexibility >= 7 && scoreEmotionalStability >= 29) {
            return "Balanced Thinker";
        } 
        // Add more conditions for other personality types
        return "Unknown Type";
    }
});
