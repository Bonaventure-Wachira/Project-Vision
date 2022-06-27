module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('English') &&
        subjectNames.includes('Mathematics')
    ) {
        if (
            meanGrade >= 9 &&
            payload.English.points >= 7 &&
            payload.Mathematics.points >= 10
        ) {
            courseTray.push(
                'Kenyatta University',
                'Rongo University',
                'Africa Nazarene',
                'Moi University',
                'Machakos University'
            );
        }

        if (
            meanGrade >= 7 &&
            payload.English.points >= 6 &&
            payload.Mathematics.points >= 8
        ) {
            courseTray.push(
                'Kenyatta University',
                'Rongo University',
                'Moi University',
                'Machakos University'
            );
        }
    }

    if (subjectNames.includes('English')) {
        if (meanGrade >= 8 && payload.English.points >= 9) {
            courseTray.push(
                'Rongo University',
                'Moi University',
                'Machakos University'
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
