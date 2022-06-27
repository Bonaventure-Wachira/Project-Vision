module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Business Studies') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload['Business Studies'].points >= 7 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Laikipia University',
                'Chuka University',
                'Tharaka University'
            );
        }

        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload['Business Studies'].points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'University of Nairobi',
                'Kenyatta University',
                'Laikipia University',
                'Chuka University',
                'Tharaka University'
            );
        }
    }

    const finalArr = [];
    courseTray.forEach((el) => {
        if (finalArr[el]) {
            return;
        }

        finalArr.push(el);
    });

    return finalArr;
};
