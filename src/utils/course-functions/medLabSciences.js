module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 9 &&
            payload.Chemistry.points >= 9 &&
            payload.Mathematics.points >= 9 &&
            payload.English.points >= 9
        ) {
            courseTray.push(
                'Kenya Methodist University',
                'Mount Kenya University',
                'Kenyatta University'
            );
        }
    }

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Biology.points >= 7
        ) {
            courseTray.push(
                'Kenya Methodist University',
                'Mount Kenya University'
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
