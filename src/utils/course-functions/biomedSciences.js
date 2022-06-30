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
            payload.Physics.points >= 10 &&
            payload.Mathematics.points >= 10 &&
            payload.Chemistry.points >= 10 &&
            payload.Biology.points >= 10
        ) {
            courseTray.push(
                'Egerton University',
                'Masinde Muliro University',
                'University of Nairobi',
                'Chuka University'
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
