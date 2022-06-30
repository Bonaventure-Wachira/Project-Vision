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
