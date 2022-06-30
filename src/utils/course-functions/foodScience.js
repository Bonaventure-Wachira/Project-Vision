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
            payload.Physics.points >= 7 &&
            payload.Mathematics.points >= 7 &&
            payload.Chemistry.points >= 7 &&
            payload.Biology.points >= 7
        ) {
            courseTray.push('Masinde Muliro University', 'Egerton University');
        }
    }

    if (
        subjectNames.includes('Physics') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Biology') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Physics.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.Biology.points >= 6 &&
            payload.Agriculture.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push('Tharaka University', 'Chuka University');
        }
    }

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
                'Egerton University',
                'Masinde Muliro University',
                'University of Nairobi'
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
