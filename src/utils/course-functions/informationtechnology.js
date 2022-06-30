module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];
    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 8 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Kenyatta University',
                'Laikipia University',
                'Jaramogi Oginga Odinga University',
                'Jomo Kenyatta University of Agriculture and Technology'
            );
        }
    }

    if (subjectNames.includes('English')) {
        if (meanGrade >= 7 && payload.English.points >= 9) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'Kenyatta University',
                'Jaramogi Oginga Odinga University',
                'Laikipia University'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'Kenyatta University',
                'Jaramogi Oginga Odinga University',
                'Laikipia University'
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
