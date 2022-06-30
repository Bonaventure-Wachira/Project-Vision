module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('English') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Geography')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.English.points >= 7 &&
            payload.Physics.points >= 7 &&
            payload.Geography.points >= 7
        ) {
            courseTray.push(
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
