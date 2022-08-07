module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Physics') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Physics.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.Biology.points >= 6
        ) {
            courseTray.push(
                'Dedan Kimathi University',
                'Moi University',
                'Technical University of Kenya'
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
