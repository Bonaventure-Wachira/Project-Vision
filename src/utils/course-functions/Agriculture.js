module.exports = (subjectNames, payload, meanGrade) => {
    const courseTray = [];

    if (
        subjectNames.includes('Biology') &&
        subjectNames.includes('Physics') &&
        subjectNames.includes('Chemistry') &&
        subjectNames.includes('Mathematics') &&
        subjectNames.includes('Agriculture') &&
        subjectNames.includes('English')
    ) {
        if (
            meanGrade >= 7 &&
            payload.Biology.points >= 6 &&
            payload.Physics.points >= 6 &&
            payload.Chemistry.points >= 6 &&
            payload.Mathematics.points >= 6 &&
            payload.Agriculture.points >= 6 &&
            payload.English.points >= 6
        ) {
            courseTray.push(
                'University of Nairobi',
                'Taita Taveta University',
                'University of Embu'
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
