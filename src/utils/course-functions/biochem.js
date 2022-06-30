module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Physics')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Chemistry.points >= 8 &&
            payload.Biology.points >= 8 &&
            payload.Mathematics.points >= 8 &&
            payload.Physics.points >= 8
        ) {
            courseTray.push(
                'Karatina University',
                'Kenyatta University',
                'University of Eldoret',
                'University of Kabianga'
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
