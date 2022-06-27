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
                'Maseno University',
                'Riara University',
                'Jaramogi Oginga Odinga University',
                'Tom Mboya University'
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
