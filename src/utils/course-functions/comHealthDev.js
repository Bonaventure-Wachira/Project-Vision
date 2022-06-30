module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Geography') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 7 &&
            payload.English.points >= 6 &&
            payload.Geography.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Chemistry.points >= 6
        ) {
            courseTray.push(
                'Jomo Kenyatta University of Agriculture and Technology',
                'University of Embu',
                'Meru University'
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
