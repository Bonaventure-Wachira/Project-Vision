module.exports = (subjectNames, payload, meanGrade) => {
    let courseTray = [];

    // Maths &English
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 9 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'Zetech University',
                'University of Embu',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Laikipia University',
                'Tharaka University'
            );
        }
        if (
            meanGrade >= 10 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 9
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'University of Embu',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Laikipia University',
                'Tharaka University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 8
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Tharaka University',
                'University of Embu',
                'Laikipia University',
                'Zetech University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Maasai Mara University',
                'Chuka University',
                'Laikipia University',
                'Tharaka University'
            );
        }
        if (
            meanGrade >= 8 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 8
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'University of Embu',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Laikipia University',
                'Tharaka University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Embu',
                'Laikipia University',
                'Tharaka University',
                'Zetech University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Kirinyaga University',
                'Laikipia University',
                'Tharaka University'
            );
        }
        if (
            meanGrade >= 8 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 8
        ) {
            courseTray.push(
                'Masinde Muliro University',
                'University of Embu',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Laikipia University',
                'Tharaka University',
                'Kirinyaga University'
            );
        }
        if (meanGrade >= 9 && payload.English.points >= 10) {
            courseTray.push(
                'Jaramogi Oginga Odinga University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Laikipia University',
                'Tharaka University'
            );
        }
    }

    // Maths, Eng, Business Studies
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Business Studies')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 6 &&
            payload['Business Studies'].points >= 7
        ) {
            courseTray.push(
                'Laikipia University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Tharaka University',
                'Zetech University'
            );
        }

        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 5 &&
            payload.English.points >= 5 &&
            payload['Business Studies'].points >= 5
        ) {
            courseTray.push('Laikipia University', 'Tharaka University');
        }

        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload['Business Studies'].points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Chuka University',
                'University of Embu',
                'Laikipia University',
                'Zetech University',
                'Jomo Kenyatta University of Agriculture and Technology'
            );
        }
    }

    function getUnique(array) {
        var uniqueArray = [];

        // Loop through array values
        for (i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    return getUnique(courseTray);
};
