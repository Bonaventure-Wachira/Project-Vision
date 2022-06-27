module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 10 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 9
        ) {
            courseTray.push(
                'Kenyatta University',
                'Strathmore University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Moi University',
                'Kabarak University',
                'CUEA'
            );
        }
    }

    if (subjectNames.includes('English')) {
        if (meanGrade >= 10 && payload.English.points >= 9) {
            courseTray.push(
                'Kenyatta University',
                'Strathmore University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Moi University',
                'Kabarak University',
                'CUEA'
            );
        }
        if (meanGrade >= 9 && payload.English.points >= 10) {
            courseTray.push(
                'University of Nairobi',
                'Kenyatta University',
                'Strathmore University',
                'Jomo Kenyatta University of Agriculture and Technology',
                'Kabarak University'
            );
        }
        if (meanGrade >= 7 && payload.English.points >= 9) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'Kabarak University',
                'Moi University',
                'CUEA',
                'Africa Nazarene',
                'Mount Kenya University'
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
