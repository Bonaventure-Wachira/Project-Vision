module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 9 &&
            payload.Mathematics.points >= 10 &&
            payload.English.points >= 7
        ) {
            courseTray.push('University of Nairobi');
        }
        if (
            meanGrade >= 10 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 9
        ) {
            courseTray.push(
                'University of Nairobi',
                'KCA University',
                'Strathmore University',
                'Kenyatta University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Zetech University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 8
        ) {
            courseTray.push(
                'Kenyatta University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Karatina University',
                'University of Kabianga',
                'Meru University',
                'Garissa University'
            );
        }
        if (
            meanGrade >= 8 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 8
        ) {
            courseTray.push(
                'Strathmore University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Kabianga',
                'Meru University',
                'Garissa University'
            );
        }
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 7
        ) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Kabianga',
                'Meru University',
                'Garissa University'
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
